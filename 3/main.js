import fs from 'fs/promises'
const data = await fs.readFile('./data.txt')
const rucksacks = data.toString().split('\n');
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//Part 1
let total = 0;
rucksacks.forEach(sack => {
    const c1 = sack.split('').slice(0, sack.length/2);
    const c2 = sack.split('').slice(sack.length/2);

    let duplicateItems = c1.filter( item => (c2.includes(item)) );
    duplicateItems = [...new Set(duplicateItems)];

    duplicateItems.forEach(d => {
        let priority = alphabet.includes(d) ? 1 : 27;
        priority += alphabet.indexOf(d.toLowerCase());
        total += priority;
    });
});

//Part 2
let total2 = 0;
for(let i=0; i<rucksacks.length; i+=3){
    const sack1 = rucksacks[i].split('');
    const sack2 = rucksacks[i+1].split('');
    const sack3 = rucksacks[i+2].split('');

    let duplicateItems = sack1.filter( item => (sack2.includes(item) && sack3.includes(item)) );
    duplicateItems = [...new Set(duplicateItems)];

    duplicateItems.forEach(d => {
        let priority = alphabet.includes(d) ? 1 : 27;
        priority += alphabet.indexOf(d.toLowerCase());
        total2 += priority;
    });
}


console.log(total, total2);