'use strict'
const fs = require('fs');

let killPoint;
const readline = require('readline');
function getSize(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}
function readoneline() {
    const b = Buffer.alloc(1);
    let s = '';
    while (true) {
        const len = fs.readSync(0, b);
        if (len == 0) {
            return s;
        }
        if (b[0] == 13) {
            continue;
        }
        if (b[0] == 10) {
            return s;
        }
        s += b;
    }
}

async function processLineByLine() {
    const fileStream = fs.createReadStream('input.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
        terminal: false,
    });

    let index = 0;
    
    for await (const line of rl) {
        
        if (index === 0) {
            index++;
            continue
        }
    
        let [x1, y1] = line.split(' ').map(Number)
    
        const size = getSize(x1 - x, y1 - y);
    
        if (size <= l) {
            killPoint = index; rl.close(); break
        }
        index++;
    }
}
const options = readoneline();
let size = options.length
const [n, x, y, l] = options.trim().split(/\s+/).map(Number);


processLineByLine()
.then(data => {
    fs.writeFileSync('output.txt', killPoint ? killPoint.toString() : 'Yes')
    
})

// fs.writeFileSync('output.txt', killPoint ? killPoint.toString() : 'Yes')
