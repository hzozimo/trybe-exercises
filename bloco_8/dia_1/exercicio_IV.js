const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compara = (gabarito, respostas , funcao) => {
    let total = 0;
// for (let index = 0; index < gabarito.length; index += 1){
//     total += funcao(gabarito[index], respostas[index]);
// }
gabarito.forEach((el, index) =>{ total += funcao(el, respostas[index])});
return total;
}

const checaPontua = (gabarito, resposta) => {
    let resultado = 0;
    gabarito === resposta ? resultado += 1 : (resposta === 'N.A' ? resultado = resultado: resultado -= 0.5);
    return resultado;
}

console.log(compara(rightAnswers, studentAnswers, checaPontua));