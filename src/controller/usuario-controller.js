const Usuario = require('../model/Usuario')

const usuario = (app, bd) => {

    app.get('/usuario', (req, res) => {
        res.json({
            "usuarios": bd.usuario
        })
    })

    app.post('/usuario', (req, res) => {
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
                "requisicao": novoUsuario,
                "erro": false
            })
        } catch (error) {
            // Resposta em caso de erro
            res.json({
                "mensager": error.message,
                "erro": true
            })
        }




    })

}

module.exports = usuario