const fs = require('fs');
const path = require('path');

const countStudents = (filePath) => {
  try {
    const normalizedPath = path.normalize(filePath);
    const data = fs.readFileSync(normalizedPath, 'utf-8');

    const lines = data.trim().split('\n');
    const numberOfStudents = lines.length - 1;

    console.log(`Number of students: ${numberOfStudents}`);

    const fields = {};

    lines.slice(1).forEach((line) => {
      const [firstName, , , fieldName] = line.split(',');
      if (!fields[fieldName]) {
        fields[fieldName] = [];
      }
      fields[fieldName].push(firstName);
    });

    for (const [fieldName, students] of Object.entries(fields)) {
      console.log(`Number of students in ${fieldName}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
