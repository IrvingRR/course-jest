// toBeGreaterThan()
// toBeGreaterThanOrEqual()
// toBeLessThan()
// toBe()
// toBeCloseTo()
// toEquals()

test('two plus two', () => {

    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    
    expect(value).toBe(4);
    expect(value).toEqual(4);

});

test('adding floating point number', () => {
    const value = 0.1 + 0.2;

    // expect(value).toBe(0.3); Esto da error porque "value" es igual a 0.3000000042
    expect(value).toBeCloseTo(0.3);
});