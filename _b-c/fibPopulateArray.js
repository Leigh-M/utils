function fibPop(n) {
  const res = [];
  if (res[n]) return res[n];
  res[0] = 0;
  res[1] = 1;
  res[2] = 1;

  for (let i = 3; i < n + 1; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n];
}

module.exports = fibPop;


function timed(n) {
  const t1 = new Date();
  const ret = fibPop(n);
  const elapsed = new Date() - t1;
  return { ret, elapsed };
}

// console.log(timed(1470));
