var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}

var output = myTag`That ${ person } is a ${ age }`;

console.log(output);
// That Mike is a youngster

/*
const input = [['2,4', '4,6'], ['4,7', '5,7'], ['6,9', '10,10']];

function myTag(strings, arrs) {
  let tot = ''
  arrs.forEach(item => {
    let ar = '';
    item.forEach(currentItem => {
      ar += `[${currentItem}]`; 
      return ar;
    });
    return tot+= `${ar} `;
  });
  return `${tot}`;
}

var output = myTag`That ${ input }`;
console.log(output);
// [2,4][4,6] [4,7][5,7] [6,9][10,10] 

*/


/*
const myTag = (literals, name) => {
  console.log('Literals', literals); //Output -> Literals [ 'Hello ', '!' ]
  console.log('Interpolation', name); //Output -> Interpolation Steve

  return 'Result from myTag';
};

const name = [['Steve', 'Henry'], ['Me, You'], ['AndMe', 'AndYou']];
const result = myTag `Hello ${name}!`;

console.log(result); //Output -> Result from myTag
*/
