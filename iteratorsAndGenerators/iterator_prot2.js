function * generator() {
  yield 1;
  yield 2;
  yield 3;
}

const login = generator();

function crack() {
  return login.next().value;
}

console.log(crack());
