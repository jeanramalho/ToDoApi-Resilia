const Usuario = require('../../model/Usuario')

const usuario = (app,bd) =>{

    app.get('/array/usuario', (req, res)=> {
        res.json({
            "usuarios" : bd.usuario,
            "count": bd.usuario.length,
            "error" : false
        })
    })

    app.get('/array/usuario/:email', (req, res)=> {
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

    app.delete('/array/usuario/:email', (req, res)=> {
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

    app.post('/array/usuario', (req, res)=> {
        // Usar o try-catch para pegar o erro, caso a validacao
        // do model de erro, ou outro erro apareça
        try {
            const body = req.body
            const novoUsuario = new Usuario(body.nome, body.email, body.senha, true)
            
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

    app.put('/array/usuario/:email', (req, res)=>{
        const email = req.params.email
        const body = req.body

        // Logica de atualizaçao da entidade no bd
        const indexUsuario = bd.usuario.findIndex((usuario=>usuario.email===email))

        // Verificacao da existencia de usuario com parametro buscado
        try {
            if(indexUsuario > -1){
                const usuarioAntigo = bd.usuario[indexUsuario]
                const usuarioAtualizado = new Usuario (
                    body.nome || usuarioAntigo.nome,
                    body.email || usuarioAntigo.email,
                    body.senha || usuarioAntigo.senha,
                    true,
                    usuarioAntigo.id
                )

                bd.usuario[indexUsuario] = usuarioAtualizado
                
                res.json({
                    "atualizado": usuarioAtualizado,
                    "error" : false
                })
            } else {
                res.status(500).json({
                    "mensagem": `Usuário com email "${email}" não existe`,
                    "error" : true
                })
            }
        } catch (error) {
            res.status(500).json({
                "mensagem" : error.message,
                "error" : true
            })
        }
        

        
    })
    
}

module.exports = usuario