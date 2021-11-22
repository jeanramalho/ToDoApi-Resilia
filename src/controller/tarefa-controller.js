const Tarefa = require('../model/Tarefa')

const tarefa = (app, bd) =>{

<<<<<<< HEAD
    app.get('/tarefa', (req, res) => {
        bd.all('SELECT * FROM TAREFAS', (error, rows) => {
            if (error) {
                res.json({
                    "mensagem": error.message,
                    "error": true
                })
            } else {
                res.json({
                    "tarefas": rows,
                    "count": rows.length,
                    "error": false
                })
            }
        })
    })

    // AS ROTAS ABAIXO NAO FUNCIONAM MAIS, POIS O BD QUE ESTAMOS USANDO
    // NAO É MAIS O OBJETO COM ARRAY

    app.get('/tarefa/:status', (req, res) => {
=======
    app.get('/tarefa', (req, res)=> {
        res.json({
            "tarefas" : bd.tarefa,
            "count": bd.tarefa.length,
            "error" : false
        })
    })

    app.get('/tarefa/:status', (req, res)=> {
>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4
        const status = req.params.status
        const statusSemHifen = status.split("-").join(" ")

        //  Logica de busca do usuário no bd
<<<<<<< HEAD
        const resultadoBusca = bd.tarefa.filter((tarefa => (tarefa.status === statusSemHifen)))

        // Verificacao da existencia de tarefa com parametro buscado
        if (resultadoBusca.length > 0) {
            res.json({
                "resultado": resultadoBusca,
                "count": resultadoBusca.length,
                "error": false
=======
        const resultadoBusca = bd.tarefa.filter((tarefa=>(tarefa.status === statusSemHifen)))

        // Verificacao da existencia de tarefa com parametro buscado
        if(resultadoBusca.length > 0){
            res.json({
                "resultado": resultadoBusca,
                "count": resultadoBusca.length,
                "error" : false
>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4
            })
        } else {
            res.json({
                "mensagem": `Não foi encontrado nenhuma tarefa com status "${statusSemHifen}"`,
<<<<<<< HEAD
                "error": true
=======
                "error" : true
>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4
            })
        }
    })

<<<<<<< HEAD
    app.delete('/tarefa/:titulo', (req, res) => {
=======
    app.delete('/tarefa/:titulo', (req, res)=> {
>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4
        const titulo = req.params.titulo
        const tituloSemHifen = titulo.split("-").join(" ")

        // Logica de deleção da entidade no bd
<<<<<<< HEAD
        const indexTarefa = bd.tarefa.findIndex((tarefa => tarefa.titulo === tituloSemHifen))

        // Verificacao da existencia de tarefa com parametro buscado
        if (indexTarefa > -1) {
            const tarefaDeletada = bd.tarefa.splice(indexTarefa, 1)
            res.json({
                "deletada": tarefaDeletada,
                "error": false
=======
        const indexTarefa = bd.tarefa.findIndex((tarefa=>tarefa.titulo===tituloSemHifen))

        // Verificacao da existencia de tarefa com parametro buscado
        if(indexTarefa > -1){
            const tarefaDeletada = bd.tarefa.splice(indexTarefa, 1)
            res.json({
                "deletada": tarefaDeletada,
                "error" : false
>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4
            })
        } else {
            res.json({
                "mensagem": `Tarefa com título "${tituloSemHifen}" não existe`,
<<<<<<< HEAD
                "error": true
=======
                "error" : true
>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4
            })
        }
    })

<<<<<<< HEAD
    app.post('/tarefa', (req, res) => {
=======
    app.post('/tarefa', (req, res)=> {
>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4
        // Usar o try-catch para pegar o erro, caso a validacao
        // do model de erro, ou outro erro apareça
        try {
            const body = req.body
            //Importante validar os campos com o model
            const novaTarefa = new Tarefa(body.usuario, body.titulo, body.status)
    
            //Logica de inserção da entidade no bd
            bd.tarefa.push(novaTarefa)
            console.log(bd.tarefa)
            // --------------------------
            
            // Resposta para o cliente
            res.json({
                "requisicao" : novaTarefa,
                "erro" : false 
            })
        } catch (error) {
            // Resposta em caso de erro
            res.json({
                "mensagem" : error.message,
                "erro" : true 
            })
        }
    })
    
}

module.exports = tarefa