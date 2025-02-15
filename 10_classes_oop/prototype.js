/*
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ganesh = function(){
    console.log("Ganesh is present in all objects");
}

Array.prototype.heyGanesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.ganesh()
// myHeros.ganesh();

//--------------------- Inheritance---------------

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
    .__proto__TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax
Object.serPrototypeOf(TeachingSupport, Teacher);

let anotherUser = "ChaiAurCode         "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUser.trueLength();
"ganesh".trueLength();
"iceTea".trueLength();
*/