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

let dwarf = new Dwarf('Thorin');
let wizard = new Wizard('Gandalf');

console.log(dwarf.tall);
dwarf.shout();
wizard.shout();
wizard.castASpell();
