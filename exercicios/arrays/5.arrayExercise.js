// RETORNAR AS PESSOAS MENORES E MAIORES DE IDADE


const person = [
    {
        name: 'Felipe',
        age: '19'
    },
    {
        name: 'Gabriel',
        age: '33'
    },
    {
        name: 'Ana',
        age: '19'
    },
    {
        name: 'Marlui',
        age: '50'
    },
    {
        name: 'Rita',
        age: '45'
    },
    {
        name: 'Erika',
        age: '25'
    },

    {
        name: 'Gustavo',
        age: '15'
    },

    {
        name: 'Enzo',
        age: '4'
    },


]


const ages = person.reduce((initialValue, arrayValue) => {
    const prop = arrayValue.age >= 18 ? 'maiores' : 'menores'
    initialValue[prop].push(arrayValue) // initialValue -> objeto maior ou menor, prop -> valor das idades
    return initialValue
}, { maiores: [], menores: [] })


console.log(ages)