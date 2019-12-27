/*

ATIVIDADE:

    Selecionar apenas os cachorros
    Retornar a idade real de cada cachorro
    Somar a idade de todos os cachorros juntos

*/

data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
];

// SELECIONAR CACHORROS -> filter

let dogs = data.filter((animal) => {
    return animal.type === 'dog'
})

console.log(dogs)

// RETORNAR IDADES -> map
dogs.map((animal) => {
    return animal.age
})

console.log(dogs)

// SOMAR AS IDADES -> reduce

var calcAge = dogs.reduce((sum, animal) => {
    return sum + animal.age;
}, 0);

console.log(calcAge)

// LISTAR NOME DE TODOS OS DOGS

var listDogsNames = dogs.reduce((sum, animal) => {
    return sum.concat(animal.name)
}, []).join(', ')

console.log(listDogsNames)

