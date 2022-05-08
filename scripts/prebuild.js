const fs = require('fs');

function main() {
  fs.copyFile('package.json', 'build/package.json', (err) => {
    if (err) {
      console.log('Error: ', err);
    }
  });
}

main();