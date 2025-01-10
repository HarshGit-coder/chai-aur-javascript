const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toFixed(2));
// console.log(balance.toString().length);

const otherNumber = 123.8996
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++Maths++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.min(4,8,6,2,3));
// console.log(Math.max(4,8,6,2,9));


console.log((Math.random()*6) + 1);
//this method is used for creatin ames like dice & etc.. It returns the value between 0 to 1 so if we multiply it by 10 and do +1 it will never be zero...
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() *(max-min +1) + min))