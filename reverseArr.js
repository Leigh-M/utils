let ar = [400, 375, 250, 100, 0];

const revers = a => a.map(a.pop, [...a]);

console.log(revers(ar));
