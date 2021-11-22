const Usuario = require('../model/Usuario')

<<<<<<< HEAD
const usuario = (app, bd) => {
    app.get('/usuario', (req, res) => {

        bd.all('SELECT * FROM USUARIOS', (error, rows) => {
            if (error) {
                res.json({
                    "mensagem": error.message,
                    "error": true
                })
            } else {
                res.json({
                    "usuarios": rows,
                    "count": rows.length,
                    "error": false
                })
            }
        })
    })

    // AS ROTAS ABAIXO NAO FUNCIONAM MAIS, POIS O BD QUE ESTAMOS USANDO
    // NAO É MAIS O OBJETO COM ARRAY

    app.get('/usuario/:email', (req, res) => {
        const email = req.params.email

        //  Logica de busca do usuário no bd
        const resultadoBusca = bd.usuario.filter((usuario => usuario.email === email))

        // Verificacao da existencia de usuario com parametro buscado
        if (resultadoBusca.length > 0) {
            res.json({
                "resultado": resultadoBusca,
                "count": resultadoBusca.length,
                "error": false
            })
        } else {
            res.json({
                "mensagem": `Não foi encontrado nenhum usuário com email "${email}"`,
                "error": true
=======
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
>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4
            })
        }

    })

<<<<<<< HEAD
    app.delete('/usuario/:email', (req, res) => {
        const email = req.params.email

        // Logica de deleção da entidade no bd
        const indexUsuario = bd.usuario.findIndex((usuario => usuario.email === email))

        // Verificacao da existencia de usuario com parametro buscado
        if (indexUsuario > -1) {
            const usuarioDeletado = bd.usuario.splice(indexUsuario, 1)
            res.json({
                "deletado": usuarioDeletado,
                "error": false
            })
        } else {
            res.json({
                "mensagem": `Usuário com email "${email}" não existe`,
                "error": true
            })
        }

    })

    app.post('/usuario', (req, res) => {
=======
    app.post('/usuario', (req, res)=> {
>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4
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
<<<<<<< HEAD
                "mensagem": error.message,
                "erro": true
=======
                "mensagem" : error.message,
                "erro" : true 
>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4
            })
        }
        


        
    })
<<<<<<< HEAD

    app.put('/usuario/:email', (req, res) => {
        const email = req.params.email
        const body = req.body

        // Logica de atualizaçao da entidade no bd
        const indexUsuario = bd.usuario.findIndex((usuario => usuario.email === email))

        // Verificacao da existencia de usuario com parametro buscado
        try {
            if (indexUsuario > -1) {
                const usuarioAntigo = bd.usuario[indexUsuario]
                const usuarioAtualizado = new Usuario(
                    body.nome || usuarioAntigo.nome,
                    body.email || usuarioAntigo.email,
                    body.senha || usuarioAntigo.senha,
                    usuarioAntigo.id,
                )

                res.json({
                    "atualizado": usuarioDeletado,
                    "error": false
                })
            } else {
                res.json({
                    "mensagem": `Usuário com email "${email}" não existe`,
                    "error": true
                })
            }
        } catch (error) {
            res.json({
                "mensagem": error.message,
                "error": true
            })
        }



    })

}

=======
    
}

>>>>>>> 8b7c1528023be8ea94624146087db4b65390e2a4
module.exports = usuario