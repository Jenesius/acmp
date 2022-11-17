const fs = require('fs')

const [s1, r1] = fs.readFileSync('input.txt', 'binary').trim().split(' ').map(Number)

const s2 = Math.PI * Math.pow(r1, 2) - s1;
const r2 = Math.sqrt(s2 / Math.PI);

fs.writeFileSync('output.txt', r2.toFixed(3).toString())