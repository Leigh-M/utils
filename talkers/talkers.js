const fs = require('fs');
const readline = require('readline');

const instream = fs.createReadStream('talkers.txt');
const rl = readline.createInterface(instream);

const data = [];
rl.on('line', (line) => {
  const trimmed = line.replace(/\/+\s/g, '').split(',');
  trimmed[2] = Number.parseInt(trimmed[2], 10);
  trimmed[3] = Number.parseInt(trimmed[3], 10);
  data.push(trimmed);
});

rl.on('close', () => {
  const maxValues = [];
  data.sort((a, b) => b[3] - a[3]);
  for (let i = 0; i < 3; i++) {
    (maxValues.push(data[i]));
  }
});

/* console.log(maxValues) outputs:
[ [ 'switch01', 'te0/4', 474784375, 37483742347 ],
  [ 'switch02', 'te0/2', 4747843232, 37483742347 ],
  [ 'switch01', 'te0/1', 2378748485, 8474857587 ] ]
*/

/* instructions
// Parse the following text file and produce a list of top talkers:
// -- status.txt --
// #host,port,input bps,output bps
// switch01,te0/1,2378748485,8474857587
// switch01,te0/2,43787438,334878745
// switch01,te0/3,347374387,3847875847
// switch01,te0/4,474784375,37483742347
// switch02,te0/1,2323478897,972323
// switch02,te0/2,4747843232,37483742347
// switch03,te0/1,7128512,3633742347
// switch03,te0/2,474784371,3748374923
// etc...
// -- status.txt --
*/
