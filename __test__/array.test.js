const { animes } = require('../src/arrays');

describe('Verificando elementos de arreglos', () => {
    
    test('Que el arreglo no sea null', () => {
        expect(animes()).not.toBeNull();
    });

    test('Verificar si contiene el valor One piece', () => {
        expect(animes()).toContain('One piece');
    });

    test('Comprobar la longitud del arreglo', () => {
        expect(animes()).toHaveLength(5);
    });

});