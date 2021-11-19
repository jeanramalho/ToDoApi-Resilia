const Usuario = require('../model/Usuario')

const usuario = (app,bd) =>{

    app.get('/usuario', (req, res)=> {
        res.json({
            "usuarios" : bd.usuario,
            "count": bd.usuario.length,
            "error" : false
        })
    })

    app.get('/usuario/:email', (req, res)=> {
        const email = req.params.email

        //  Logica de busca do usuário no bd
        const resultadoBusca = bd.usuario.filter((usuario=>usuario.email===email))
        
        // Verificacao da existencia de usuario com parametro buscado
        if(resultadoBusca.length > 0){
            res.json({
                "resultado": resultadoBusca,
                "count": resultadoBusca.length,
                "error" : false
            })
        } else {
            res.json({
                "mensagem": `Não foi encontrado nenhum usuário com email "${email}"`,
                "error" : true
            })
        }
    })

    app.delete('/usuario/:email', (req, res)=> {
        const email = req.params.email

        // Logica de deleção da entidade no bd
        const indexUsuario = bd.usuario.findIndex((usuario=>usuario.email===email))

        // Verificacao da existencia de usuario com parametro buscado
        if(indexUsuario > -1){
            const usuarioDeletado = bd.usuario.splice(indexUsuario, 1)
            res.json({
                "deletado": usuarioDeletado,
                "error" : false
            })
        } else {
            res.json({
                "mensagem": `Usuário com email "${email}" não existe`,
                "error" : true
            })
        }

    })

    app.post('/usuario', (req, res)=> {
        // Usar o try-catch para pegar o erro, caso a validacao
        // do model de erro, ou outro erro apareça
        try {
            const body = req.body
            const novoUsuario = new Usuario(body.nome, body.email, body.senha)
            
            //Logica de inserção da entidade no bd
            bd.usuario.push(novoUsuario)
            console.log(bd.usuario)
            //--------------------------------

            // Resposta para o cliente
            res.json({
                "requisicao" : novoUsuario,
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

module.exports = usuario