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
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (maior < numbers[i]) { 
        maior = numbers[i]
    }
}
console.log(`O maior número é ${maior}`)

//exercícío 6
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 == 1){
        impar++
    }
}
if (impar > 0) {
    console.log(`Quantidade de números ímpares: ${impar}`)
} else{
    console.log("Nenhum valor ímpar encontrado")
}

//exercicio 7
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (menor > numbers[i]) { 
        menor = numbers[i]
    }
}
console.log(`O menor número é ${menor}`)

//exercicio 8
//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

let numbers2 =[];

for (index = 1; index <= 25; index++) {
    numbers2.push(index)
}
console.log(`${numbers2}`)

//exercicio 9
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 
let divisao = []
for (index = 0; index < 25; index++) {
    divisao.push((numbers2[index] / 2))
}
console.log(`${divisao}`)

//exercicio bônus 1
//Ordene o array numbers em ordem crescente e imprima seus valores;

for (let index = 1; index < numbers.length; index++) {
    for (let index2 = 0; index2 < index; index2++) {
      if (numbers[index] < numbers[index2]) {
        let reserva = numbers[index];
  
        numbers[index] = numbers[index2];
        numbers[index2] = reserva;
      }
    }
  }
console.log(`O array ordenado de forma crescente é: ${numbers}`)

//exerccicio bonus 2
//Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let index = 1; index < numbers.length; index++) {
    for (let index2 = 0; index2 < index; index2++) {
      if (numbers[index] > numbers[index2]) {
        let reserva = numbers[index2];
  
        numbers[index2] = numbers[index];
        numbers[index] = reserva;
      }
    }
  }
console.log(`O array ordenado de forma decrescente é: ${numbers}`)

//exercicio bonus 3
//Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo: 
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let multiplicado = []

for (let index = 0; index < numbers.length -1; index++) {
          multiplicado.push((numbers[index]*numbers[index +1]))
  }
multiplicado.push((numbers[(numbers.length-1)]*2))

console.log(numbers.length)
console.log(`O array multiplicado é: ${multiplicado}`) 

