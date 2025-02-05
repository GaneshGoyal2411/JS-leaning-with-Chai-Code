// document.getElementById('threeCups').onclick = function(){
//     alert("owl clicked");
// }

//-------------------------------- Best One--------------------------------
// document.querySelector("#threeCups").addEventListener('click', function(){
//     alert("Owl clicked again");
// })

// ---------------------------by Making object----------------------
// document.getElementById('images').addEventListener('mouseover', function(e){
//     console.log("images selected");
// }, false);

// document.getElementById('twoCups').addEventListener('mouseover', function(e){
//     console.log("Two cups hovered");
//     e.stopPropagation(); // if want to stop boubling 
// }, false);

// document.getElementById('google').addEventListener('onclick', function(e){
//     console.log("google clicked");
//     e.preventDefault();
//     e.stopPropagation();
// },false)

document.querySelector("#images").addEventListener('click', function(e){
    console.log(e.target.parentNode);
    let removeIt = e.target.parentNode;
    removeIt.remove();
}, false);

