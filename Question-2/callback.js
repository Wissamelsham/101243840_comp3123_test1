const rPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: "delayed success" })
        }, 500)
    })
}

const rejectedP = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error: "delayed exception" })
        }, 500)
    })
}

rPromise().then(result => {
    console.log(result)
})
rejectedP().catch(err => {
    console.log(err)
})
