const axios = require('axios')

const baseURL = 'http://apiv3.iucnredlist.org/api/v3/country/list'
const baseURL2 = 'http://apiv3.iucnredlist.org/api/v3/country/getspecies'

async function getCountry(country) {
    const response = await axios.get(`${baseURL}?token=${country}`)
    return response
}

async function getSpecies(country) {
    const response = await axios.get(`${baseURL2}/${country}?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee`)
    return response
}

module.exports = {
    getCountry,
    getSpecies
}