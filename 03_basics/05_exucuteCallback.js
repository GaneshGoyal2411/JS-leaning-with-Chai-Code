let val1 = 10;
let val2 = 10;

function addnums(){
    let total = val1 + val2;
    return total;
}

// let result1 = addnums(val1,val2);
// console.log(result1);

let result2 = addnums(5,5);
// console.log(result2);

//---------- Call Stack ----------------
function one() {
    console.log("One");
    // two();
}
function two() {
    console.log("Two");
    // three();
}
function three() {
    console.log("Three");
}

one();
two();
three();