class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

   static createId(){
        return "123";
    }
}

const obj1 = new User("Ganesh");
// console.log(obj1.createId());
// console.log(`obj1.createId() for ${this.username}`);
// console.log(obj1.username+"ki id:"+obj1.createId);

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

// const iphone = new User("FirstClass");
// iphone.logMe();

const myphone = new Teacher("tname","t@email.com");
console.log(myphone.createId());