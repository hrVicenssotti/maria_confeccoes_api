const instance = require('../../structures/Database/Clients')

module.exports = {
    queryAll() {
        return instance.findAll()
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
    }
}