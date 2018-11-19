/*
How did Mr. Mxyzinjin know so many algorithms and data structures used for his katas? He stores lots of them in a safe where only he knows the password of.

But you couldn't crack his real safe yet. At least you've got his toy safe to pretend you're doing the right job.

His safe consists of 8 combination locks of random characters. Because he speaks in alien languages (apparently), these characters are always in the CJK Unified Ideographs block (aka U+4E00 - U+9FFF), and the locks have a length of 1024 to 2048.

The safe is now in front of you. Each of them has a login function which will only return true if your probe to the safe gives a good response. Your task is to crack and return the password for all the locks before the safe gets tired of you and smacks you in your face (which happens 12 seconds after you start meddling with it).

Test.describe('Internal test', function() {
  Test.it('Maybe you should break a simple password first before attempting the challenge...', function() {
    const passwd = [...Array(1536)].map((_,i)=>String.fromCharCode(i+0x4e00)).join('');
    const login = makeLogin(passwd);
    Test.assertEloginuals(crack(login), passwd);
  });
})
*/

/* the function 'obtained' when you console.log(myLogin) on Codewars!
function myLogin(pw) {
  return new global.RegExp(`^${pw}$`).test('丁丂七丄');
}
*/

// let's speed test on a password 3000 characters long
function myLogin(pw) {
  return new global.RegExp(`^${pw}$`).test('丄丁丂七丄七丄丄丄丁丂七丄七丄丄七丄丂七丄七丄丁丂七丄七丄丄七丄丂七丄七丄丁丂七丄七丄丁丂七丄七丄丄丄丁丂七丄七丄丄丄丁丂七丄七丄丄丄丁丂七丄七丄丄七丄丂七丄七丄丁丂七丄七丄丄七丄丂七丄七丄丁丂七丄七丄丁丂七丄七丄丄丄丁丂七丄丄');
}
// this is 250 ms!  Rapid as well as written very clearly - best solution for speed and legibility
const start = 0x4e00;
const end = 0x4e05;
const max = end - start + 1;
const p = [...Array(max)].map((_,i)=>String.fromCharCode(i+0x4e00)).join('');

function crack(login) {
  let timer1 = new Date();
  let length = null;
  for (let i = 0; i <= 3000; i++) {
    if (login(`.{${i}}`)) {
      length = i;
      break;
    }
  }
  let pass = '';
  for (let i = 0; i < length; i++) {
    let l = 0;
    let r = max - 1;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (login(`.{${i}}[${p[l]}-${p[m]}].*`)) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    pass += p[l];
  }
  let timer2 = new Date();
  console.log(timer2 - timer1);
  return pass;
}

console.log(crack(myLogin));


