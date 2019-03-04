/* eslint-env browser*/
<!DOCTYPE html>

const getFakeMembers = count => new Promise((resolves, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`;
  const request = new XMLHttpRequest();
  request.open('GET', api);
  request.onload = function req() {
    if (request.status === 200) {
      resolves(JSON.parse(request.response));
    } else {
      rejects(Error(request.statusText));
    }
    request.onerror = err => rejects(err);
    request.send();
  };
});

getFakeMembers(5).then(
  members => console.log(members),
  err => console.error(new Error('Cannot load members from randomuser.me')),
);

