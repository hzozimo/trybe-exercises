const readline = require('readline-sync');

function velocidadeCalculator(dist, tempo) {
  velocidademedia = dist / tempo ;
  console.log('A velocidade média é:', velocidademedia, 'm/s ou', velocidademedia*3.6, 'Km/h' );

  return velocidademedia;
}

const dist = readline.questionInt('Qual a distância percorrida em metros? ');
const tempo = readline.questionInt('Quanto tempo levou para o carro percorrer a distância acima? ');

velocidadeCalculator(dist, tempo);