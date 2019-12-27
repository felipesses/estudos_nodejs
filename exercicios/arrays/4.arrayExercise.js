//////////////////////////////////////////////////////////////////////////////////

// MAP

const numbers = [1, 2, 3, 4, 5, 6, 20, 88, 98]

let newNumbers = []

for (let i in numbers) {
    newNumbers.push(numbers[i] * 2)
}

const newArrayMap = numbers.map((value) => {
    return value * 2
}) // numeros multiplicados por 2

const arrayMapArrow = numbers.map(value => value * 2) // uma linha apenas com arrow function

const names = ['Felipe', 'Ana', 'Gabriel', 'Rita', 'Erika', 'Marlui']

const namesLowerCase = names.map(name => name.toLowerCase()) // nomes minusculos

///////////////////////////////////////////////////////////////////////////////////////////

// FILTER

// MULTIPLOS DE 2

const numbers2 = [1, 2, 3, 57, 5, 6, 20, 88, 98]

let newNumbers2 = []

for (let i in numbers2) {
    if (numbers2[i] % 2 == 0) {
        newNumbers2.push(numbers2[i])
    }
}

const filteredNumbers = numbers2.filter((number) => {
    return number % 2 == 0
})

const filteredNumbersArrow = numbers2.filter(number => number % 2 == 0)


const arrayMapFilter = numbers2.filter(number => number % 2 == 0)
    .map(number => number * 2) // filtrou os multiplos e multiplicou por 2

/////////////////////////////////////////////////////////////////////////////////////

// REDUCE

let sum = 0

for (let i in numbers) {
    sum = sum + numbers[i]
}

const sumNumbers = numbers.reduce((initialValue, arrayValue) => {
    return initialValue + arrayValue
}, 0) // === sum = sum + numbers[i]

