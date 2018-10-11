// module 'on-change' code below only a few lines - by Sindre Sorhus
const onChange = require('on-change');

const object = {
  foo: false,
  a: {
    b: [{ c: false }],
  },
  someKey: 10,
};

const watchedObject = onChange(object, () => {
  console.log('Object has been changed to ' + watchedObject.someKey);
});

watchedObject.someKey = 15;
// Object has been changed 15   - may need to edit module to return actual change

// watchedObject.foo = true;
// => 'Object changed: 1'

// watchedObject.a.b[0].c = true;
// => 'Object changed: 2'


/*
module.exports = (object, onChange) => {
  const handler = {
    get(target, property, receiver) {
      try {
        return new Proxy(target[property], handler);
      } catch (err) {
        return Reflect.get(target, property, receiver);
      }
    },
    defineProperty(target, property, descriptor) {
      onChange();
      return Reflect.defineProperty(target, property, descriptor);
    },
    deleteProperty(target, property) {
      onChange();
      return Reflect.deleteProperty(target, property);
    },
  };

  return new Proxy(object, handler);
};
*/
