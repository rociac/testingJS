const capitalize = require('../functions/capitalize');

test('converts to uppercase the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});