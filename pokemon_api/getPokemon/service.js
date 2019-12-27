const axios = require('axios')

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

async function getPokemon(pokemon) {
    const response = await axios.get(`${baseURL}/${pokemon}`)
    return response
}

module.exports = {
    getPokemon
}