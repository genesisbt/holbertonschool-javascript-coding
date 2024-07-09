#!/usr/bin/node

const axios = require('axios');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

async function getContent(url, filepath) {
  try {
    const { data } = await axios.get(url, { responseType: 'text' });
    
    fs.writeFileSync(filePath, data, 'utf-8');
    console.log(`Webpage content successfully saved to ${filePath}`);
    
    if (data.trim() === 'C is fun!') {
      console.log('C is fun!');
    } else {
      console.error('Expected output not found or incorrect in fetched content.');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error fetching webpage:', error);
    process.exit(1);
  }
}

getContent(url, filePath);