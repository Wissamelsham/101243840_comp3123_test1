const lowerCaseWords = array => {
    return new Promise((resolve, reject) => {
        let sArray = array.filter(item => typeof item === "string")
        if (sArray.length == 0) {
            reject("you didn't enter a string")
        }
        resolve(sArray.map(string => string.toLowerCase()))
    })
}

lowerCaseWords(["Pizza", 10, true, 25, false, "Wings"])
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })
