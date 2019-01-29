function build(rows, cols) {
  let arr = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      arr.push([i, j]);
      }
    }
  return arr;
}

// build grid of 25 points
const grid = build(5, 5);

// spacial hash
function hashCode(coord) {
  var x = coord[0];
  var y = coord[1];
  return x.toString() + ',' + y.toString();
};

const hash = new Map();

grid.forEach(currentItem => {
  hash.set(hashCode(currentItem), {live: true, count: 0});
});

console.log(hash);
