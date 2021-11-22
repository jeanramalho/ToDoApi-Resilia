var id = 0

class Usuario {
    constructor(nome, email, senha){
        this.id = id++
        this.nome = nome
        this.email = email
        this.senha = this.verificaSenha(senha)
    }

    _verificaSenha(senha){
        if(senha.length <= 6){
            return senha
        } else{
            throw new Error("senha tem que ter até 6 caracteres")
        }
    }

}

module.exports = 