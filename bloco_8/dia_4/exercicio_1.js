
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
const juntar = (resultado, el) => resultado.concat(el);

 let saida = arrays.reduce(juntar);

 return saida;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);