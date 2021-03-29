const compara = (gabarito) => (resposta) =>  gabarito.toLowerCase() === resposta.toLowerCase();

console.log(compara('AMOR')('amor'));