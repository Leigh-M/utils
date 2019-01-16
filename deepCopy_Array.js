function deepCopy(p, c) {
  c = c || [];
  for (const [index, value] of p.entries()) {
    if (Array.isArray(value)) {
      c[index] = [];
      deepc(value, c[index]);
    } else c.push(value);
  }
  return c;
}

const ar1 = [[2, 4, 6], [3, 5], [3, 10, 200]];

console.log(deepCopy(ar1));

