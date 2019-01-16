/* eslint-disable func-names */
const XMLHttpRequest = require('xhr2');

function request(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (function (myxhr) {
    return function () {
      if (myxhr.readyState === 4 && myxhr.status === 200) {
        callback(myxhr);
      }
    };
  }(xhr));
  xhr.open('GET', url, true);
  xhr.send('');
}

function cb(o) {
  console.log(o);
}

request('https://search.moonpig.com/api/products?size=12&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job', cb);
