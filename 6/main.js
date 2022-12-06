import fs from 'fs/promises'
const data = await fs.readFile('./data.txt')
const letters = data.toString().split('')

function getAnswer(markerLength){
    let answer;
    for(let i=0; i<letters.length; i++){
        const chunk = letters.slice(i, i+markerLength);
        const unique = [...new Set(chunk)];
        if(chunk.length == unique.length){
            answer = i+markerLength;
            break;
        }
    }
    return answer;
}

console.log(getAnswer(4), getAnswer(14));