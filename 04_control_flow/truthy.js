const userImail = [];

if (userImail){
    console.log("Got user email");
}
else{
    // console.log("Don't have email");
}

// false = 0,-0,BigInt,0n,"",null,undefined,NaN

// True = "0",'false', " ", [], function(){}

if (userImail.length === 0){
    
}

// -----------------------------------------------
const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    // console.log("Object is empty");
}

// ------------------------------------------------
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = undefined ?? 10 ?? 15;
// console.log(val1);

// ------------------ Terniary Operator ------------------------------
const price = 600;
// price < 500 ? console.log("budget") : console.log("not affordable");

// Pra 1
// const num1 = 30, num2 = 20;

// num1 > num2 ? console.log(`${num1} is greater than ${num2}`):console.log(`${num2} is greater than ${num1}`);

// Pra 2 - Even OR odd
// const num = 11;
// num %2 == 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);

// Pra 3 + OR -
// const num = -5;
// num == 0 ? console.log("number is 0") : num < 0 ? console.log("num is negative") : console.log("number is positive");

// Pra 4 Smaller number
const num1 = 26, num2 = 15, num3 = 100;
// num1 < num2 && num3 ? console.log(`${num1} is the smallest Num`) : num2 < num3 ? console.log(`${num2} is the smallest num`) : console.log(`${num3} is the smallest number`);


