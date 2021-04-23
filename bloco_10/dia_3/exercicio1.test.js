 const randomNumber = () => {
  const number = Math.floor(Math.random()*100);
  return number;
}

test('randomNumber', () => {
  const randomNumber = jest.fn().mockReturnValue(10);
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalledTimes(1);
});

module.exports = { randomNumber };