const user = {
    username :"Ganesh",
    loginCount :8,
    singnedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from the database...")
        console.log(`UserName:${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username, user.singnedIn);
// console.log(user.getUserDetails());
// user.getUserDetails();

// ---------------------------------------------
// const promiseOne = new Promise()
// const date = new Date()

//---------------------------------------------
function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // this.greeting = function(){
    //     console.log(`Welcome User:${this.userName}`);
    // }

    return this; // also working bydefaut*****
}

const userOne = new User("Ganesh", 12, true);
const userTwo = new User("ChaiaurCode", 22, false);
console.log(userOne);
console.log(userOne.constructor);



