const fs = require('fs')

const [count, ...data] = fs.readFileSync('input.txt', 'binary').trim().split(/\s+/).map(Number);

data.unshift(0,0);
data.push(0, 0);

const arrayVectors = [];

function Vector(x, y) {
    this.x = x;
    this.y = y;
    this.size = () => {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
}

for(let i = 0; i < data.length - 2; i = i + 2) {
    arrayVectors.push(new Vector(data[i + 2] - data[i], data[i + 3] - data[i + 1]));
}

const length = arrayVectors.reduce((acc, vector) => {
    return acc + vector.size()
}, 0)

fs.writeFileSync('output.txt', length.toFixed(3).toString());