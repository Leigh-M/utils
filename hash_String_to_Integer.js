function hashToInteger(string, arr) {
  const H = 31;
  let total = 0;
  for (let i = 0; i < string.length; ++i) {
    total += (H * total) + string.charCodeAt(i);
    total %= arr.length;
  }
  return parseInt(total, 10);
}

// opted for linear probing over separate chaining for collisions -> next key avail in array
function setKey(str, arry) {
  let key = hashToInteger(str, arry);
  if (arry[key] === undefined) {
    arry[key] = key;
  } else {
    while (arry[key] !== undefined) {
      key++;
    }
    arry[key] = key;
  }
  return key;
}

const myArr = new Array(1000);

// usage:
console.log(setKey('ff', myArr)); // 366
console.log(setKey('ff', myArr)); // 367

