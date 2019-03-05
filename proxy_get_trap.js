const handler = {
  get(target, name) {
    return name in target ? target[name] : 42;
  },
}

const ob = {
  2 : 'd',
  e : 'e',
}

const p = new Proxy(ob, handler);
p.a = 100;
p.b = undefined;

// traps the get of property, if true returns target[name]
console.log(p.a, p.b, p[2]); // 100 undefined 'd'
console.log('c' in p, p.c); // false 42
console.log(ob);
// console.log(handler.get(ob, 2));
// console.log(handler.get(ob, 'e')); // weird one, letter as key stored as string
// console.log(handler.get(ob, 3));
