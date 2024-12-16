function myName() {
console.log("G");
console.log("A");
console.log("N");
console.log("E");
console.log("S");
console.log("H");
}

// myName();
//------------------------------------------------------------------------

// Addition function ********************************

// function addition (num1,num2){
//    console.log((num1 + num2));
// };

// addition(3,7);

// Another way -------------------------------------------------------------
function additon2 (num1, num2){
    // let result = num1 + num2
    // return result;
    return num1 + num2; // OR
}

const finalR = additon2(2,5);
// console.log(finalR);

// Another way ---------------------------------------------------------------

function userLogin (userName){
    if(userName === undefined){
        console.log(`Please inter username`);
        return;
    }
    return `${userName} just logged in`;
}

// console.log(userLogin("Ganesh"));
   userLogin("Ganesh");