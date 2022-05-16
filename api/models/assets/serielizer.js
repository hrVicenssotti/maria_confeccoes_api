//Tipo padrão é 'application/json
const serializer = {
    'application/json': (dados) => {
        
    }
}

module.exports = {
    serializer: serializer,
    type: Object.keys(serializer)
}