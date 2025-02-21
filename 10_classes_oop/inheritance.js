class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`this is username: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        // this.username = username;
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

const obj1 = new User("Ganesh");
obj1.logMe();

const obj2 = new Teacher("Madam","madam@gmail.com","123");
obj2.addCourse();

console.log(obj1===obj2);
console.log(obj1===Teacher);
console.log(obj1 instanceof User);
console.log(obj2 instanceof Teacher);