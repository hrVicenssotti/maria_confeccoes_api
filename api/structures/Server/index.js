const Client = require('../../controllers/Clients')
const Product = require('../../controllers/Products')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/Clientes', Client)
app.use('/Produtos', Product)

module.exports = app