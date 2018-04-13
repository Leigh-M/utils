const monkey = {
  feeds: 'Bananas',
  breathes: 'air',
  drinks: 'water',
};

function Human() { 'Water'; }
Human.prototype = monkey;
// Human.prototype.drinks = 'Bottled H2o';

const genericHuman = new Human();

function Developer() {}
Developer.prototype = genericHuman;

const Leigh = new Developer();
Leigh.hacks = 'JavaScript';

console.log(Leigh.feeds); // from monkey
console.log(Leigh.hacks); // from Leigh
console.log(Leigh.drinks); // from genericHuman **own properties come down the chain**
// __proto__ deprecated, preferred is (! for IE < 8) Object.getPrototypeOf(obj)
console.log(Leigh.__proto__ === genericHuman); // points back to the actual object
console.log(Developer.prototype === genericHuman); // true

// Constructor function has a prototype, object has __proto__ link
