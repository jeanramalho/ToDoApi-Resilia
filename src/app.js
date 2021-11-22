const express = require('express')
const app = express()
const port = 3003

// Importando Controllers
const usuario= require('./controller/usuario-controller')
const tarefa = require('./controller/tarefa-controller')
<<<<<<< HEAD
    // (OPCIONAL) Importando rota raiz
const outrasRotas = require('./controller/rotas-extras-controller')

// Importando o Banco de Dados SQLite
const bd = require('./infra/sqlite-db')

// Middlewares
app.use(express.json())
app.use((req, res, next) => {
    console.log("Rodei o middleware")
    next()
})

// Rotas das Entidades
usuario(app, bd)
tarefa(app, bd)
outrasRotas(app)

//-----Rotas antigas com bd como array------
// -----Apenas para manter o hitórico das aulas-------
const bdArray = require('./infra/bd')
const usuarioBdArray = require('./controller/usuario-controller-bd-array')
const tarefaBdArray = require('./controller/tarefa-controller-bd-array')
usuarioBdArray(app, bdArray)
tarefaBdArray(app, bdArray)
    //-----------------------------------------
=======
// (OPCIONAL) Importando rota raiz
const outrasRotas = require('./controller/rotas-extras-controller')

// Importando o Banco de Dados
const bd = require('./infra/bd')

// Middlewares
app.use(express.json())
app.use((req, res, next)=>{
  console.log("Rodei o middleware")
  next()
})

// Rotas das Entidades
usuario(app,bd)
tarefa(app,bd)
outrasRotas(app)
>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4

// Iniciando o servidor na porta designada
app.listen(port, ()=>{
    console.log(`Servidor rodando: http://localhost:${port}/`)
})