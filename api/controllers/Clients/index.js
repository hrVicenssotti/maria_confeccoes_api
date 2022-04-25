const { Router } = require('express')
const model = require('../../models/Clients')
const Client = Router()

Client.get('/', (req, res) => {
    res.setHeader('Content-type', req.headers.accept)
    model.queryAll()
        .then(result => res.send(JSON.stringify(result)))
        .catch(erro => res.send(JSON.stringify(erro.errors)))
})
Client.get('/:id', (req, res) => {
    res.setHeader('Content-type', req.headers.accept)
    const id = req.params.id
    model.queryID(id)
        .then(result => res.send(JSON.stringify(result)))
        .catch(erro => res.send(JSON.stringify(erro.errors)))
})
Client.post('/', (req, res) => {
    res.setHeader('Content-type', req.headers.accept)
    const dados = req.body
    model.add(dados)        
        .then(result => res.send(JSON.stringify(result)))
        .catch(erro => res.send(JSON.stringify(erro.errors)))
})
Client.put('/:id', (req, res) => {
    const id = req.params.id
    const dados = req.body
    model.update(id, dados)        
        .then(result => res.send(JSON.stringify(result)))
        .catch(erro => res.send(JSON.stringify(erro.errors)))
})
Client.delete('/:id', (req, res) => {
    const id = req.params.id
    model.delete(id) 
        .then(result => res.send(JSON.stringify(result)))
        .catch(erro => res.send(JSON.stringify(erro.errors)))
})

module.exports = Client