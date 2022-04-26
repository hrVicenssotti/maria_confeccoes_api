module.exports = (dados, allowedDados) => {
    const newsDados = {}
    allowedDados.map((campo) => {
        newsDados[campo] = dados[campo]
    })
    return newsDados
}