/* bitwise operators

from http://javascript-html5-tutorial.com/mastering-bitwise-operators-in-javascript-like-a-boss.html

Bitwise shifts
The shift operators shift their first operand left (<<) or right (>>) by the number of positions specified by the second operand.

The effect of the shift operations can be summarized briefly:

a >> N is a / 2 ^ N
a << N is a * 2 ^ N

Divide and multiply by 2: faster (bitwise) version
console.log(64 >> 4)  // 4;   or:
64 / 16 = 4

let b = 64 >> 4  //  b => 64;  or:
64 * 16 = 1024


Of course there are assignment operators for bitwise operations in JavaScript:

n &= 4; // n = n & 4
n |= 4; // n = n | 4
n ^= 4; // n = n ^ 4
n <<= 4; // n = n << 4
n >>= 4; // n = n >> 4
n >>>= 4; // n = n >>> 4


From SO:

Bonus: cheat sheet for  | 0 : an easy and fast way to convert anything to integer, like
Math.floor : but different for -ve numbers:

( 3|0 ) === 3;             // it does not change integers
( 3.3|0 ) === 3;           // it casts off the fractional part in fractionalal numbers
( 3.8|0 ) === 3;           // it does not round, but exactly casts off the fractional part
( -3.3|0 ) === -3;         // including negative fractional numbers
( -3.8|0 ) === -3;         // which have Math.floor(-3.3) == Math.floor(-3.8) == -4
( "3"|0 ) === 3;           // strings with numbers are typecast to integers
( "3.8"|0 ) === 3;         // during this the fractional part is cast off too
( "-3.8"|0 ) === -3;       // including negative fractional numbers
( NaN|0 ) === 0;           // NaN is typecast to 0
( Infinity|0 ) === 0;      // the typecast to 0 occurs with the Infinity
( -Infinity|0 ) === 0;     // and with -Infinity
( null|0 ) === 0;          // and with null,
( (void 0)|0 ) === 0;      // and with undefined
( []|0 ) === 0;            // and with an empty array
( [3]|0 ) === 3;           // but an array with one number is typecast to number
( [-3.8]|0 ) === -3;       // including the cast off of the fractional part
( [" -3.8 "]|0 ) === -3;   // including the typecast of strings to numbers
( [-3.8, 22]|0 ) === 0     // but an Array with several numbers is typecast to 0
( {}|0 ) === 0;                // an empty object is typecast to 0
( {'2':'3'}|0 ) === 0;         // or a not empty object
( (function(){})|0 ) === 0;    // an empty function is typecast to 0 too
( (function(){ return 3;})|0 ) === 0;

and some magic:  3 | '0px' === 3;

*/

