let live = new Map();
live.set('key1', {count: 1});
live.set('key2', {count: 2});
live.set('key3', {count: 3});
live.set('key4', {count: 4});
live.set('key5', {count: 5});
live.set('key6', {count: 6});

live.forEach((item, index) => {
  if(item.count === 4) {
    live.delete(index);
  }
});
/* either of these is fine

for (cell of live) {
  if(cell[1].count === 4) {
    live.delete(cell[0]);
  }
}
*/
console.log(live);

