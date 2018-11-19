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
  hitWith2x4 () {
    console.log("Thwackio!");
  }
}

let dwarf = new Dwarf('Thorin');

function badassery(obj) {
  let fn = obj.hitWith2x4;
  boshio = function() {console.log('Boshio!')};
  obj.hitWith2x4 = () => {
     obj.shout();
     boshio();
     fn();
  };
}
badassery(dwarf);
dwarf.hitWith2x4(); // "I'm Thorin! Oorah!! Thwackio!!"

let dwarfsPal = new Dwarf('Thrain');
dwarfsPal.hitWith2x4();  // Thwackio! - original Dwarf class not augmented

// so decorators are useful when you don't want to bake into the class any functionality that might
// alter other current classes or future sub classes. The decorator is the function providing the
// decoration not the decorated class or resulting object (is my understanding - like mixin is the
// process providing the mixed-in class or object not the class or object itself)
