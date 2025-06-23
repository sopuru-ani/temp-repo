// const amount = 12

// if(amount <= 12) {
//     console.log("hehe small number..not enough mental power");
// } else {
//     console.log("Oh hoo hoooo!!! za warudoooooo!!");
// }

// console.log(`Tis my first node app so yk, Hello World`);

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

// const sayHi = function (name) {
//     console.log(`hello there ${name}`);
// }


// import { john, peter } from "./1-names.js";
// import { sayHi } from "./2-utils.js";
// sayHi('Sop');
// sayHi(john);
// sayHi(peter);

const {john, peter} = require('./1-names');
const sayHi = require('./2-utils');
const {items, singlePerson} = require('./3-altflavor');
require('./4-mindGrenade');

sayHi('Sop');
sayHi(john);
sayHi(peter);
console.log("\n", items, "\n", singlePerson.name);