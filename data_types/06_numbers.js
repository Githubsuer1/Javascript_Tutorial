// there are two ways to create number data type in javascript, literal and by Number method

const score = 400
console.log(typeof score);

const balance = new Number(12000)
// console.log(balance);

console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const numbers = 100000
// console.log(numbers.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));          // returns absolute value, output:-4
console.log(Math.round(2.8));       // returns round value , outpput:- 3
console.log(Math.ceil(4.1));        // always returns highest value, output:- 5
console.log(Math.floor(4.9));       // always returns lowest value , output:- 4

console.log(Math.max(1,2,3,4,5));   // always gives max value
console.log(Math.min(7,8,9,1,6));   // always gives min value

console.log(Math.random());         // gives a random value between 0 to 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

let max = 20;
let min = 10;

console.log(Math.floor(Math.random() * (max - min + 1) )+ min);
