import fs from 'fs/promises'
const data = await fs.readFile('./data.txt')
const rounds = data.toString().split('\n').map( r => r.split(' '));

const shapeScores = [3,2,1];
const resultScores = { WIN: 6, DRAW: 3, LOSE: 0 };
const shapeIds = {A: 2, B: 1, C: 0, X: 2, Y: 1, Z: 0};
const outcomeIds = {X: 'LOSE', Y: 'DRAW', Z: 'WIN'};

let total1 = 0;
let total2 = 0;

//Part 1
rounds.forEach( ([col1, col2]) => {
    const oppChoice = shapeIds[col1];
    const myChoice = shapeIds[col2];
    let score = shapeScores[myChoice];
    const diff = (myChoice - oppChoice);

    if(diff === 0){
        score += resultScores.DRAW;
    } else if(diff === 2 || diff == -1){
        score += resultScores.WIN;
    }

    total1 += score;
});

//Part 2
rounds.forEach( ([col1, col2]) => {
    const oppChoice = shapeIds[col1];
    const requiredOutcome = outcomeIds[col2];
    let score = resultScores[requiredOutcome];
    let myChoice = oppChoice;

    if(requiredOutcome == 'WIN'){
        myChoice = oppChoice == 0 ? 2 : oppChoice-1;
    } else if (requiredOutcome == 'LOSE'){
        myChoice = oppChoice == 2 ? 0 : oppChoice + 1;
    }

    score += shapeScores[myChoice]
    total2 += score;
});

console.log(total1, total2);