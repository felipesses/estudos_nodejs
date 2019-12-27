const numbers = [2, 5, 50, 68, 24, 1, 8, 7]

console.log(numbers.includes(5, 1)) // valor e posição

console.log(`Which position is number ${numbers[1]}? -> ` + numbers.indexOf(5))

console.log('Starting from fourth position: ' + numbers.slice(3)) // começa a partir da 4ª posição, cortando as 3 primeiras

console.log('Second to fourth position: ' + numbers.slice(1, 5)) // vai contar da 2ª até a 4ª posição


// FILTER
console.log('Filter: ' + numbers.filter((element) => element > 6))

// MAP

console.log('Map: ' + numbers.map((element) => {
    return element * 10
}))

// REDUCE

console.log('Reduce: ' + numbers.reduce((previous, current) => {
    return previous + current
}, 0)) // 0 -> valor inicial







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

// FILTER

// Retorna idades maiores que 1

let older = data.filter((animal) => {
    return animal.age > 1
})

console.log(older)

// MAP

// Multiplica as idades por 7

let ages = data.map((animal) => {
    return animal.age * 7
})

console.log(ages)

// REDUCE

// Soma todas as idades

let total = data.reduce((previous, animal) => {
    return previous + animal.age
}, 0)

console.log(total)

// LISTAR NOMES DE TODOS OS GATOS

let cats = data.filter((animal) => {
    return animal.type === 'cat'
})

let listCats = cats.reduce((previous, animal) => {
    return previous.concat(animal.name)
}, []).join(', ')

console.log(listCats)