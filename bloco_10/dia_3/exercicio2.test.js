const { JestHook } = require('jest-watcher');
const { randomNumber } = require ( './exercicio1.test.js' );
jest.mock('./exercicio1.test.js')

test('testando mock', () => {
  randomNumber.mockImplementationOnce((a, b) => {return a / b});

  expect(randomNumber(2, 2)).toBe(1);

})

console.log(randomNumber());