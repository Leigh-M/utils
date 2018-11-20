// composing functionality using concatenation inheritance

const barker = (state) => ({
  bark : () => {
    console.log('Wooof. I am ' + state.name);
  }
})

// barker({name: 'Fido'}).bark();

const driver = (state) => ({
  drive : () => {
    state.position = state.position + state.speed;
    console.log('New position at speed ' + state.speed + ' is ' + state.position);
  }
})

const killer = (state) => ({
  kill : () => {
    console.log('I am dangerous with this ' + state.weapon);
  }
})

const murderRobotDog = (name, speed, weapon) => {
  let state = {
    name,
    speed,
    position: 50,
    weapon,
  }
  return Object.assign(
    {},
    barker(state),
    driver(state),
    killer(state),
  )
}

// call spearately
murderRobotDog('Fido').bark();
murderRobotDog('Dido', 100).drive();
murderRobotDog('Wido', 100, 'banana').kill();

// or on same object
const dogg = murderRobotDog('BigDogg', 100, 'pinaple');

dogg.bark();
dogg.drive();
dogg.kill();
