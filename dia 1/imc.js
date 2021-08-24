const readline = require('readline-sync');

function imcCalculator() {
  const alt = readline.question('Qual sua altura em metros? ');
  const peso = readline.questionFloat('Qual seu peso em quilos? ');
  imcCalculado = peso / Math.pow(alt, 2);
  console.log('Seu IMC é ', imcCalculado);
  return imcCalculado;
}

function imcTable(imc) {

  if (imc < 18.5) console.log('Abaixo do peso (magreza)')
  if (imc >= 18.5 && imc < 24.9) console.log('Peso Normal')
  if (imc > 25 && imc < 29.9) console.log('Acima do peso (sobrepeso)')
  if (imc > 30.0 && imc < 34.9) console.log('Obesidade grau I')
  if (imc > 35 && imc < 39.9) console.log('Obesidade grau II')
  if (imc > 40) console.log('Obesidade grau III e IV')
  
}

const imc = imcCalculator();
imcTable(imc);