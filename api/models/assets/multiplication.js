module.exports = (dados, campos) => {
    campos.forEach(campo => {
        if (dados[campo]) {
            dados[campo] = Math.floor(dados[campo] * 100)
        }
    })
    return dados
}