const compara = (gabarito) => {
    return (resposta) =>  gabarito.toLowerCase() === resposta.toLowerCase();
}

console.log(compara('AMOR')('amor'));