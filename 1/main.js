const fs = require('fs');

const [a,b] = fs.readFileSync('input.txt', 'binary').trim().split(' ').map(s => Number.parseInt(s));

fs.writeFileSync('output.txt', String(a + b))