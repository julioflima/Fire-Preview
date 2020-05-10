

(() => {
    const pathRequested = [
        "index.html",
        "js/main/lightNews.js",
        "/css/style.css"
    ]
    try {
        verifyDevelopment()
        const originalFiles = gotFiles(pathRequested)
        compareFiles(originalFiles)

    }
    catch (error) {
        console.log(error)
    }

    function compareFiles(originalFiles) {
        setInterval(() => {
            let newestFiles = gotFiles(pathRequested)
            for (let index = 0; index < originalFiles.length; index++) {
                if (!(originalFiles[index] == newestFiles[index])) {
                }
            }
        },
            1000);
    }

    function verifyDevelopment() {
        if (!window.location.port) {
            throw "Isn't development!"
        }
    }

    function gotFiles(pathRequested) {
        const originalFiles = []
        pathRequested.forEach(async (path) => {
            let file = await getFiles(path)
            let nHash = hash(file);
            console.log({ [path]:nHash})
            originalFiles.push(nHash)
        });

        return originalFiles
    }


    async function getFiles(pathFile) {
        let dataReturn;
        await $.ajax({
            url: window.location.origin + '/' + pathFile,
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

})()

