import fs from 'fs/promises'
const data = await fs.readFile('./data.txt')
const pairs = data.toString().split('\n').map(p => p.split(',').map(r => r.split('-').map(o => parseInt(o))) );

let partOneCount = 0, partTwoCount = 0;

pairs.forEach( ([range1,range2]) => {
    const diff1 = Math.abs(range1[0] - range1[1]);
    const diff2 = Math.abs(range2[0] - range2[1]);
    
    let larger, smaller;

    if(diff1 >= diff2){
        larger = range1;
        smaller = range2;
    } else {
        smaller = range1;
        larger = range2;
    }

    //Part 1
    if(smaller[0] >= larger[0] && smaller[1] <= larger[1]){
        partOneCount += 1;
    }

    //Part 2
    if(
        (smaller[0] >= larger[0] && smaller[0] <= larger[1]) || 
        (smaller[0] <= larger[0] && smaller[1] >= larger[0]) 
    ){
        partTwoCount += 1;
    }

});

console.log(partOneCount, partTwoCount);