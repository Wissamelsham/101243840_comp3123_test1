const wiss = require("fs")
const pro = require("process")

const createLogsDirectory = () => {
    let pathDir = `${__dirname}/Logs`
    let numberOfLogFiles = 10
    if (!wiss.existsSync(pathDir)) {
        wiss.mkdir(pathDir, err => {
            if (err) {
                throw err
            }
            console.log("the Logs directory has been created")
            try {
                pro.chdir("./Logs")
                console.log("please Change the  current working directory to Logs")
            } catch (error) {
                console.log("The requested Directory is not found")
            }

            for (let i = 0; i < numberOfLogFiles; i++) {
                wiss.appendFile(`log${i}.txt`, `Hello from log${i} `, err => {
                    if (err) {
                        throw err
                    }
                    console.log(`log${i}.txt is created`)
                })
            }
        })
    } else {
        console.log("Logs directory is already exists")
    }
}

createLogsDirectory()
