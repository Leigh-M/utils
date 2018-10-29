player0Pieces = [0, 1, 2];
player1Pieces = [3, 4, 5];

function kingSquareLocator(Plyr) {
  // sourceArray = 'player'Plyr'pieces']

  for (let i = 0; i < [[`player${Plyr}pieces`]].length; i++) {
    console.log([`player${Plyr}pieces`][i]);
  }
}

kingSquareLocator(0);