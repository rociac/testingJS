const reverseString = (str) => {
  const temp = str.split('');
  const reversed = temp.reverse().join('');
  return reversed;
};

module.exports = reverseString;
