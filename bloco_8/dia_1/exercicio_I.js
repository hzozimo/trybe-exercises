const retornaObjeto = (nome) => ({
    nomeCompleto: `${nome}`,
    email:`${nome.replace(/ /g, '_')}@trybe.com`
});

const newEmployees = () => {
    const employees = {
      id1: retornaObjeto('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: retornaObjeto('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: retornaObjeto('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };

const empregados = newEmployees();

console.table(empregados);