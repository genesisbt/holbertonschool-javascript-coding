const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rl.question('', (inp) => {
  console.log(`Your name is: ${inp}`);
  console.log('This important software is now closing');
  rl.close();
});