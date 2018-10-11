// own pieces array
const Arr = [[4, 7], [7, 4], [6, 5], [7, 6], [4, 6], [3, 6], [7, 7], [6, 7], [3, 7]];

const kingsMoves = [[3, 7], [3, 6], [4, 6], [5, 6], [5, 7]];

const possMoves = kingsMoves.slice();

const RET = async function ret() {
  function TO(b) {
    for (let i = 0; i < 10000; i++) {
      console.log(b);
    }
  }
  await TO('Boom');
  for (let i = 0; i < possMoves.length; i++) {
    const kingMove = possMoves[i].toString();
    for (let j = 0; j < Arr.length; j++) {
      const pice = Arr[j].toString();
      if (kingMove === pice) {
        // console.log(kingMove);
        // console.log(pice);
        possMoves.splice(i, 1);
        --i;
        break;
      }
    }
  }
  return possMoves;
};

RET().then(a => console.log(a));

/*
const possMovesAvail = (kingMoves.filter((elem) => {
  const possMove = JSON.stringify(elem);
  for (let i = 0; i < Arr.length; i++) {
    const pieceAtSquare = JSON.stringify(Arr[i]);
    if (possMove === pieceAtSquare) {
      return false;
    }
  }
  return true;
}));
*/
