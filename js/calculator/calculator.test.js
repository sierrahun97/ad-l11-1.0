const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('multiply 5 * 10 to equal 50', () => {
  expect(calculator.multiply(5, 10)).toBe(50);
});

test('multiply 5 * 0 to equal 0', () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});

test('divide 12 / 4 to equal 3', () => {
  expect(calculator.divide(12, 4)).toBe(3);
});

test('divide 12 / 5 to equal 2.4', () => {
  expect(calculator.divide(12, 5)).toBe(2.4);
});

test('No se puede dividir por 0', () => {
  expect(calculator.divide(10, 0)).toBe('No se puede dividir por 0');
});