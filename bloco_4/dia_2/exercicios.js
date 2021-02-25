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

//exercicio 3
//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaAritimetica = soma / numbers.length;
console.log("A média entre os valores é " + mediaAritimetica)

//exercicio 4
//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaAritimetica > 20) {
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")
}

//exercicio 5
//