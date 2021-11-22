const rotas = (app)=>{
    
    app.get('/', (req, res)=> {
        console.log("Cheguei na rota")
        res.send(`<h1>Bem vindo a to do api</h1>
                <p>Acesse o repositório https://github.com/cinmcantu/ToDoApi.git</p>`)
    })
}

module.exports = rotas