const capitalize = (str) => {
  const first = str.split('')[0].toUpperCase();
  return first + str.slice(1);
}
module.exports = capitalize;
