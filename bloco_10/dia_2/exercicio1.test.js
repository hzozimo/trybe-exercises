const uppercase = (str, callback) => {
    callback(str.toUpperCase());
};


test('return all letters uppercase', () => {
    expect.assertions(1);
    return uppercase('olar', (str) => {
        expect(str).toBe('OLAR');
    });
});