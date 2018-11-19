const arr = ['one', null, 'three', null, null, 'six'];
const arr2 = ['two', 'four', 'five'];

arr.forEach((element, index) => {
  if (element === null) {
    arr[index] = arr2.shift();
  }
});

console.log(arr); // ['one', 'two', 'three', 'four', 'five', 'six']
