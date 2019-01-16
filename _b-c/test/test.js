/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, func-names */

const { expect } = require('chai');
const fib = require('../fibRecursion');
const fibPop = require('../fibPopulateArray');

describe('fib() should be return value at position n in the sequence', function () {
  const tests = [
    {
      args: 0, expected: 0,
    },
    {
      args: 1, expected: 1,
    },
    {
      args: 2, expected: 1,
    },
    {
      args: 3, expected: 2,
    },
    {
      args: 4, expected: 3,
    },
    {
      args: 5, expected: 5,
    },
    {
      args: 6, expected: 8,
    },
    {
      args: 7, expected: 13,
    },
    {
      args: 8, expected: 21,
    },
    {
      args: 9, expected: 34,
    },
    {
      args: 10, expected: 55,
    },
    {
      args: 11, expected: 89,
    },
    {
      args: 12, expected: 144,
    },
  ];
  tests.forEach(function (test) {
    it(`Fib at value n: ${test.args} is ${test.expected}`, function () {
      const res = fib(test.args);
      expect(res).to.eql(test.expected);
    });
  });
});

describe('fibPop() should be return value at position n in the sequence', function () {
  const tests = [
    {
      args: 0, expected: 0,
    },
    {
      args: 1, expected: 1,
    },
    {
      args: 2, expected: 1,
    },
    {
      args: 3, expected: 2,
    },
    {
      args: 4, expected: 3,
    },
    {
      args: 5, expected: 5,
    },
    {
      args: 6, expected: 8,
    },
    {
      args: 7, expected: 13,
    },
    {
      args: 8, expected: 21,
    },
    {
      args: 9, expected: 34,
    },
    {
      args: 10, expected: 55,
    },
    {
      args: 11, expected: 89,
    },
    {
      args: 12, expected: 144,
    },
  ];
  tests.forEach(function (test) {
    it(`Fib2 at value n: ${test.args} is ${test.expected}`, function () {
      const res = fibPop(test.args);
      expect(res).to.eql(test.expected);
    });
  });
});
