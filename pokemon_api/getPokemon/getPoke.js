const { getPokemon } = require('./service')

async function search() {

    const pokemon = 'ditto' // if i change the name it will get the api data
    const api = await getPokemon(pokemon)

    //get pokemon name 
    const pokeName = api.data.forms[0].name

    //get pokemon abilities
    const pokeAbility = []
    for (let i in api.data.abilities) {
        const ability = api.data.abilities[i].ability.name
        pokeAbility.push(ability)
    }

    //get pokemon types
    const pokeTypes = []
    for (let i in api.data.types) {
        const type = api.data.types[i].type.name
        pokeTypes.push(type)
    }

    console.log(`

        Pokemon: ${pokeName}
        Ability: ${pokeAbility}
        Type(s): ${pokeTypes}
    
    `)
}

search()
