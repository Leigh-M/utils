function createRandomSeed(rows, cols) {
  let total = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (Math.round(Math.random())) {
        total.push([i, j]);
      }
    }
  }
  return total;
}

module.exports = createRandomSeed;
