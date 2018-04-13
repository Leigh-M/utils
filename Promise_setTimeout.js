// promise with a timeout

const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Optional_Condition) { reject(new Error()); }
    resolve(chck()); // function defined elsewhere
  }, 4000);
});

Promise.resolve(promiseA).then(function(){  })

