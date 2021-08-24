const readline = require('readline-sync');

function adivinhacao() {

const aleatorio = Math.trunc(Math.random()*10);
const resp = readline.questionInt('Adivinhe o número sorteado: ');

if (aleatorio === resp) { console.log('Parabéns, número correto!')} 
else { console.log('Opa, não foi dessa vez. O número era ', aleatorio)}

const cont = readline.question('Quer jogar novamente? (S/N) ')

if (cont === 's' || cont === 'S') { adivinhacao(); }
else console.log('Obrigado por jogar!')
  
}

adivinhacao();