// singleton
// Object.create

// object literals
const Symb = Symbol("key1");

const JsUser = {
    name : "Ganesh",
    [Symb] :"myKey1",
    age : 25,
    location : "Indore",
    email : "ganesh.goyal2411@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);

JsUser.email = "goyalganesh@google.com";
// console.log(JsUser);

// Object.freeze(JsUser);

JsUser.email = "Nesh";
// console.log(JsUser);

// Functions
JsUser.greeting = function(){
    console.log("Hello JS users");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// JsUser.greeting(); By Myself

JsUser.greeting();
console.log(JsUser.greetingTwo());


// SELF

// letsGreet = function(){
//     console.log("Wel Come to India!");
// }

// console.log(letsGreet());