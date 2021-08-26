const { expect } = require('chai');
const testePositivo = require('./exercise');


describe('testa se', () => {
  it('é um número', () => {
    const palavra = testePositivo('10');

    expect(palavra).to.be.equals('o valor deve ser um número');
  })
  it('e é positivo', () => {

    const positivo = testePositivo(10);

    expect(positivo).to.be.equals('positivo');
  });

  it('e é negativo', () => {

    const negativo = testePositivo(-10);

    expect(negativo).to.be.equals('negativo');
  });

  it('e é neutro', () => {

    const neutro = testePositivo(0);

    expect(neutro).to.be.equals('neutro');
  });
})