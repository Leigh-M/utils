for (let i = 0, p = Promise.resolve(); i < 5; i++) {
  p = p.then(() => new Promise(resolve =>
      setTimeout(function () {
          console.log(i);
          resolve();
      }, Math.random() * 1000)
  ));
}

// prints 0,1,2,3,4 in order, without chaining the promise would be async, for brevity below:
/*
for (let i = 0, p = Promise.resolve(); i < 5; i++) {
  p = p.then(() => new Promise(
        resolve => {
          console.log(i);
          resolve();
      })
  )
}
*/