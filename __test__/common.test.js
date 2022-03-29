// Matchers Comunes

test('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4);
});

test('Object validation', () => {
    const data = { username: 'raul_palacios' };
    const data2 = { username: 'raul' };

    expect(data).toEqual({ username: 'raul_palacios' }); //Validar que el objeto "data" sea igual
    
    expect(data).not.toEqual(data2); //Validar que el objeto "data" no sea igual al objeto "data2"
});
        