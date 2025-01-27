// for(let i = 0; i<11; i++){
//     const element = i;
//     if(element==5){
//         console.log(element+":is the best number")
//     }
//     console.log(i);
// }

// ---------------------- 02--------------------------
// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer loop:${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop:${j} Outer loop:${i}`);
//         console.log(i+"*"+j+"="+i*j);
//     }
// }

//-------------------------03--------------------------------
    // let heroes = ["flash","batman","superman"]; 
    // console.log(heroes.length);
    // for (let index = 0; index < heroes.length; index++) {
        
    //     const element = heroes[index];
       
    //     console.log(element);
    // }

    //---------------- Break and Continue-----------------------
    for(let i = 1; i<=20; i++){
        if(i==5){
            continue;
        }
        else if(i==10){
            break;
        }
        console.log(`Value of I is:${i}`);
    }