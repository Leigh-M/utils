// class
class ClassCar {
  drive () {
    console.log('Vroom1!');
  }
}
const car1 = new ClassCar();
car1.drive();


// constructor
function ConstructorCar () {}

ConstructorCar.prototype.drive = function () {
  console.log('Vroom2!');
};

const car2 = new ConstructorCar();
car2.drive();


// factory
const proto = {
  drive () {
    console.log('Vroom3!');
  }
};

function factoryCar () {
  return Object.create(proto);
}

const car3 = factoryCar();
car3.drive();
