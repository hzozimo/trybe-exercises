//exercício 1
//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: 

// n = 5

// *****
// *****
// *****
// *****
// *****


let n = 5;
console.log("Exercício 1")
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
console.log("Exercício 2")

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
console.log("Exercício 3")
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

// exercicio 4
//Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****

n = 5;
let meio = (n + 1)/2;
console.log(meio)
let esquerda = meio;
let direita = meio;
console.log("Exercício 4")
for (let index = 0; index <= meio; index++) {
    let linha = ""
    for (let index2 = 1; index2 <= n; index2++) {
        if ((index2 > (esquerda)) && (index2 < (direita))) {
        linha = linha + "*"
        } else 
        linha = linha + " "
    }
console.log(linha)
esquerda = esquerda -1;
direita = direita +1;


}

//exercício bonus 5
//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******


n = 9;
meio = (n + 1)/2;
console.log(meio)
esquerda = meio;
direita = meio;
console.log("Exercício 5")
for (let index = 0; index <= meio; index++) {
    let linha = ""
    for (let index2 = 1; index2 <= n; index2++) {
        if ((index2 == (esquerda)) || (index2 == (direita)) || (index == meio))  {
        linha = linha + "*"
        } 
        else
        linha = linha + " "
    }
console.log(linha)
esquerda = esquerda -1;
direita = direita +1;
}