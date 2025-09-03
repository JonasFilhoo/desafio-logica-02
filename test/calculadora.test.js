const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da Função de Soma', () => {

    it('Somar dois números zerados para que o resultado ainda seja zero', () => {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(0,0);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(0);
    });

    it('Somar dois numero negativos para que o resultado ainda seja negativo', () => {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(-10,-20);

        //Compara o resultado com o valor que você espera

        expect(resultadoDaSoma).to.equal(-30)
    })

});