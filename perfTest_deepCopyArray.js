function deepCopy(p, c) {
  c = c || [];
  for (const [index, value] of p.entries()) {
    if (Array.isArray(value)) {
      c[index] = [];
      deepCopy(value, c[index]);
    } else c.push(value);
  }
  return c;
}

const ar1 = [[2, 4, 6, 10000, 3957484, 573837463832], [3888888888, 5474747474774474], [444444444444443, 144444444440, 24444444444444400]];

function stringy(p) {
  let c = JSON.parse(JSON.stringify(p));
  return c;
}

function copyTimer() {
  let count = 0;
  let t1 = new Date();
  function copy(ar) {
    count++;
    // deepCopy(ar)
    stringy(ar);
    if (count < 12500) copy(ar1);
  }
  copy(ar1);
  if (count === 12500) {
    return new Date() - t1;
  }
}

console.log(copyTimer());

// deepCopy runs 3X faster than JSON.parse(JSON.stringify(originalArray))
