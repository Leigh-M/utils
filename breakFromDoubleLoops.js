const  a = [1, 2, 3, 4, 5, 6];
const b = [7, 8, 9, 10, 11, 12];
let breakLoopCheck2 = false;

let res = function() {
  for (i = 0; i < a.length; i++) {
    console.log(a[i]);
    for (let j = 0; j < b.length; j++) {
      console.log(b[j]);
      if (i === 2 && j === 3) {
        breakLoopCheck2 = true;
        break;
      }
    }
    if (breakLoopCheck2) {
      break;
    }
  }
}

res();
