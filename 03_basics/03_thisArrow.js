const user = {
    userName : "Ganesh",
    price : 199,

    welconeMassage: function (){
        // console.log(`${this.userName}, welcome to the website...`)
        // console.log(this);
    }
        
}

user.welconeMassage();
user.userName="Sam";
user.welconeMassage();
// console.log(this);
