const ageValidator = {
  set(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('Age is not a number'); 
      }
      if (value > 100) {
        throw new RangeError('You must be younger than 100');
      }
    }
    // if no errors
    obj[prop] = value;
  }
}

let p = new Proxy({}, ageValidator);
p.age = 100;
console.log(p.age); // 100
// p.age = 'two'; // exception
// p.age = 200; // exception

// some other handler methods on MDN and in OOJS book, eg handler.set||.get||.apply// to intercept functions||.construct
