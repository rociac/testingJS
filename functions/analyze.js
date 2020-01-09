const analyze = arr => ({
  average: arr.reduce((acc, num) => acc + num / arr.length, 0),
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length
})

module.exports = analyze;
