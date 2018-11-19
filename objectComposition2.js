const canCast = (state) => ({
  cast: (spell) => {
    console.log(`${state.name} casts ${spell}!`);
    state.mana--;
  }
})

/* the wrapping parens returns object literal, same as:
const canCast = function(state) {
  return {
    cast: (spell) => {
      console.log(`${state.name} casts ${spell}!`);
      state.mana--;
    }
  }
} */ 

const canFight = (state) => ({
  fight: () => {
    console.log(`${state.name} slashes at the foe!`);
    state.stamina--;
  }
})

const fighter = (name) => {
  let state = {
    name,
    health: 100,
    stamina: 100
  }
  
  return Object.assign(state, canFight(state));
}

const mage = (name) => {
  let state = {
    name,
    health: 100,
    mana: 100
  }
  
  return Object.assign(state, canCast(state));
}

let scorcher = mage('Scorcher')
scorcher.cast('fireball');    // Scorcher casts fireball!
console.log(scorcher.mana)    // 99

let slasher = fighter('Slasher')
slasher.fight();              // Slasher slashes at the foe!
console.log(slasher.stamina)  // 99

const paladin = (name) => {
  let state = {
    name,
    health: 100,
    mana: 100,
    stamina: 100
  }
  
  return Object.assign(state, canCast(state), canFight(state));
}

let roland = paladin('Roland');   
roland.fight();               // Roland slashes at the foe!
roland.cast('Holy Light');    // Roland casts Holy Light!
