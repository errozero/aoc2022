import fs from 'fs/promises'
const data = await fs.readFile('./data.txt')
const [crateData,instructionData] = data.toString().split('\n\n');
const crateDataLines = crateData.split('\n');
const instructionDataLines = instructionData.split('\n');

//Get the crate data stacks
let crates = [];

function resetCrates(){
    crates = [];
    crateDataLines.forEach( line => {
        let crateNum = 0;
        let letter;
        for(let i=0; i<line.length; i+=4){
            crateNum += 1;
            if(line[i+1].match(/^[A-Z]+$/i) !== null){
                letter = line[i+1];
                crates[crateNum] ? crates[crateNum].push(letter) : crates[crateNum] = [letter];
            }
        }
    });
}

//Get the numbers from each instruction
const instructions = instructionDataLines.map(line => line.split(' ').filter(w => !isNaN(w)));


//PART 1---
resetCrates();
instructions.forEach(([count,from,to]) => {
    for(let i=0; i<count; i++){
        let item = crates[from].shift();
        crates[to].unshift(item);
    }
});
console.log('Part 1:', crates.map(c => c[0]).join(''))


//PART 2---
resetCrates();
instructions.forEach(([count,from,to]) => {
    let items = crates[from].splice(0,count);
    crates[to] = [...items, ...crates[to]];
});
console.log('Part 2:', crates.map(c => c[0]).join(''))