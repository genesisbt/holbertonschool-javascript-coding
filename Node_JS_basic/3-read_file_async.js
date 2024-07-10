const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    let data = '';
    let numberOfStudents = 0;
    let currentLine = '';

    const stream = fs.createReadStream(filePath, { encoding: 'utf-8' });

    stream.on('data', chunk => {
      data += chunk;
      currentLine += chunk;
      if (currentLine.includes('\n')) {
        currentLine = currentLine.replace(/^\s+|\s+$/gm, ''); // Remove leading/trailing whitespace
        if (currentLine.trim() !== '') { // Check if the line is not empty
          numberOfStudents++;
          const fields = currentLine.split(',');
          // Process fields as needed
          // For demonstration, logging the last field value
          console.log(fields[fields.length - 1]);
        }
        currentLine = ''; // Reset currentLine after processing
      }
    });

    stream.on('end', () => {
      console.log(`Total number of students: ${numberOfStudents}`);
      resolve();
    });

    stream.on('error', err => {
      reject(new Error("Cannot load the database"));
    });
  });
}

module.exports = countStudents;