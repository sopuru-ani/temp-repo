const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFileFilePromise = util.promisify(writeFile);

console.log("Hi?");
// promisify be like...
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }



const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFileFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME...i guess:\n ${first}\n ${second}\n`, {flag: 'a'})
        console.log(first, "\n" + second);
    } catch(error) {
        console.log(error);
    }
}
start();
console.log("I think it works?");

// getText('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err));