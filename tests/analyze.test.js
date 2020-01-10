const analyze = require('../functions/analyze');

describe('returns an object', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);

  test('returns the average of the numbers in the array', () => {
    expect(object.average).toBe(4);
  });

  test('return the minimum number of the array', () => {
    expect(object.min).toBe(1);
  });

  test('return the maximum number of the array', () => {
    expect(object.max).toBe(8);
  });

  test('return the length of the array', () => {
    expect(object.length).toBe(6);
  });

});