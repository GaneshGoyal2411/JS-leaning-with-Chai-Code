const nums = [1,2,3,4,5,6,7,8,9,10];

// const newNums =nums.filter( (item)=> item>5);
// console.log(newNums);

// const newNums = nums.filter( (num)=>{
//     return num < 5;
// })
// console.log(newNums);

// --------------------- Same by forEach loop------------------
// const newNums =[]
// nums.forEach( (num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

const myBooks =[
    {title : "book 1", genre : "history", publish : 2022, edition : 2023},
    {title : "book 2", genre : "fiction", publish : 2018, edition : 2021},
    {title : "book 3", genre : "history", publish : 2014, edition : 2020},
    {title : "book 4", genre : "fiction", publish : 2010, edition : 2017},
    {title : "book 5", genre : "math", publish : 2009, edition : 2015},
    {title : "book 6", genre : "fiction", publish : 2007, edition : 2015},
    {title : "book 7", genre : "english", publish : 2005, edition : 2012},
    {title : "book 8", genre : "sc", publish : 2003, edition : 2010},
    {title : "book 9", genre : "business", publish : 2001, edition : 2011},
]

const userBooks =myBooks.filter( (bk)=>{
    if(bk.genre==="history"){
        return myBooks;
    }
})

// console.log(userBooks);

const published = myBooks.filter( (bk)=>{return bk.publish>2000 && bk.title==="book 9"})
console.log(published);