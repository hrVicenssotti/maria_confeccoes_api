const instance = require('../../structures/Database/Clients')
const filter = require('../assets/filter')

const allowedFieldsDefault = ['id', 'nome', 'celular', 'email', 'endereco', 'numero', 'bairro', 'cidade', 'estado']

module.exports = {
    queryAll() {
        return instance.findAll()
            .then(result => {
                const resultado = JSON.parse(JSON.stringify(result))
                return resultado.map((dados) => filter(dados, allowedFieldsDefault))
            })
    },
    queryID(id) {
        return instance.findOne({
            where: {
                id: id
            }
        })
    },
    add(object) {
        return instance.create(object)
    },
    update(id ,object) {
        return instance.update(object, {
                where: {
                    id: id
                }
            })
            .then(result => {
                if (result[0] === 1) {
                    return { code_return: 'UP001', message: 'Cliente atualizado com sucesso'}
                }else {
                    return { code_return: 'UP002', message: 'Cliente não atualizado' }
                }
            })
    },
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