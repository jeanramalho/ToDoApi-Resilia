const app = require('./app')
const port = 3003

// Iniciando o servidor na porta designada
app.listen(port, ()=>{
    console.log(`Servidor rodando: http://localhost:${port}/`)
})