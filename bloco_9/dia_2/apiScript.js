// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const criaDom = ({joke}) => {
  const container = document.getElementById('jokeContainer');
    container.innerText = joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {console.log(data)
      criaDom(data)
    });
    
};

const promise = new Promise((resolve, reject) => {
const numeros = [];
const numerosQuadrado =[];
for (let index = 0; index < 10; index += 1) {
  numeros[index]= (Math.random()*50);
}
console.log(numeros);
numeros.forEach((numero, index) => numerosQuadrado[index] = numero**2);  
let soma = numerosQuadrado.reduce((a, b) => a + b, 0);
console.log(soma);
(soma > 8000) ? resolve(soma) : reject(soma);
})
.then((soma) => {
  console.log('Promise resolvida');
  const saida = [soma/2, soma/3, soma/5, soma/10];
  console.log(saida);
  return saida;
})
.then ((array) => console.log(array.reduce((a, b) => a + b, 0)))
.catch(() => {
  console.log('Promise rejeitada');
  console.log('É mais de oito mil! Essa promise deve estar quebrada!');
})
window.onload = () => fetchJoke();