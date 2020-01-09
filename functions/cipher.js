const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const cipher = (char, add) => {
  let letter = char;
  if (alphabet.includes(letter.toLowerCase())) {
    if (letter === letter.toUpperCase()) {
      letter = alphabet[add].toUpperCase();
    } else {
      letter = alphabet[add];
    }
  }

  return letter;
};

const caesar = (key, word) => {
  const arr = word.split('');
  for (let i = 0; i < arr.length; i += 1) {
    let add = alphabet.indexOf(arr[i].toLowerCase()) + key;
    if (add > 25) {
      add -= 26;
    }
    arr[i] = cipher(arr[i], add);
  }
  return arr.join('');
};

module.exports = caesar;
