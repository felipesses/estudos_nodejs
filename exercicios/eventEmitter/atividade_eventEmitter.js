
/*
    ATIVIDADE - Incrementar um cont para cada número que for divisível por 4
*/

const EventEmitter = require('events')

const emitter = new EventEmitter()

const incrementEmitter = () => {
    contador++
    return emitter.emit('my event', contador)
}

const main = () => {
    setInterval(incrementEmitter, 1000)
    return emitter.on('my event', (value) => {
        if (value % 4 == 0) return console.log(`Valor do contador: ${value}`)
        return null
    })
}

let contador = 0

main()
