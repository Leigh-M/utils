const fs = require('fs');
fs.appendFile('vars.txt', 'attackV: ' + JSON.stringify(attackV), () => {
  console.log('File saved!');
});

