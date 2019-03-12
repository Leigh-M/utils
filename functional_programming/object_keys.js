const schools = {
  York: 1,
  Leeds: 2,
  Manch: 3,
};

const objKeysToArray = Object.keys(schools).map(key =>
  ({
    name: key,
    wins: schools[key],
  }));

console.log(objKeysToArray); // of objects

const toArray = Object.keys(schools).map(key => key);
console.log(toArray); // just the keys

