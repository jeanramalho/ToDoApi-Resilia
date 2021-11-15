const usuario = (app) =>{

    app.get('/usuario', (req, res)=> {
        res.send('SOU GET NO USUARIO')
    })

    app.post('/usuario', (req, res)=> {
        const body = req.body
        console.log("o corpo usuário: ", body)
        res.json({
            "requisicao" : body,
            "erro" : false 
        })
    })
    
}

module.exports = usuario