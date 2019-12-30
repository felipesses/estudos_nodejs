const { getPeople } = require('./service')

main = async () => {
    try {
        const results = await service.getPeople('a')

        // USING MAP
        const names = results.results.map((person) => person.name)



        console.log('Names: ', names)
    } catch (error) {
        console.error('ERRO: ', error)
    }
}

main()