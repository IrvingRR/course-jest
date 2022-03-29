const sum = require('../src/sum');

describe('Pruebas para suma', () => {

    // Aquí van las pruebas a realizar

    // Primera forma de realizar una prueba con la función "test"
    test('1 + 2 is 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    // Segunda forma de realizar una prueba con la función "it" (Funcionan igual)
    // it('Should return a 3 with 1 + 2', () => {
    //     expect(sum(1, 2)).toBe(3);
    // });

    test('1 + (-2) is -1', () => {
        expect(sum(1, -2)).toBe(-1);
    });

    test('-1 + (-2) is -3', () => {
        expect(sum(-1, -2)).toBe(-3);
    });
});