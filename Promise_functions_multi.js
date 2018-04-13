const holdingArry = [];

function readExcl(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error());
    } else resolve(file);
  })
    .then((data) => {
      holdingArry.push(data);
    });
}

function exclReader(arry) {
  return Promise.resolve(function prom(resolve, reject, error) {
    for (let i = 0; i < arry.length; i++) {
      readExcl(arry[i]);
    }
    if (error) {
      reject(new Error());
    }
  }());
}

exclReader(['exc1.xlsx', 'exc2.xlsx', 'exc3.xlsx']).then(() => {
  console.log(holdingArry);
});

// Needs work on this, not running fully Promisified
