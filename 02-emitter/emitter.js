const stdin = process.openStdin()

main = () => {
    return new Promise((resolve, reject) => {
        stdin.addListener('data', (value) => {
            return resolve(value)
        })
    })
}

main().then((result) => {
    console.log('result: ', result.toString())
})