const Usuario = require('../model/Usuario')

const usuario = (app, bd) => {

    app.get('/usuario', (req, res) => {
        res.json({
            "usuarios": bd.usuario
        })
    })

    app.get('/usuario/:nome/:idade', (req, res) => {
        const nome = req.params.nome
        const idade = req.params.idade
        res.json({
            "mensagem": "rota ativada por parametro",
            "parametro1": nome,
            "parametro2": idade
        })
    })

    app.get('/usuario/:email', (req, res) => {
        const email = req.params.email
        for (let i = 0; i <= bd.length; i++) {
            if (bd[i].email == email) {
                return `o email encontrado e ${email}`
            }
        }
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