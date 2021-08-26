const fs = require('fs');


const testePositivo = (n) => {
  if (typeof n !== 'number') return 'o valor deve ser um número'
  if (n > 0) return 'positivo'
  if ( n < 0) return 'negativo'

  return 'neutro'

}

const escreveArquivo = (nome, conteudo) =>{
  fs.writeFileSync(`./${nome}`, conteudo);

  return 'ok'

}

module.exports = {testePositivo, escreveArquivo};
