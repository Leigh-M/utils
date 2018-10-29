const board = {};

board.checkPieces = [
  ['bishop', 2, 3], 
  ['knight', 3 , 4],
  ['queen', 4, 5]
]

// let knightOnlyCheck = board.checkPieces.filter(pc => pc[0] === 'queen' || pc[0] === 'bishop');

let knightOnlyCheck = board.checkPieces.filter(pc => pc[0] === 'queen' || pc[0] === 'bishop' || pc[0] === 'rook');

//const result = words.filter(word => word.length > 6);

/* if (knightOnlyCheck === false) {
  return playerTakesThreat();
} */ 

console.log(knightOnlyCheck);
