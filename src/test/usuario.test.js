const Usuario = require('../model/Usuario')

test('Inserindo usuario', ()=>{
    expect(()=>{
        const novoUsuario = new Usuario("oi", "email@email.com", "11111111")
    }).toThrow()
})