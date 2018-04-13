const MYAPP = {
  module: {
    func1() { console.log('func1_hello'); },
    Obj1: (function () {
      return {
        hi() {
          return console.log('Hello');
        },
      };
    }()),
  },
};

MYAPP.module.func1();
MYAPP.module.Obj1.hi();

// logs
// funct1_hello
// Hello
