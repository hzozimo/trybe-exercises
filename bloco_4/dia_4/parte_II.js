// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome("arara") ;
// Retorno esperado: true
// verificaPalindrome("desenvolvimento") ;
// Retorno esperado: false

function verificaPalindromo(palavra) {
    console.log(palavra == palavra.split("").reverse().join(""))
    
}
verificaPalindromo("arar")

//a forma de inverter palavras foi tirada do site https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function maiorIndice(array) {
    let resultado = 0;
    for (let index = 0; index <= array.length; index++){
        if (array[index] > array[resultado]) {
            resultado = index;
        }
    }
return resultado
}
 console.log(maiorIndice([2, 3, 6, 7, 10, 1]));

//  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .


function menorIndice(array) {
    let resultado = 0;
    for (let index = 0; index <= array.length; index++){
        if (array[index] < array[resultado]) {
            resultado = index;
        }
    }
return resultado
}
 console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));

//  Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//  Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//  Valor esperado no retorno da função: Fernanda .

function contaLetra (palavra) {
    let contagem=0;
    for (let index = 0 ; index < palavra.length; index++) {
        palavra1 = palavra[index];
        palavra2 = palavra[contagem];
        if (palavra1.length > palavra2.length){
            contagem = index;
        }
    }
    console.log (palavra[contagem])
    return contagem
}
contaLetra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function repetidos (array) {
    let contagem = { };
    let maior = 0;
    let chave;

    for (itens of array) {
        contagem[itens]=0;
    }

    for (itens of array){
        contagem[itens]++
    }

    for (itens of array){
        
        if (contagem[itens]>maior){
            maior = contagem[itens];
            chave = itens
        }
    }
    
    
    console.log(contagem);
    console.log('O valor que mais se repete é o '+ chave)

}

repetidos([2, 3, 2, 5, 8, 2, 3]);

