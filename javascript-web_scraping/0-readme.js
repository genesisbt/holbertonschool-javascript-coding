#!/usr/bin/node

const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => console.log(err ? err : data));