const proto = {
  shootAnArrow() {
    console.log("Sling!");
  }
};
const archerFactory = (name) => Object.assign(Object.create(proto), {
  name
});

let archer = archerFactory('Legolas');
archer.shootAnArrow();
console.log(archer.name);
