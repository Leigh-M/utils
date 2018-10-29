
async function additionSum(value) {
  const remainder = afterTwoSeconds(20)
  return value + await remainder
}

function afterTwoSeconds(value) {
  return new Promise(resolve => {
    setTimeout(() => { resolve(value * 2) }, 2000);
  });
}

additionSum(10)
  .then(result => console.log('after 2 seconds', result))
