const readline = require('readline-sync')
const axios = require('axios')

async function search() {

    const pokemon = searchPokemon()
    const api = await returnJSON(pokemon)
    const ability_1 = api.data.abilities[0].ability.name
    const tipos = []
    for (let i in api.data.types) {
        const tipo1 = api.data.types[i].type.name
        tipos.push(tipo1)
    }
    console.log(`

        Pokémon: ${pokemon}
        Ability 1: ${ability_1}
        Type(s): ${tipos}
    
    `)


}

const URL = 'https://pokeapi.co/api/v2/pokemon'

async function returnJSON(pokemon) {
    const response = await axios.get(`${URL}/${pokemon}`)
    return response
}

function searchPokemon() {
    return readline.question('Search pokemon by name: ')
}


search()