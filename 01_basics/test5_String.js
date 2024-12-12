const fullName = "Ganesh";
const repoCount = 50;

// console.log("Name:"+fullName+"Repo:"+repoCount);
// console.log(`Name ${fullName} Repo:${repoCount}`);

const gameName = new String('Ganes_h');
// console.log(gameName.toUpperCase);
// console.log(gameName[5]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('N'));

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(2,7);
console.log(anotherString);

const newStringOne = "    Ganesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

//Replace
const url = "https://ganesh.goyal.com/ganesh%20goyal"
console.log(url.replace('ganesh','badal'));

//Include
const url2 = "ganeshgoyal2411@.com";
console.log(url2.includes('2412'));

//Comparison
const a ='C';
const b ='C';
if (a<b){
    console.log(`B is greater then ${a}`)
}
else if(a>b){
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${a} and ${b} both are equal`);
}