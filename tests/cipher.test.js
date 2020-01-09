const caesar = require('../functions/cipher');

test('Should cipher the word with key 1', () => {
  expect(caesar(1, "abcdefghijklmnopqrstuvwxyz")).toBe("bcdefghijklmnopqrstuvwxyza");
})

test('Should cipher the word with key 5 and keep uppercase letters', () => {
  expect(caesar(5, "Attack at Dawn")).toBe("Fyyfhp fy Ifbs");
})

test('Should cipher the word with key 2 and keep punctuation', () => {
  expect(caesar(2, "Attack, at Dawn.")).toBe("Cvvcem, cv Fcyp.");
})
