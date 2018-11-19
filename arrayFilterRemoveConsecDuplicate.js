var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4, 5, 5, 5];

b = a.filter((item, pos, arr) => item !== arr[pos-1]);

console.log(b);

/* or.. to keep same array:
a = a.filter((item, pos, arr) => item !== arr[pos-1]);
console.log(a);
*/
