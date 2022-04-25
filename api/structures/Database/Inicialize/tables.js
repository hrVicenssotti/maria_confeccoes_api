const Clientes = require("../Clients")

Clientes
    .sync()
    .then(() => {
        console.log('Tabela criada com sucesso')
    })
    .catch(console.log)