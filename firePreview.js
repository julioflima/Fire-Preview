function firePreview(dinamicPath, timeUpdate) {
    const staticPath = window.location.origin + '/'
    const actualPath = window.location.href


    if (window.location.port) {
        const originalFiles = gotFiles(dinamicPath)
        compareFiles(originalFiles, dinamicPath)
    }

    function compareFiles(originalFiles, dinamicPath) {
        setInterval(() => {
            let newestFiles = gotFiles(dinamicPath)
            for (let index = 0; index < originalFiles.length; index++) {
                console.log({
                    'originalFiles': originalFiles[index],
                    'newestFiles': newestFiles[index]
                })
                if (!(originalFiles[index] == newestFiles[index])) {
                    // window.location = actualPath;
                }
            }
        },
            timeUpdate);
    }

    function gotFiles(pathRequested) {
        const originalFiles = []
        pathRequested.forEach(async (path) => {
            let file = await getFiles(path)
            let nHash = hash(file);
            originalFiles.push(nHash)
        });

        return originalFiles
    }

    async function getFiles(pathFile) {
        let dataReturn;
        await $.ajax({
            url: staticPath + pathFile,
            method: 'GET',
            success: function (data) {
                dataReturn = data;
            },
        });
        return dataReturn;
    }

    function hash(s) {
        let h = 0, l = s.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + s.charCodeAt(i++) | 0;
        return h;
    }

}

