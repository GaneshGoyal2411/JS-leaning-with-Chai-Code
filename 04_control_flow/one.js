// IF 01 ---------------------------------------
// const temprature = 49;
// if(temprature<50){
//     console.log("temprature less than 50");
// }
// else{
//     console.log(`temprature more than 50`);
// }

// 02 -------------------------------------------
// const score = 200;
// if (score > 100){
//     let power="fly";
//     console.log(`User can ${power}`);
// }


// 03 --------------------------------------------
// const bal = 600;
// if (bal < 500){
//     console.log(`${bal} is less than 500`);
// }
// else if(bal < 750 ){
//     console.log(`${bal} is less than 750`);
// }
// else{
//     console.log(`Balance is ${bal}`)
// }


// 04 --------------------------------------------
const userLoggedIn = true;
const userCreditCard = true;
const userLoggedGoogle = false;
const userLoggedEmail = true;

if (userLoggedIn && userCreditCard){
    console.log("User can buy");
}

if (userLoggedEmail || userLoggedGoogle){
    console.log(`user looged in by Google/Email`);
}