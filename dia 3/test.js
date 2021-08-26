const { expect } = require('chai');
const {testePositivo, escreveArquivo} = require('./exercise');
const fs = require('fs');
const sinon = require('sinon');


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

describe('Verifica se escreve Arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync').returns('SOCORRO SUBI NO ONIBUS EM MARROCOS');
  });
  after(() => {fs.writeFileSync.restore()});
  it('a resposta é ok', () => {
  
    const resposta = escreveArquivo('teste.txt', 'SOCORRO SUBI NO ONIBUS EM MARROCOS');

    expect(resposta).to.be.equals('ok');

  })
})