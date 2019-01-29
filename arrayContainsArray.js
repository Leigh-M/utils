function arrayContainsArray(superset, subset) {
  // if need to be identical length
  if (subset.length !== superset.length) return false;
  const superStringified = [];
  superset.forEach(item => {
    superStringified.push(JSON.stringify(item));
  });

  return subset.every(function (value) {
    return superStringified.includes(JSON.stringify(value));
  });
}

const base = [[2, 4], [5, 8], [10, 100]];
const toCheck = [[2, 4], [10, 100], [5, 8]];

// return true
console.log(arrayContainsArray(base, toCheck));
