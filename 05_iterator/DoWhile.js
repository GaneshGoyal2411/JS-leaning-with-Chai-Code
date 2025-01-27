let score = 11;
do{
    // console.log(`Value of score: ${score}`);
    score++;
} while(score <=12){
    // console.log(score);
}

//------------ for OF / for each-------------------
let arr = [1,2,3,4,5];
for (const element of arr) {
    console.log(element);
}
//--------------- String ------------------------------
// let greeetings = "Hello World";
// for (const greet of greeetings) {
//     console.log(greet);   
// }

//------------------------------------------------------ Self ------------------------
const heroes = ["Salman", "Ranveer", "Sunny"];
let hero = 0
do{
    console.log(heroes[hero]);
    hero++;
} while(hero==heroes[0]){
    console.log(hero+"dont like at all");
    
}