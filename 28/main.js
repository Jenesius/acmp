const fs = require('fs');

let [x1, y1, x2, y2, x, y] = fs.readFileSync('input.txt', 'binary').trim().split(/\s+/).map(Number);

if (x1 === x2) x = x - (x - x1) * 2
else y = y - (y - y1) * 2

fs.writeFileSync('output.txt', `${x} ${y}`)
