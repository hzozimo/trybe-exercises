const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Testando promise - getUserName', () => {
  describe('Quando o usuário existe', () => {
    test('Retorne o nome', () => {
      expect.assertions(1);
      return expect(getUserName (4)).resolves.toEqual('Mark')
    });
  });

  describe('Quando o usuário não existe', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getUserName(1)).rejects.toEqual({ error: 'User with 1 not found.' })
    });
  });
});

describe('Testando promise - getUserName com async/await', () => {
  describe('Quando o usuário existe', () => {
    test('Retorne o nome', async () => {
      expect.assertions(1);
      const username = await getUserName(4);
      expect(username).toEqual('Mark')
    });
  });

  describe('Quando o usuário não existe',  () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      try {
        const username = await getUserName(1);
      } catch (error){
        expect(error).toEqual({ error: 'User with 1 not found.' })
      }
    });
  });
});