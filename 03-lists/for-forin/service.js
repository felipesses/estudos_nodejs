const axios = require('axios')

const URL = 'https://swapi.co/api/people'

getPeople = async (name) => {
    const url = `${URL}/?search=${name}&format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    getPeople
}