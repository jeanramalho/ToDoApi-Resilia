const express = require('express')
const app = express()
const port = 3003

// Importando Controllers
const usuario = require('./controller/usuario-controller')
const tarefa = require('./controller/tarefa-controller')

//importando class Usuario
const Usuario = require(`./Models/Usuario`)

// Middlewares
app.use(express.json())
app.use((req, res, next) => {
    console.log("Rodei o middleware")
    console.log(req.body)
    next()
})

// (OPCIONAL) Rota raiz
app.get('/', (req, res) => {
    console.log("Cheguei na rota")
    res.send(`<h1>Bem vindo a to do api</h1>
            <p>Acesse o repositório https://github.com/cinmcantu/ToDoApi.git</p>`)
})

//Instanciando novo usuario
const novoUser = new Usuario("Jean", "jean@email.com", "123456")


// Rotas das Entidades
usuario(app)
tarefa(app)

// Iniciando o servidor na porta designada
app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}/`)
})