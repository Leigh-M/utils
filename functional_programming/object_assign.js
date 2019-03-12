// doesn't mutate input object

const lawn = {
  title: 'lawn',
  color: '#009900',
  rating: 4,
};

const newLawn = (item, rating) => Object.assign({}, item, { rating });

console.log(newLawn(lawn, 5).rating); // 5
console.log(lawn.rating); // 4  -  orig not affected

// can be re-written as:

const newerLawn = (item, rating) => ({
  ...item,
  rating,
});

console.log(newerLawn(lawn, 10).rating); // 10
console.log(lawn.rating); // 4  -  orig still not affected
