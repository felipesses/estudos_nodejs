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





main = async () => {
    try {
        const user = await getUser()
        const phone = await getPhone(user.id)
        const address = await getAddressAsync(user.id)


        console.log(`
            Name: ${user.name}
            Phone: (${phone.ddd}) ${phone.phone}
            Address: ${address.street}, ${address.number}
        `)


    } catch (error) {
        console.error('ERROR: ', error)
    }
}

main()