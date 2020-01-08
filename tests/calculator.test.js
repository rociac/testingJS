const calculator = require('../functions/calculator');

test('adds two numbers', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('substracts two numbers', () => {
  expect(calculator.substract(2, 2)).toBe(0);
});

test('divides two numbers', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});