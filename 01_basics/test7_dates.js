let myDate = new Date();
console.log(myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 11, 13);
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("12-13-2024");
console.log(myCreatedDate2.toDateString());

// TimeStamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getDay());
console.log(Math.floor(Date.now()/1000));