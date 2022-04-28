const instance = require('../../structures/Database/Products')
const filter = require('../assets/filter')
const convert = require('../assets/convertResponse')
const multiplication = require('../assets/multiplication')
const division = require('../assets/division')

class Products{
    constructor() {
        this.allowedFieldsDefault = ['id', 'codigo_produto', 'codigo_barras', 'descricao', 'categoria', 
            'valor_compra', 'porcentagem', 'valor_venda', 'estoque']
        this.messages = {
            'not_unique': 'Valor do campo já informado em outro cadastro.'
        }
        this.operator10 = ['valor_compra', 'porcentagem', 'valor_venda']
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
            .then(result => {
                if (result) {
                    const newdata = division(result, this.operator10)
                    return newdata
                }  else {
                    return { code_return: 'GET001', message: 'Nenhum produto encontrado', id }
                } 
            })
            .catch(erro => erro.errors)
    }
    add(object) {
        const newdata = multiplication(object, this.operator10)
        return instance.create(newdata)
            .catch(error => {
                console.log(error)
                const errors = convert(error)
                const erro = errors.errors[0]
                const message = this.messages[erro.validatorKey] ? this.messages[erro.validatorKey] : 'Erro desconhecido'
                const value = erro.value ? erro.value : 'Valor desconhecido'
                const field = erro.path ? erro.path : 'Campo desconhecido'
                return {message, value, field}
            })
    }
    update(id, object) {
        const newdata = multiplication(object, this.operator10)
        return instance.update(newdata, {
                where: {
                    id: id
                }
            })
            .then(result => {
                if (result[0] === 1) {
                    return { code_return: 'UP001', message: 'Produto atualizado com sucesso', ...object}
                }else {
                    return { code_return: 'UP002', message: 'Produto não atualizado ou não localizado' }
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
                return { code_return: 'DEL001', message: 'Produto deletado com sucesso'}
            }else {
                return { code_return: 'DEL002', message: 'Produto não localizado' }
            }
        })
    }
}

module.exports = new Products()