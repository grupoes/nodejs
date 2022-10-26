const fs = require('fs');

const filename = process.argv[2];

const file = fs.readFileSync(filename, 'utf-8');

const lines = file.split('\n').length - 1;

console.log(lines);