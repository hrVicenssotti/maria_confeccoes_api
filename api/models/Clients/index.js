const instance = require('../../structures/Database/Clients')
const filter = require('../assets/filter')
const convert = require('../assets/convertResponse')

class Client{
    constructor() {
        this.allowedFieldsDefault = ['id', 'nome', 'celular', 'email', 
        'endereco', 'numero', 'bairro', 'cidade', 'estado']
        this.messages = {
            'not_unique': 'Valor do campo já informado em outro cadastro.'
        }
    }
    queryAll() {
        return instance.findAll()
            .then(result => {
                const resultado = convert(result)
                return resultado.map((dados) => filter(dados, this.allowedFieldsDefault))
            })
            .catch(erro => erro.errors)
    }
    queryID(id) {
        return instance.findOne({
                where: {
                    id: id
                }
            })
            .then(result => result ? result : {code_return: 'GET001', message: 'Nenhum cliente encontrado', id} )
            .catch(erro => erro.errors)
    }
    add(object) {
        return instance.create(object)
            .catch(error => {
                const errors = convert(error)
                const erro = errors.errors[0]
                const message = this.messages[erro.validatorKey] ? this.messages[erro.validatorKey] : 'Erro desconhecido'
                const value = erro.value ? erro.value : 'Valor desconhecido'
                const field = erro.path ? erro.path : 'Campo desconhecido'
                return {message, value, field}
            })
    }
    update(id, object) {
        return instance.update(object, {
                where: {
                    id: id
                }
            })
            .then(result => {
                if (result[0] === 1) {
                    return { code_return: 'UP001', message: 'Cliente atualizado com sucesso', ...object}
                }else {
                    return { code_return: 'UP002', message: 'Cliente não atualizado ou não localizado' }
                }
            })
            .catch(erro => erro.errors)
    }
    delete(id) {
        return instance.destroy({
            where: {
                id: id
            }
        })
        .then(result => {
            if (result === 1) {
                return { code_return: 'DEL001', message: 'Cliente deletado com sucesso'}
            }else {
                return { code_return: 'DEL002', message: 'Cliente não localizado' }
            }
        })
    }
}

module.exports = new Client()