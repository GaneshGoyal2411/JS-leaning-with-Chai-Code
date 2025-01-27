const map = new Map ()
map.set("IND", "India")
map.set("USA","United State of America")
map.set("FR", "France")
map.set("IND", "India")

// console.log(map);

// for(const country of map){
//     console.log(country);
// }

for(const [country, value] of map){
    console.log(country,':-', value);
}