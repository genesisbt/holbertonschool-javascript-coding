#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

function getContent(url, filepath) {
  request(url, { encoding: 'utf8' }, (error, response, body) => {
    if (error) {
      console.error('Error fetching webpage:', error);
    } else {
      fs.writeFileSync(filepath, body, 'utf-8');
      console.log(`Webpage content successfully saved to ${filepath}`);
      
      // Check if the body contains the expected output
      if (body.includes('C is fun!')) {
        console.log('C is fun!');
      } else {
        console.error('Expected output not found in fetched content.');
        process.exit(1);
      }
    }
  });
}

getContent(url, filePath);