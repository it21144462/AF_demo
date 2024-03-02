const fs = require('fs');
fs.writeFile('file.txt', 'Hello beautiful World!', function (err) {
 if (err) throw err;
 console.log('File saved!');
});

//git write to the branch