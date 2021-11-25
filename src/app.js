const express = require('express')
const app = express()
const cors = require('cors')

// Importando Controllers
const usuario= require('./controller/usuario-controller')
const tarefa = require('./controller/tarefa-controller')
// (OPCIONAL) Importando rota raiz
const index = require('./controller/index-controller')

// Importando o Banco de Dados SQLite
const bd = require('./infra/sqlite-db')

// Middlewares
app.use(express.json())
app.use((req, res, next)=>{
  console.log("Rodei o middleware")
  next()
})
// CORS
// Da forma que está configurado o cors, ele permite o acesso de
// qualquer origem
app.use(cors())
// É possível configurar o cors() por rota, basta colocar:
// app.verboHTTP('/caminho', cors(), callback)

// Rotas das Entidades
usuario(app,bd)
tarefa(app,bd)
index(app)

//-----Rotas antigas com bd como array------
// -----Apenas para manter o hitórico das aulas-------
const bdArray = require('./infra/bd')
const usuarioBdArray= require('./controller/com-array/usuario-controller-bd-array')
const tarefaBdArray = require('./controller/com-array/tarefa-controller-bd-array')
usuarioBdArray(app,bdArray)
tarefaBdArray(app,bdArray)
//-----------------------------------------


module.exports = app