class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
}

const hitesh = new User("hitesh@gmail.com", "123");
console.log(hitesh);