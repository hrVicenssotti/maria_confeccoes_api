const { Router } = require('express')
const model = require('../../models/Clients')
const typeValid = require('../assets/type')
const setHeaders = require('../assets/setHeaders')
const send = require('../assets/send')
const Client = Router()

Client.get('/', (req, res) => {
    const type = typeValid(req.headers.accept)
    if (type) {
        setHeaders(res, 'Content-type', type)        
        model.queryAll()
            .then(result => send(res, 200, result))
            .catch(erro => send(res, 400, erro))
    } else {
        send(res, 400, { 
            code_return: 'GR001', 
            message: 'Content type inválido', 
            type: req.headers.accept
        })
    }
})
Client.get('/:id', (req, res) => {
    const type = typeValid(req.headers.accept)
    if (type) {
        setHeaders(res, 'Content-type', req.headers.accept)
        const id = req.params.id
        model.queryID(id)
            .then(result => send(res, 200, result))
    } else {
        send(res, 400, { 
            code_return: 'GR001', 
            message: 'Content type inválido', 
            type: req.headers.accept
        })
    }
})
Client.post('/', (req, res) => {
    const type = typeValid(req.headers.accept)
    if (type) {
        setHeaders(res, 'Content-type', req.headers.accept)
        const dados = req.body
        model.add(dados)        
            .then(result => send(res, 201, result))
            .catch(erro => send(res, 400, erro))
    } else {
        send(res, 400, { 
            code_return: 'GR001', 
            message: 'Content type inválido', 
            type: req.headers.accept
        })
    }
})
Client.put('/:id', (req, res) => {
    const type = typeValid(req.headers.accept)
    if (type) {
        setHeaders(res, 'Content-type', req.headers.accept)
        const id = req.params.id
        const dados = req.body
        model.update(id, dados)        
            .then(result => send(res, 200, result))
            .catch(erro => send(res, 400, erro.errors))
    } else {
        send(res, 400, { 
            code_return: 'GR001', 
            message: 'Content type inválido', 
            type: req.headers.accept
        })
    }
})
Client.delete('/:id', (req, res) => {
    const type = typeValid(req.headers.accept)
    if (type) {
        setHeaders(res, 'Content-type', req.headers.accept)
        const id = req.params.id
        model.delete(id) 
            .then(result => send(res, 200, result))
            .catch(erro => send(res, 400, erro.errors))
    } else {
        send(res, 400, { 
            code_return: 'GR001', 
            message: 'Content type inválido', 
            type: req.headers.accept
        })
    }
})

module.exports = Client