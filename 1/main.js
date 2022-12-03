import fs from 'fs/promises'
const d = await fs.readFile('./data.txt');
const r = d.toString().split('\n\n').map( e => e.split('\n').join('+') ).map( e => eval(e) ).sort((a,b) => b-a);
console.log([r[0], r[0] + r[1] + r[2]]);