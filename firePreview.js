firePreview(dinamicPath, timeUpdate)

async function firePreview(dinamicPath, timeUpdate) {
    const staticPath = window.location.origin + '/'

    if (window.location.port) {
        const originalFiles = await gotFiles(dinamicPath)
        compareFiles(dinamicPath, originalFiles, timeUpdate)
    }

    function compareFiles(dinamicPath, originalFiles, timeUpdate) {
        let newestFiles = []
        setInterval(async () => {

            newestFiles.push(await gotFiles(dinamicPath))
            newestFiles.forEach(newst => {
                newst.forEach(element => {
                    if (!originalFiles.includes(element)) {
                        window.location.reload(true)
                    }
                    if (newestFiles.length > 5) {
                        newestFiles = [];
                    }
                });
            });
        }, timeUpdate);
    }

    async function gotFiles(pathFiles) {
        let files = []
        pathFiles.forEach(async (pathFile) => {
            let file = await getFiles(pathFile)
            let nHash = hash(file);
            files.push(nHash)
        });
        return await files
    }

    async function getFiles(pathFile) {
        return await new Promise((resolve, reject) => {
            $.ajax({
                url: staticPath + pathFile,
                crossDomain: true,
                method: 'GET',
                cache: false,
                success: function (data) {
                    resolve(data);
                },
            });
        });
    }

    function hash(s) {
        let h = 0, l = s.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + s.charCodeAt(i++) | 0;
        return h;
    }
}


