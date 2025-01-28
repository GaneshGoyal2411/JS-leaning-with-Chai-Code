const myObject = {
    js : "javascript",
    cpp : "c++",
    fb :"facebook",
    ws : "whatapp"
}
for(const key in myObject){
    // console.log(myObject[key]);
    // console.log(`${key} shortcut of ${myObject[key]}`);
}

const programming = ["java", "js", "c++", 'ex'];
for(const key in programming){
    // console.log(key);
    // console.log(programming[key]);
}

//------------------For each--------------------------------
const coding =["java", "js", "python","c++"];

// coding.forEach( function (lang){
//     console.log(lang);
// })

//----------------call back------------------------------------
// coding.forEach( (item)=>{
//     console.log(item);
// })

//------------------ one more------------------------------------
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

//------------------ one more------------------------------------
// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })

//------------------********** one more *********------------------------------------
const myCoding=[
    {
        languageName : "javaScript",
        languageFileName : "js"
    }  ,
    {
        languageName : "java",
        languageFileName : "java"
    }  ,
    {
        languageName : "cpp",
        languageFileName : "cp"
    }  
]

myCoding.forEach( (item)=>{
    console.log(`Name of the lang is: ${item.languageName} And file name should be ${item.languageFileName}`)
});