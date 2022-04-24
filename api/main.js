const app = require('./structures/Server')
const config = require('config')

const port = config.get('server.port')
    
app.listen(port, () => { 
    console.log(`Servidor iniciado na porta ${port}`) 
})
