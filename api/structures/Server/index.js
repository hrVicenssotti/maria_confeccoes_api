const Client = require('../../controllers/Clients')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/Clientes', Client)

module.exports = app