/*
-> Answer 2 is 697 ms

function crack(login) {
  let timer1 = new Date();
  function binarySearch(a, b, lt) {
    b += 1
    while (a < b) {
      let n = (a + b) >> 1;
      if (lt(n)) {
        b = n;
      }
      else {
        a = n + 1;
      }
    }
    return a - 1;
  }
  const n = binarySearch(1024, 2048, k => !login(`.{${k}}.*`));
  const password = [];
  const ch2 = String.fromCharCode(0x9FFF);
  for (let i = 0; i < n; i++) {
    const p = `.{${i}}`;
    const code = binarySearch(0x4E00, 0x9FFF, k => !login(`${p}[${String.fromCharCode(k)}-${ch2}].*`));
    password.push(String.fromCharCode(code));
  }
  let timer2 = new Date();
  console.log(timer2 - timer1);
  return password.join('');
}

console.log(crack(myLogin));


-> answer 3 is is 806ms

function crack(login) {
  let timer1 = new Date();
  let pwd_length = 0;
  let pwd = '';
  let min, max, mid;
  min = 1024;
  max = 2048;
  while (max > min + 1) {
      mid = ~~((max + min) / 2);
      login(`.{${min},${mid}}`) ? max = mid : min = mid;
  }
  pwd_length = login(`.{${min}}`) ? min : max;

  for (let n = 0; n < pwd_length; n++) {
      min = 0x4e00;
      max = 0x9fff;
      while (max > min + 1) {
          mid = ~~((max + min) / 2);
          login(`.{${n}}[\\u${min.toString(16)}-\\u${mid.toString(16)}].*`) ? max = mid : min = mid;
      }
      pwd += String.fromCharCode(login(`.{${n}}\\u${min.toString(16)}.*`) ? min : max);
  }
  let timer2 = new Date();
  console.log(timer2 - timer1);
  return pwd;
}

console.log(crack(myLogin));


-> Answer 4 is 1427 ms:

function crack(login) {
  let timer1 = new Date();
  var [l,r]=[0, 3000];
  while(r-l>1) {
    let m=(l+r)/2|0, b=login(`.{${m}}.*`);
    b?l=m:r=m;
  }
  var sl=login(`.{${l}}`)?l:r;
  var rs='';
  for(let i=0; i<sl; i++) {
    let [l,r]=[0x4e00, 0x9fff];
    while(r-l>1) {
      let m=(l+r)/2|0, b=login(`.{${i}}[\\u${l.toString(16)}-\\u${m.toString(16)}].{${sl-i-1}}`);
      b?r=m:l=m;
    }
    rs+=String.fromCharCode(login(`.{${i}}\\u${l.toString(16)}.{${sl-i-1}}`)?l:r);
  }
  let timer2 = new Date();
  console.log(timer2 - timer1);
  return rs;
}

console.log(crack(myLogin));


-> answer 5 is 1680 ms - unclear code, obfuscated when optimised for speed
var crack=login=>{
  let timer1 = new Date();
  for(var U='',L,R,T;;U+=H(T)){
  for(L=19968,R=40959;L<(T=L+R>>1);)login(`[^]{${U.length}}[${H(L)}-${H(T)}].*`)?R=T:L=T-L?++T:T
  if(!(T=login(U+H(L)+'.*')?L:login(U+H(R)+'.*')?R:0)){
    let timer2 = new Date();
      console.log(timer2 - timer1);
    return U}}},H=String.fromCharCode

console.log(crack(myLogin));


-> answer 5 code cleaned up for readability: 1946 ms. Running 15% slower than obfuscated version

const crack = (login) => {
  let timer1 = new Date();
  for (let U = '', L, R, T;  ; U += String.fromCharCode(T)) {
    for (L = 19968, R = 40959; L < (T = (L + R) / 2); ) {
      login(`[^]{${U.length}}[${String.fromCharCode(L)}-${String.fromCharCode(T)}].*`) ? R = T : L = T - L ? ++T : T;
    }
    if (!(T = login(`${U + String.fromCharCode(L)}.*`) ? L : login(`${U + String.fromCharCode(R)}.*`) ? R : 0)) {
      let timer2 = new Date();
      console.log(timer2 - timer1);
      return U;
    }
  }
};

console.log(crack(myLogin));


-> answer 6 is 2694 ms. Slightly longer solution running slightly slower than similar solutions

function doBinaryLength(start, stop, validating) {
  const split = ((stop - start) / 2) | 0;
  if (validating(`.{${start},${start + split}}`)) {
    if (split === 1) { return start + split; }
    return doBinaryLength(start, start + split, validating);
  }
  if (split === 1) { return stop; }
  return doBinaryLength(start + split, stop, validating);
}
function doBinary(charset, validating, offset = 0) {
  const split = charset.length / 2 | 0;
  const head = charset.slice(0, split);
  if (validating(`.{${offset}}[${head}].*`)) {
    if (head.length === 1) { return head; }
    return doBinary(head, validating, offset);
  }
  const tail = charset.slice(split);
  if (tail.length === 1) { return tail; }
  return doBinary(tail, validating, offset);
}
function crack(login) {
  let timer1 = new Date();
  const length = doBinaryLength(0, 2818, login);
  const originalCharset = [...Array(20992)].map((_, i) => String.fromCharCode(i + 0x4e00)).join('');
  let found = '';
  for (let i = 0; i < length; i++) {
    found += doBinary(originalCharset, login, i);
  }
  let timer2 = new Date();
  console.log(timer2 - timer1);
  return found;
}

console.log(crack(myLogin));

*/
