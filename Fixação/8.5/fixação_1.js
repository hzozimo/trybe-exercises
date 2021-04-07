// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'banana', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'leite condensado', 'fanta-laranja'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));