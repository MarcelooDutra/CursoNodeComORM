//subir servidor local
const express = require('express')
const routes = require('./routes')

//inicia o express
const app = express()

//porta onde o servidor vai escutar
const port = 3000

routes(app)

//servidor vai escutar a porta 3000
app.listen(port, () => console.log(`Servidor escutando na porta ${port}`))

//exportar o app para ficar disponivel para o restante da aplicação
module.exports = app