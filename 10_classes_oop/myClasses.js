// class User{
    // constructor(username, email, password){
        // this.username = username;
        // this.email = email;
        // this.password = password;
    // }
    // encryptPassword(){
    //     return `${this.password}`
    // }
    // changeUserName(){
    //     return `${this.username.toUpperCase()}`
    // }
// }

// const chai = new User("chai","chai@gmail.com","123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// behind the schene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const Tea = new User("tea","tea@gmail.com","abc");

console.log(Tea.encryptPassword());
console.log(Tea.changeUserName());