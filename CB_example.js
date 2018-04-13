
function sumNReturn(arry, CB) {
  CB(arry.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
}

sumNReturn([3, 4, 6], (res) => {
  console.log(res);
});

// 13
