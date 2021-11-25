const TarefaDAO = require('../DAO/TarefaDAO')
const Tarefa = require('../model/Tarefa')

const tarefa = (app, bd) =>{
    const novaTarefaDAO = new TarefaDAO(bd)

    app.get('/tarefa', (req, res)=> {
        novaTarefaDAO.pegaTodasTarefas()
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.post('/tarefa', (req, res)=> {
        // Usar o try-catch para pegar o erro, caso a validacao
        // do model de erro, ou outro erro apareça
        try {
            const body = req.body
            //Importante validar os campos com o model
            const novaTarefa = new Tarefa(...Object.values(body))
    
            //Logica de inserção da entidade no bd
            novaTarefaDAO.insereTarefa(novaTarefa)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })
        } catch (error) {
            // Resposta em caso de erro
            res.json({
                "mensagem" : error.message,
                "erro" : true 
            })
        }
    })
    // AS ROTAS ABAIXO NAO FUNCIONAM MAIS, POIS O BD QUE ESTAMOS USANDO
    // NAO É MAIS O OBJETO COM ARRAY

    app.get('/tarefa/:status', (req, res)=> {
        const status = req.params.status
        const statusSemHifen = status.split("-").join(" ")

        //  Logica de busca do usuário no bd
        const resultadoBusca = bd.tarefa.filter((tarefa=>(tarefa.status === statusSemHifen)))

        // Verificacao da existencia de tarefa com parametro buscado
        if(resultadoBusca.length > 0){
            res.json({
                "resultado": resultadoBusca,
                "count": resultadoBusca.length,
                "error" : false
            })
        } else {
            res.json({
                "mensagem": `Não foi encontrado nenhuma tarefa com status "${statusSemHifen}"`,
                "error" : true
            })
        }
    })

    app.delete('/tarefa/:titulo', (req, res)=> {
        const titulo = req.params.titulo
        const tituloSemHifen = titulo.split("-").join(" ")

        // Logica de deleção da entidade no bd
        const indexTarefa = bd.tarefa.findIndex((tarefa=>tarefa.titulo===tituloSemHifen))

        // Verificacao da existencia de tarefa com parametro buscado
        if(indexTarefa > -1){
            const tarefaDeletada = bd.tarefa.splice(indexTarefa, 1)
            res.json({
                "deletada": tarefaDeletada,
                "error" : false
            })
        } else {
            res.json({
                "mensagem": `Tarefa com título "${tituloSemHifen}" não existe`,
                "error" : true
            })
        }
    })
    
}

module.exports = tarefa