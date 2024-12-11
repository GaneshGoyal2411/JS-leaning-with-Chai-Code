/*

*********Primitive********
7 Types - String, Number, Boolean, null, undefined, Symbol, BigInt

*/ 

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol.for('123');
const anotherId = Symbol.for('123'); //Without for not equal

console.log(id==anotherId);

/*

Reference (Non-Primitive)
Arrey, Objects, Functions

*/
const heroes = ["Shaktiman","Naagraj","Doga"]; //(1)
console.log(heroes);

let myObj = { //(2)
    name: "ganesh",
    age: 25,
}
console.log(myObj);

const myFunction = function(){
    console.log("Hello World!");
}

myFunction();

console.log(typeof myFunction);