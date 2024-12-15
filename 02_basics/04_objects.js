// const tinderUser = new Object(); // SingleTon
const tinderUser2 = {};          // Non-SingleTon   

// console.log(tinderUser);
// console.log(tinderUser2);

tinderUser2.id = "123abc";
tinderUser2.name = "Sammy";
tinderUser2.isLoggedIn = false;

// console.log(tinderUser2);
// console.log(tinderUser2.id);

const regularUser ={
    email: "same@gmail.com",
    fullName: {
        firstName: "Ganesh",
        lastName: "Goyal"
    }
}

// console.log(regularUser.email.fullName.lastName);
// console.log(`Email: ${regularUser.email}`);
// console.log(`FirstName: ${regularUser.fullName.firstName}`);
// console.log(`LastName: ${regularUser.fullName.lastName}`);
// console.log(`FullName: ${regularUser.fullName.firstName} ${regularUser.fullName.lastName}`);

// By Chat GDP
for (const key in regularUser) {
    // console.log(`${key}:`, regularUser[key]);
}

// For nested properties:
// console.log("Full Name:");
for (const key in regularUser.fullName) {
    console.log(`  ${key}: ${regularUser.fullName[key]}`);
}

// Object asign
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"c"}
const obj3 = {5:"d",6:"e"}

// ***** Difficult *****
// const obj5 = Object.assign({},obj1,obj2,obj3);
// console.log(obj5);

// ***** Easy ******
const obj4 = {...obj1,...obj2,...obj3};
// console.log(obj4);


// D-Structure
const course = {
    coursename: "JS Hindi",
    coursePrice: 999,
    courseTeacher:"Hitesh"
}

// console.log(course.courseTeacher);

const {courseTeacher:teacher} = course 

console.log(teacher);

// API Inroduction
{
    "name":"Hitesh",
    "coursename":"JS in Hindi",
    "price":"Free"
}