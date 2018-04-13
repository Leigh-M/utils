import { readFile } from 'fs';

function readTxt(file) {
  return new Promise(((resolve, reject) => {
    readFile(
      file,
      (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      },
    );
  }));
}

readTxt('./source_data/text.txt').then((res) => {
  console.log(res.toString());
});
