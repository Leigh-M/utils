const movesAvail = [[6, 7], [6, 6], [7, 6]];
const ownPiecesArr = [
  { piece: 'pawn', x: 6, y: 8 },
  { piece: 'pawn', x: 6, y: 0 },
  { piece: 'knight', x: 6, y: 7 },
  { piece: 'king', x: 7, y: 6 },
  { piece: 'knight', x: 6, y: 0 },
];
// splicing array with nested for loop => count backwards on first pass
for (let i = movesAvail.length - 1; i >= 0; i--) {
  if (movesAvail.length === 0) { break; } // important to break here
  for (let j = 0; j < ownPiecesArr.length; j++) {
    if (movesAvail[i][0] === ownPiecesArr[j].x && movesAvail[i][1] === ownPiecesArr[j].y) {
      movesAvail.splice(i, 1);
      if (i > 0) { i = movesAvail.length - 1; }
      if (movesAvail.length === 0) {
        break;
      }
      j = -1; // otherwise increments immediately to 1?
    }
  }
}

console.log(movesAvail); // will show just 6,6 currently include will remove

/* Or method 2), using a temp cloned array: availMoves
const availMoves = Array.from(arr);
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < ownPiecesArr.length; j++) {
    if (arr[i][0] === ownPiecesArr[j].x && arr[i][1] === ownPiecesArr[j].y) {
      for (let k = 0; k < availMoves.length; k++) {
        if (availMoves[k][0] === ownPiecesArr[j].x && availMoves[k][1] === ownPiecesArr[j].y) {
          availMoves.splice(k, 1);
          break;
        }
      }
    }
  }
}
*/
