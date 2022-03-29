describe('Email validation', () => {
    
    test('This is an email address', () => {
        const email = 'raul@gmail.com';

        expect(email).toMatch(/\S+@\S+\.\S+/);
    });

    test('This is not an email address', () => {
        
        const email = 'raulcom';
        expect(email).not.toMatch(/\S+@\S+\.\S+/);

    });

});