const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe ('procura repositórios', () => {
  test('procura sd-01-week4-5-project-todo-list', async () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    const trybeRepos = await getRepos(url);
    expect(trybeRepos).toContain('sd-01-week4-5-project-todo-list');
  })
})

describe ('procura repositórios', () => {
  test('procura sd-01-week4-5-project-meme-generator', async () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    const trybeRepos = await getRepos(url);
    expect(trybeRepos).toContain('sd-01-week4-5-project-meme-generator');
  })
})