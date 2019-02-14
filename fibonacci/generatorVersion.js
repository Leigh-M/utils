function* fibonacci(n) {
  let [i, current, next, tempTot] = [n, 0, 1];
  while (i--) {
    yield current;
    // could do long hand:
    // tempTot = current;
    // current = next;
    // next += tempTot;
    // or more simply:
    [current, next] = [next, current + next];
  }
}

const [...res] = fibonacci(8);
console.log(res);
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// as above with destructuring
/*
function* fibonacci(n) {
  let current = 0;
  let next = 1;
  while (n--) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const [...res] = fibonacci(10);
console.log(res);
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


function retNum(n) {
  const t1 = new Date();
  let i = n;
  function* fibonacci() {
    let current = 0;
    let next = 1;
    while (i--) {
      yield current;
      [current, next] = [next, current + next];
    }
  }
  const [...res] = fibonacci(n);
  const val = res[n - 1];
  const elapsed = new Date() - t1;
  return {
    val,
    elapsed,
  };
}

console.log(retNum(1470));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

*/


/* was going to do actual single result not the whole gen array here
// recursive-fibonacci-generator.js
// set initial values in the params
function* fibonacci(n, current = 0, next = 1) {
  if (n === 0) {
    return current;
  }

  const N = n - 1; // could pass this straight into func param as @AgentCoop below

  yield current;
  yield* fibonacci(N, next, current + next);
  return null;
}
const [...res] = fibonacci(10);
console.log(res);


/*
@AgentCoop commented on 6 Jul 2018
The recursive variant could be a bit simpler:

function *fibonacci(n, current = 0, next = 1) {
  if (n === 0) {
    return current;
  }
  yield current;
  yield *fibonacci(n-1, next, current + next);
}

let a = [...fibonacci(20)]
// > Array [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
 @mohanramphp
mohanramphp commented on 19 Jul 2018
@AgentCoop - simply superb
*/
