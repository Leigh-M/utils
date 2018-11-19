function singleClosure() {
  var arr = [];
  var z = 10;
    for (var i = 0; i < 3; i++) {
      arr[i] = (function(x) {
        z++;
        return x;
      })(z)
    }
  return arr;
}

var a = singleClosure();

console.log(a);