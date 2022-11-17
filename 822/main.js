const fs = require('fs');

const [x1,y1, x2,y2, x3, y3] = fs.readFileSync('input.txt', 'binary').trim().split(' ').map(c => Number.parseInt(c));

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

const vectors = [new Vector(x1 - x3, y1 - y3), new Vector(x2 - x3, y2 - y3)];

function vectorMulti(vectorA, vectorB) {
    return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
}

fs.writeFileSync('output.txt', (Math.abs(vectorMulti(...vectors)) / 2 ).toFixed(1).toString())