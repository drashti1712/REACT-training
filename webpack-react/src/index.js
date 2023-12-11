import add, { subtract } from './lib'; // babel-loader

console.log("Hello Web World!!!");

Promise.resolve(42).then(it => console.log(it));

console.log(add(3, 4));

console.log(subtract(40, 3));

