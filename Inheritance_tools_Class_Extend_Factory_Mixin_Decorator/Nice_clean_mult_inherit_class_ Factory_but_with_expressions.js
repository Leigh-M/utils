class Creature {
  constructor(name) {
   this.name = name;  
  }
  shout() {
    console.log(`I'm ${this.name}! Huzzah!!`);
  }
};

let Magic = (superClass) => class extends superClass {  
  shout() {
    if (super.shout) super.shout();
    console.log('Power and wisdom.');
  }  
};
let Fighting = (superclass) => class extends superclass {  
  shout() {
    if (super.shout) super.shout();
    console.log('Strength and courage.');
  }  
};
class DwarfWizard extends Fighting(Magic(Creature)) {  
  curseObjects(object = {}) {
    object.curse = 'some DwrvishWizardlike profound.. no profane explosion of linguistic treat';
    return object.curse;
  }
}
let dwarfWizard = new DwarfWizard('Thordalf');

dwarfWizard.shout(); // "I'm Thordalf! Huzzah!! Power and wisdom. Strength and courage."
console.log(dwarfWizard.curseObjects()); // 'some DwrvishWizardlike profound.. no profane explosion of linguistic treat';


/*
Using this approch, the same behaviour delegation is achieved and:
  - prototypes are not directly mutated
  - super keyword still works inside methods of the subclass and the mixins
  - composition is preserved even when two mixins define the same method
*/
