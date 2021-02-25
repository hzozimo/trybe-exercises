let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercício 1 
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

//exercicio 2
//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let soma = 0;
for (let i = 0; i < numbers.length; i++) {
    soma = soma + numbers[i]
}
console.log("A soma é " + soma)