const Clientes = require("../Clients")
const Produtos = require("../Products")

Clientes
    .sync()
    .then(() => {
        console.log('Tabela criada com sucesso')
    })
    .catch(console.log)

Produtos
    .sync()
    .then(() => {
        console.log('Tabela criada com sucesso')
    })
    .catch(console.log)