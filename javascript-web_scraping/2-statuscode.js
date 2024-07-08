#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 2-statuscode.js <URL>');
  process.exit(1);
}

const url = process.argv[2];

request.get(url, (error, answer) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`code: ${answer.statusCode}`);
});