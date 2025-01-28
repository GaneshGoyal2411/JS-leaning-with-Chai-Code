const myNums = [1,2,3];

// const myTotal = myNums.reduce( function(acc, currval){
//     console.log(`ACC: ${acc} And CurrentValue :${currval}`);
//     return acc + currval;
// }, 0)

// ---------------- By callBack Funtion-------------------------
const myTotal = myNums.reduce( (acc, currval) => acc+currval,0);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        itemPrice : 5000
    },
    {
        itemName : "mobile course",
        itemPrice : 58000
    },
    {
        itemName : "data science course",
        itemPrice : 15000
    },
]

const priceToPay = shoppingCart.reduce( (acc, item)=> acc + item.itemPrice, 0);
console.log(priceToPay);

