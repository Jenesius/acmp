const fs = require('fs');
const [x1, y1, r1, x2,y2,r2] = fs.readFileSync('input.txt', 'binary').trim().split(/\s+/).map(Number);

function result(v) {
    return v ? 'YES' : 'NO'
}
// Length between to circle center point
const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));


const answer = (length + Math.min(r1, r2) >= Math.max(r1, r2)) && (r1 + r2 >= length);

fs.writeFileSync('output.txt', result(answer))