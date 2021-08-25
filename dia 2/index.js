// function conta(a, b, c) {
//   return new Promise((resolve, reject) => {
//     if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
//     reject('Informe apenas números');

//     const resultado = (a + b ) *c;

//     if (resultado < 50 ) return reject('Valor muito baixo');

//     resolve(resultado);

//   });
// }

// conta(10, 10, 10)
// .then((resultado) => {console.log(resultado);})
// .catch((err) => {console.log(err);})

// conta(10, 10, 'a')
// .then((resultado) => {console.log(resultado);})
// .catch((err) => {console.log(err);})

// conta(1, 1, 1)
// .then((resultado) => {console.log(resultado);})
// .catch((err) => {console.log(err);})

// const gerarAleatorio = () => {
//   return Math.floor(Math.random()*100 +1);
// }

// const a = gerarAleatorio();
// const b = gerarAleatorio();
// const c = gerarAleatorio();

// conta(a, b, c)
// .then((resultado) => {console.log(resultado);})
// .catch((err) => {console.log(err);})

const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
  const createFilePromises = strings.map((string, index) =>
       fs.writeFile(`./file${index + 1}.txt`, string)
     );
  await Promise.all(createFilePromises);
  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

  const newFileContent = fileContents.join(' ');

     await fs.writeFile('./fileAll.txt', newFileContent);
}

arrayToFile();