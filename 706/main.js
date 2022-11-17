const fs = require('fs')

const [r, x, y] = fs.readFileSync('input.txt', 'binary').trim().split(/\s+/).map(Number)

let k = (r - y) / r;

let size = Math.abs(x / (1 + k));

fs.writeFileSync('output.txt', (size.toFixed(2)).toString())