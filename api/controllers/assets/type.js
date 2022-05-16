const { type } = require('../../models/assets/serielizer')

module.exports = (tipo) => {
    if (tipo === '*/*') {
        return 'application/json'
    } else {
        const index = type.indexOf(tipo)
        if (index === -1) {
            return false
        } else {
            return tipo
        }
    }
}