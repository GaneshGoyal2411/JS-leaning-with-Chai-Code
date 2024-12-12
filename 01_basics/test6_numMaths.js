const score = 400;
// console.log(score);

const num = new Number(1000); // If want to make Number
// console.log(num);

// console.log(num.toString().length);
// console.log(num.toFixed(2));

const oneMore = 123.440;
// console.log(oneMore.toPrecision(3));

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++ Maths +++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); // Absulute value (Converts in + only)
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.round(9.6));

// console.log(Math.min(9,8,6,7));

// ********* IMP ************
console.log(Math.random());
console.log((Math.random()*10+1));

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max-min+1))+min);