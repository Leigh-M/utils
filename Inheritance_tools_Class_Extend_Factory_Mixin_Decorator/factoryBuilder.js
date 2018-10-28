function threatsOrDefendableSquaresFactory() {
  const protoSquaresInRangeFactory = {
    buildAll(piecesArray) {
      this.buildThreatsKing(piecesArray);
    },
    buildThreatsKing(piecesArray) {
      console.log('King squares threatened here! ' + piecesArray);
    },
  };
  return Object.create(protoSquaresInRangeFactory);
}

const threatsBuilder = threatsOrDefendableSquaresFactory();

threatsBuilder.buildThreatsKing('Boom');
threatsBuilder.buildAll('Double Boom');
