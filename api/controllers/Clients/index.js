const { Router } = require('express')
const model = require('../../models/Clients')
const setHeaders = require('../assets/setHeaders')
const send = require('../assets/send')
const Client = Router()

Client.get('/', (req, res) => {
    setHeaders(res, 'Content-type', req.headers.accept)
    
    model.queryAll()
        .then(result => send(res, 200, result))
        .catch(erro => send(res, 400, erro))
})
Client.get('/:id', (req, res) => {
    setHeaders(res, 'Content-type', req.headers.accept)
    const id = req.params.id

    model.queryID(id)
        .then(result => send(res, 200, result))
})
Client.post('/', (req, res) => {
    setHeaders(res, 'Content-type', req.headers.accept)
    const dados = req.body

    model.add(dados)        
        .then(result => send(res, 201, result))
        .catch(erro => send(res, 400, erro))
})
Client.put('/:id', (req, res) => {
    setHeaders(res, 'Content-type', req.headers.accept)
    const id = req.params.id
    const dados = req.body

    model.update(id, dados)        
        .then(result => send(res, 200, result))
        .catch(erro => send(res, 400, erro.errors))
})
Client.delete('/:id', (req, res) => {
    setHeaders(res, 'Content-type', req.headers.accept)
    const id = req.params.id

    model.delete(id) 
        .then(result => send(res, 200, result))
        .catch(erro => send(res, 400, erro.errors))
})

module.exports = Client