const { getPeople } = require('./service')

main = async () => {
    try {
        const result = await service.getPeople('a')
        const names = []

        /////////////// FOR ////////////////
        // for (let i = 0; i <= result.results.length - 1; i++) {
        //     const person = result.results[i]
        //     names.push(person.name)
        // }

        /////////////// FOR IN ////////////////

        for (let i in result.results) {
            const person = result.results[i]
            names.push(person.name)
        }


        /////////////// FOR OF ////////////////

        // for (person of result.results) {
        //     names.push(person.name)
        // }


        console.log('Names: ', names)
    } catch (error) {
        console.error('ERROR: ', error)
    }
}

main()