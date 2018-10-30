/*
const str = 'The quick red fox';

let iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while(!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // expected output: "T"
  //                  "h"
  //                  "e"
}  

console.log([...str]); 
*/

var myIterable = {
  *[Symbol.iterator]() {
      yield '1';
      yield '2';
      yield 'mxyzinjin5102';
  }
}

function crack(){
  for (let value of myIterable) { 
    console.log(value);
  }
}

crack();

// works well but has same problem for MrMxyjin - not returning them all at once
