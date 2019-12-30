


getUser = (callback) => {

    return setTimeout(() => {
        callback(null, {
            id: 1,
            name: 'Felipe',
            date: new Date()
        })
    }, 1000)

}


getPhone = (idUser, callback) => {

    return setTimeout(() => {
        callback(null, {
            phone: '988656321',
            ddd: 75
        })
    }, 2000)
}

getAddress = (idUser, callback) => {
    return setTimeout(() => {
        callback(null, {
            street: 'Rua Celina Porto',
            number: 14
        })
    }, 3000)
}



getUser(resolveUser = (error, user) => {
    if (error) {
        console.error('USER ERROR:', error)
        return
    }

    getPhone(user.id, resolvePhone = (error1, phone) => {
        if (error1) {
            console.error('PHONE ERROR:', error1)
            return
        }

        getAddress(user.id, resolveAddress = (error2, address) => {
            if (error2) {
                console.error('ADDRESS ERROR: ', error2)
                return
            }

            console.log(`
                Name: ${user.name},
                Phone: (${phone.ddd}) ${phone.phone}
                Address: ${address.street}, ${address.number}
            `)
        })
    })


})