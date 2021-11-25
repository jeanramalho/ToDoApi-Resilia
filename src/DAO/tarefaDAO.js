class TarefaDAO{
    constructor(bd){
        this.bd = bd
    }

    pegaTodasTarefas(){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM TAREFAS', (error, rows)=>{
                if(error){
                    reject({
                        "mensagem" : error.message,
                        "error" : true
                    }) 
                } else{
                    resolve({
                        "tarefas" : rows,
                        "count": rows.length,
                        "error" : false
                    })
                }
            })
        })  
    }

    insereTarefa(novaTarefa){
        console.log(novaTarefa)
        return new Promise((resolve, reject)=>{
            this.bd.run(`INSERT INTO TAREFAS ( TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?)`,
            [...Object.values(novaTarefa)], 
            (error)=>{
                if(error){
                    reject({
                        "mensagem" : error.message,
                        "erro" : true 
                    })
                } else {
                    resolve({
                        "requisicao" : novaTarefa,
                        "erro" : false 
                    })
                }
            })
        })
    }

}

module.exports = TarefaDAO