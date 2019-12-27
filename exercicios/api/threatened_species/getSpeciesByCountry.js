const { getSpecies } = require('./service')

async function search() {

    const country = 'BR'
    const api = await getSpecies(country)

    const species = api.data.result
    console.log(`
        Species in ${country}: ${species.length}  
    `)

}

search()