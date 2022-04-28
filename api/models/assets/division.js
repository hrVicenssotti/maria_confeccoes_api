module.exports = (dados, campos) => {
    campos.forEach(campo => {
        if (dados[campo]) {
            dados[campo] = dados[campo] / 100
        }
    })
    return dados
}