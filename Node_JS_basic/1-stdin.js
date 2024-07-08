const readline = require('readline');

const nline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

nline.question('', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

nline.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
