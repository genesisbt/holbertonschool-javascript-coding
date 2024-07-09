#!/usr/bin/env node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

function getContent(url, filePath) {
  request(url, { encoding: null }, (error, response, body) => {
    if (error) {
      console.error('Error fetching webpage:', error);
      return;
    }

    let text = '';
    try {
      text = body.toString('utf8');
    } catch (e) {
      console.error('Failed to convert body to UTF-8', e);
      return;
    }

    fs.writeFile(filePath, text, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log(`Webpage content successfully saved to ${filePath}`);
    });
  });
}

getContent(url, filePath);