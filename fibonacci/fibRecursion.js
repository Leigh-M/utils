let res = [];

function fib(n) {
  if (res[n]) return res[n];
  switch (n) {
    case 0: return 0; // if not returning would need to include break after each case & default
    case 1: return 1;
    case 2: return 1;
    default: {
      res[n] = fib(n - 1) + fib(n - 2);
      return res[n];
    }
  }
}

// module.exports = fib;

function timed(n) {
  const t1 = new Date();
  res = fib(n);
  const elapsed = new Date() - t1;
  return {
    res, elapsed,
  };
}
console.log(timed(1470));
