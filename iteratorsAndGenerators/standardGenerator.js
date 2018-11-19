const iterabl = [2, 5, 8, 12, 16, 20];

function* cycled(iter) {
  const values = [...iter];
  while (true) {
    for (const val of values) {
      yield val;
    }
  }
}

const genObj = cycled(iterabl);

console.log(genObj.next().value);
console.log(genObj.next().value);
console.log(genObj.next().value);

// 2
// 5
// 8
