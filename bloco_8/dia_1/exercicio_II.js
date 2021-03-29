const resultadoSorteiro = (numeroApostado, funcao) => {
    const resultado = Math.ceil(Math.random() * 5);
    funcao(numeroApostado, resultado);
}

const checa = (a,b) => (a === b)? console.log('Parabéns você ganhou'):console.log('Tente novamente');

resultadoSorteiro(4,checa);