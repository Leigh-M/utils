var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
// your browser must support for..of loop
// and let-scoped variables in for loops
// const and var could also be used
for (let letter of arr) {
  console.log(letter);
}

// or as currently has Symbol.iterator as key, just
var arr = ['w', 'y', 'k', 'o', 'p'];
for (let letter of arr) {
  console.log(letter);
}