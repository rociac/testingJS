const reverseString = require('../functions/reverse_string');

test('a reversed string', () => {
  expect(reverseString('hello')).toBe('olleh');
});