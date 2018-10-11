class Creature {
  constructor(name) {
   this.name = name;  
  }
  shout() {
    console.log(`I'm ${this.name}! Oorah!!`);
  }
};

class Dwarf extends Creature {
  constructor(name) {
    super(name);
    this.tall = false;
  }
  hitWithMaze () {
    console.log("Smash!");
  }
}

class Wizard extends Creature {  
  castASpell() {
    console.log("You shall not pass!");
  }
}

const Weaponry = {
  hitWithSword() {
    console.log("Swoosh!");
  }
};

Object.assign(Creature.prototype, Weaponry);   // this technically (I read..) is the mix-in, not the mixed in class. Like a decorator, is is the process providing the decoration for the decorated class, so it's a process (function or class) not an object

let dwarf = new Dwarf('Thorin');
let wizard = new Wizard('Gandalf');

dwarf.hitWithSword(); // "Swoosh!"

// wizard.hitWithSword();  errors unless you alter the Creature prototype like this:
// Object.assign(Creature.prototype, Weaponry);

// a mixin does augment the class for future sub classes, if you want them not to 'bake in' changes use a decorator
