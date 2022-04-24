const { Router } = require('express')
const Client = Router()

Client.get('/', (re, res) => {
    res.send('Olá mundo')
})

module.exports = Client