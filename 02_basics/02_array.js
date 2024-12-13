const marvel_heros = new Array("Ironman","Spiderman","Thor");
const dc_heros = new Array("Batman","Plash","Superman");

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][2]);

// Concate 2 Arrays
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// Spread for making all Eliments indual
const mixHeros = [...marvel_heros, ...dc_heros];
console.log(mixHeros);

// Spread for making all Eliments indual 2
const another_array = new Array([1,2,3,[4,5],6,7,[8,9,]]);
const real_one = another_array.flat(Infinity);
console.log(real_one);

// Consfirm that Array or Not?
console.log(Array.isArray("Ganesh"));
console.log(Array.from("Ganesh"));

// Interesting
console.log(Array.from({name:"Ganesh"}));

// Merge eliments in single Array
const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));

const final = (Array.of(score1,score2,score3))
console.log(final);