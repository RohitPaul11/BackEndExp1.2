const fs = require('fs');
const readStream = fs.createReadStream("demo.txt", { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    // Process the chunk of data
    console.log(chunk);
  });
readStream.on('end', () => {
    console.log('Reading the file is complete.');
  });
readStream.on('error', (err) => {
    console.error('An error occurred:', err);
  });
  
  
