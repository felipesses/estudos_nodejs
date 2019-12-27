

getUser = () => {
    return new Promise((resolvePromise = (resolve, reject) => {
        return setTimeout(() => {
            resolve({
                id: 1,
                name: 'Felipe',
                date: new Date()
            })
        }, 1000)
    }))

}


getPhone = (idUser) => {
    return new Promise((resolvePromise = (resolve, reject) => {
        return setTimeout(() => {
            resolve({
                phone: '988656321',
                ddd: 75
            })
        }, 2000)
    }))
}

getAddress = (idUser, callback) => {
    return setTimeout(() => {
        callback(null, {
            street: 'Rua Celina Porto',
            number: 14
        })
    }, 3000)
}

const util = require('util')
const getAddressAsync = util.promisify(getAddress)

const userPromise = getUser()

userPromise

    .then((user) => {
        return getPhone(user.id)
            .then(resolvePhone = (result) => {
                return {
                    user: {
                        id: user.id,
                        name: user.name
                    },

                    phone: result

                }
            })
    })

    .then((resultado) => {
        const address = getAddressAsync(resultado.user.id)
        return address.then(resolveAddress = (result) => {
            return {
                user: resultado.user,
                phone: resultado.phone,
                address: result
            }
        })
    })

    .then((resultado) => {
        console.log(`
        Name: ${resultado.user.name}
        Address: ${resultado.address.street}, ${resultado.address.number}
        Phone: (${resultado.phone.ddd}) ${resultado.phone.phone}
        `)
    })
    .catch((error) => {
        console.error('ERROR IN PROMISE', error)
    })
