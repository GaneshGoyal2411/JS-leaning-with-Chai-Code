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

function userlogin(userName = "sam"){
    // if(userName === undefined){

        if(!userName){    
        console.log(`please enter the username`);
        return;
    }
    return `${userName} just logged in`;
}

// console.log(userlogin("ganesh"))
// console.log(userlogin("ganesh"))
// userlogin("");

// -----------------------------------------------------------
// Rest Operator & Spread (...) 
function calculateCartPrice(val1,...num1){
    // console.log(num1); OR
    return num1;
}

// calculateCartPrice(2) OR
// console.log(calculateCartPrice(2,2,3,5));


// ---------------------------Object + Function---------------------------------
const user = {
    userName:"ganesh",
    price:199
}

function handleObject(anyObject){
    console.log(`User name is :${anyObject.userName} and Price is ${anyObject.price}`)
}

// handleObject(user);
handleObject({
    userName:"Gan",
    price:299
});

// ------------ Same with Array -------------
const newArray = [100,200,300]

function findSecArray(getArray){
    return getArray[0]
}

console.log(findSecArray(newArray));
// console.log(findSecArray([200,300,400,600]))

const myArray = [500,1000,1500]

function desireInd(anyInd){
    console.log(anyInd[2]);
}
desireInd([200,400,600]);