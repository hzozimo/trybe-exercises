//exercício 1
//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: 

// n = 5

// *****
// *****
// *****
// *****
// *****


let n = 5;

for (let index = 0; index < n; index++) {
    let linha = ""
    for (let index2 = 0; index2 < n; index2++) {
        linha = linha + "*"
    }
    console.log(linha)
}

//exercicio 2
//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

n = 5;

for (let index = 0; index < n; index++) {
    let linha = ""
    for (let index2 = 0; index2 <=index; index2++) {
        linha = linha + "*"
    }
    console.log(linha)
}


//exercício 3
// Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****
//Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
n = 5;
for (let index = 1; index <= n; index++) {
    let linha = ""
    for (let index2 = 1; index2 <=n; index2++) {
        if (index + index2 <= n){
            linha = linha +" "
        } else {
        linha = linha + "*"
        }
    }
    console.log(linha)
}
