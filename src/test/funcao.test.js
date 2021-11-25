const calculadora = require('./calculadora')

describe('Testando soma', ()=>{
    test('Espero que resultado seja 4', ()=>{
        expect(calculadora.soma(1,3)).toBe(4)
    })
    
    test('Espero que resultado seja 4', ()=>{
        expect(calculadora.soma(1,1)).toBeGreaterThan(0)
    })
})

describe('Testando sub', ()=>{
    test('Espero que resultado seja 4', ()=>{
        expect(calculadora.sub(3,1)).toBe(2)
    })
    
    test('Espero que resultado seja 4', ()=>{
        expect(calculadora.sub(1,3)).toBeLessThan(0)
    })
})