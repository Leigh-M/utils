function* foo(){
  yield 1;
  yield 2;
}

function crack() {
  for (let o of foo()) {
    console.log(o);
  }
}

crack();
