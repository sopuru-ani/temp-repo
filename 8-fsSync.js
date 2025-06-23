const {readFileSync, writeFileSync, read} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

writeFileSync('./content/result-sync.txt', `Hello my fans. here is the result : ${first}, ${second} \n`, {flag: 'a'});

// const third = readFileSync('./content/result-sync.txt', 'utf8');
// console.log(third);

console.log('done with this task');
console.log('starting the next task...');