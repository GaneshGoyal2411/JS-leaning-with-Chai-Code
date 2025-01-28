const map = new Map ()
map.set("IND", "India")
map.set("USA","United State of America")
map.set("FR", "France")
map.set("IND", "India")

// console.log(map);

// for(const country of map){
//     console.log(country);
// }

for(const [country, value] of map){
    // console.log(country,':-', value);
}

//------------------ Map-2-----------------------
const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.map( (num) => num +10);
// console.log(newNums);

// const newNums = myNums.map( (num)=>{
//     return num+10;
// })
//--------------------More----------------------
const newNums = myNums.map( (num) => num * 10)
                      .map( (num) => num +5) 
                      .filter( (num) => num >= 40) 
console.log(newNums);