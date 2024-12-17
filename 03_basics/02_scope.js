let a =100;
// const b =20;
// var c =3;

if(true){
    let a =10;
    const b =20;
    // 
    // c =50;
    // console.log(`Inner :${a}`);
}

// console.log(a)
// console.log(b)
// console.log(c)

//----------- Twice Functions ----------------
function one(){
    const user ="ganesh";
    // console.log(user);

    function two(){
        const website = "YouTube"

        //  console.log(`${user} ${website}`);
    }
    
    two();
}
one();


// ----------------- Different Syntex ---------------
// 01
function addOne(num){
    return num + 1;
}

// console.log(addOne(9));
// 02
const addTwo = function(num){
    return num + 2;
}

// console.log(addTwo(8))
