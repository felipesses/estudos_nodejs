const { getPeople } = require('./service')

main = async () => {
    try {
        const { results } = await getPeople('a')

        // get and sum all heights

        const mass = results.map(item => parseFloat(item.mass))

        // removing NaN from array
        const newArray = mass.filter((value) => {
            return !Number.isNaN(value)
        })

        console.log('mass: ', newArray)
        const sum = newArray.reduce((prev, next) => {
            return prev + next
        })

        console.log(sum)

    } catch (error) {
        console.error('ERROR: ', error)
    }
}

main()