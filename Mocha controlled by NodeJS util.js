/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, func-names */

const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha();

var testDir = '/home/leigh/node/codewars/3 kyu/Check and mate/test';

// Add each .js file to the mocha instance
fs.readdirSync(testDir).filter(function(file){
    // Only keep the .js files
    return file.substr(-3) === '.js';

}).forEach(function(file){
    mocha.addFile(
        path.join(testDir, file)
    );
});


// Run the tests.
mocha.run(function(failures){
  process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
});

/*  or this:
mocha.ui('bdd').run(function (failures) {
  process.on('exit', function () {
    process.exit(failures);
  });
});
*/

const assert = require('chai').assert;

const expect = require('chai').expect;
const isCheck = require('../check and mate.js');

// the test uses the same 'user' object and applies user.incProgress() consecutively

const tests = [
  { args: [[ { piece: 'king', owner: 1, x: 4, y: 0 },
  { piece: 'bishop', owner: 1, x: 1, y: 4, prevX: 3, prevY: 2 },
  { piece: 'queen', owner: 1, x: 0, y: 7 },
  { piece: 'pawn', owner: 0, x: 4, y: 6 },
  { piece: 'pawn', owner: 0, x: 5, y: 6 },
  { piece: 'bishop', owner: 0, x: 3, y: 7 },
  { piece: 'king', owner: 0, x: 4, y: 7 },
  { piece: 'queen', owner: 0, x: 5, y: 7 },
  { piece: 'pawn', owner: 0, x: 2, y: 6 } ], 0],
  expected: { piece: 'bishop', owner: 1, x: 1, y: 4, prevX: 3, prevY: 2 },
  },
];

describe('suite tests isCheck() and isMate()', function () {
  tests.forEach(function (test) {
    it(`Runs isCheck() against ${test.args[0]} and expects result to be ${test.expected}`, function () {
      const res = isCheck(test.args[0], test.args[1]);
      expect(res).to.eql(test.expected);
    });
  });
});
