const { getCountry } = require('./service')

async function search() {

    const country = '9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee'
    const api = await getCountry(country)

    const isoCode = api.data.results[2].isocode
    const contryName = api.data.results[2].country

    console.log(`
        Iso Code: ${isoCode}
        Country: ${contryName}
    
    `)

}

search()