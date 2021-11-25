const moment = require('moment')
var id = 0


class Tarefa {
    constructor(titulo, descricao, status, idUsuario, idExistente, array){

        if(array){
            if(idExistente){
            this.id = idExistente
            } else {
                this.id = id++
            }
        }
        
        this.titulo = titulo
        this.descricao = descricao
        this.status = this._validaStatus(status)
        this.date = moment().format("YYYY-MM-DD")
        this.idUsuario = idUsuario
    }

    _validaStatus(status){
        const statusValidos = ["a fazer", "feito", "fazendo"]
        if(statusValidos.indexOf(status) > -1){
            return status
        } else {
            throw new Error("O status dever ser igual a: a fazer, feito, fazendo")
        }
    }
}

module.exports = Tarefa