
const tarefa = (app) =>{

    app.get('/tarefa', (req, res)=> {
        res.send('Sou get na tarefa')
    })

    app.post('/tarefa', (req, res)=> {
        const body = req.body
        console.log("o corpo tarefa: ", body)
        res.json({
            "requisicao" : body,
            "erro" : false 
        })
    })
    
}

module.exports = 