const score = 400
const balance = new Number(100)
console.log(balance);
console.log(score);
console.log(balance.toString().length);
console.log(balance.toFixed(3));

const newNumber = 23.598327
console.log(newNumber.toPrecision(3));

const hundreds = 1000000
//to us standards
console.log(hundreds.toLocaleString());

//to indian standards
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.67));
console.log(Math.ceil(4.67));
console.log(Math.floor(4.67));
console.log(Math.min(4,56,2,6));
console.log(Math.max(4,56,2,6));
console.log(Math.random()); //always gives values between 0 and 1
console.log((Math.random()*10)+1) //this value will givw values between 1 and 100
const min = 10
const max =20
console.log(Math.random() * (max-min +1));
console.log(Math.floor() * (max-min +1));


