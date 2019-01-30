function createGrid(rows, cols) {
  const grd = [];
  for (let i = 0; i < rows; i++) {
    grd[i] = [];
    for (let j = 0; j < cols; j++) {
      grd[i][j] = 0;
    }
  }
  return grd;
}

// create all zero's grid
const grid = createGrid(10, 10);

// set acord seed as 1's
function setSeed(seed, targerArr) {
  const grd = targerArr;
  for (let i = 0; i < seed.length; i++) {
    targerArr[seed[i][1]][seed[i][0]] = 1;
  }
  return grd;
}

const seed = [[2,4], [3,5]];

const newGrid = setSeed(seed, grid);
console.log(newGrid);
