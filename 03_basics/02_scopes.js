
/*
if(true){
    let a= 10
    const b = 20
    var c = 30 
}

console.log(a);
console.log(b);
console.log(c);

//this three lines give error because a,b,c, has scope only one inside the "if"

*/


let a= 10032
const b = 240
var c = 3083

if(true){
    let a= 10
    const b = 20
    var c = 30 
}

console.log(a);
console.log(b);
console.log(c);

//this gives the scope idea to you


function one(){
    const username="Aman"

    function two(){
        const website  = "youtube"
        console.log(username) ;     //this will be executed because it is 
     }
    //   console.log(website);   this gives an error due to scope 
    two()
}


if(true){
    const username="aman"
    if( username === "aman"){
        const website = "youtube"
        console.log(username + website);
    }
}

/*

// here no output comes from this code till line(68)
function addone(num){
    return num+1
}

addone(2)

const addTwo = function(num){
    return num +2
}

addTwo(5)
*/

function addone(num){
    return num+1
}

console.log(addone(2)); 

const addTwo = function(num){
    return num +2
}

addTwo(5)