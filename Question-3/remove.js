const wiss = require("fs")


const removeLogFiles = async () => {
    let pathDir = `${__dirname}/Logs`
    try {
        let files = await wiss.promises.readdir(pathDir)
        files.forEach(file => {
            console.log(file)
        })
        files.forEach(file => {
            wiss.unlink(`${pathDir}/${file}`, err => {
                if (err) {
                    throw err
                }
                console.log(`Delete file... ${file}`)
            })
        })
        wiss.rmdir(pathDir, { recursive: true }, (err, data) => {
            if (err) {
                throw err
            }
            console.log("Logs directory has been  removed")
        })
    } catch (error) {
        console.log("the Path is not found")
    }
}

removeLogFiles()
