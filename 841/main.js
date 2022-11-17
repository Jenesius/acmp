const fs = require('fs');

const [count] = fs.readFileSync('input.txt', 'binary').trim().split(/\s+/).map(Number)

fs.writeFileSync('output.txt',  (count === 0 ? 1 : (count * (count - 1) + 2)).toString())