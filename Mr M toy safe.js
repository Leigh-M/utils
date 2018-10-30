/*
How did Mr. Mxyzinjin know so many algorithms and data structures used for his katas? He stores lots of them in a safe where only he knows the password of.

But you couldn't crack his real safe yet. At least you've got his toy safe to pretend you're doing the right job.

His safe consists of 8 combination locks of random characters. Because he speaks in alien languages (apparently), these characters are always in the CJK Unified Ideographs block (aka U+4E00 - U+9FFF), and the locks have a length of 1024 to 2048.

The safe is now in front of you. Each of them has a login function which will only return true if your probe to the safe gives a good response. Your task is to crack and return the password for all the locks before the safe gets tired of you and smacks you in your face (which happens 12 seconds after you start meddling with it).

Test.describe('Internal test', function() {
  Test.it('Maybe you should break a simple password first before attempting the challenge...', function() {
    const passwd = [...Array(1536)].map((_,i)=>String.fromCharCode(i+0x4e00)).join('');
    const login = makeLogin(passwd);
    Test.assertEquals(crack(login), passwd);
  });
})

*/

const start = 0x4e00;
const end = 0x9fff;
const max = end - start + 1;
const p = [...Array(max)].map((_,i)=>String.fromCharCode(i+0x4e00)).join('');

function crack(login) {
  let length = null;
  for (let i = 1024; i <= 2048; i++) {
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
      let m = Math.floor((l + r) / 2);
      if (login(`.{${i}}[${p[l]}-${p[m]}].*`)) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    pass += p[l];
  }
  return pass;
}


function crack(login) {
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
    return pwd;
}




function do_binary_length(start, stop, validating){
  var split = (stop-start)/2|0
  if(validating(`.{${start},${start+split}}`)){
    if(split==1){return start+split}
    return do_binary_length(start, start+split, validating)
  }
  if(split==1){return stop}
  return do_binary_length(start+split, stop,validating)
}
function do_binary(charset, validating, offset=0){
  var split = charset.length/2|0
  var head = charset.slice(0,split)
  if(validating(`.{${offset}}[${head}].*`)){
    if(head.length==1){return head}
    return do_binary(head, validating, offset)
  }
  var tail = charset.slice(split)
  if(tail.length==1){return tail}
  return do_binary(tail, validating, offset)
}
function crack(login) {
  var length = do_binary_length(1024, 2048, login)
  var original_charset = [...Array(20992)].map((_,i)=>String.fromCharCode(i+0x4e00)).join('');
  var found = '';
  for(var i=0;i<length;i++){
    found+=do_binary(original_charset, login, i)
  }
  return found
}




function crack(login) {
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
  return password.join('');
}



var crack=Q=>{for(var U='',L,R,T;;U+=H(T)){
for(L=19968,R=40959;L<(T=L+R>>1);)Q(`[^]{${U.length}}[${H(L)}-${H(T)}].*`)?R=T:L=T-L?++T:T
if(!(T=Q(U+H(L)+'.*')?L:Q(U+H(R)+'.*')?R:0))return U}},H=String.fromCharCode




function crack(login) {
  var [l,r]=[1024, 2048];
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
  return rs;
}
