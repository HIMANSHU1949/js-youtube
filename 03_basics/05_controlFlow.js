//if


const isUserLoggedIn = true
if(isUserLoggedIn){

}
if(3 != 2){
    console.log("executed");
}
if(false){

}

const temparature =56
if(temparature<50){
    console.log(`temparature is less than 50 `);
}
else{
   console.log( "temparature is greater than 50 ");
}


const score =200
if(score > 100){
    const power = "fly"
    console.log(`User power is ${power}`);
}


//implicit scope
/*
const balance = 500

if(balance >400) console.log("balance is sufficient");      //this is written in one line only

*/

const balance  = 700


if(balance <500){
    console.log("balance is less than 500");
}
else if(balance < 750){
    console.log("balance is less than 750 ");
}
else if(balance < 900 ){
    console.log("balance is less than 900");
}
else if(balance < 1000){
    console.log("balance is less than 1000");
}
else {
    console.log("balance is less than 1200 ");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if(userLoggedIn && debitCard){
    console.log("Aloow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user is logged in");
}

//  SWITCH

const month =3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case matched");
        break;
}


// Truthy and Flasy values

const userEmail = "aman@gmail.com"

if(userEmail){
    console.log("got an email");
}
else{
    console.log("does not have an email");
}

// Falsy values are => false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
// Truthy values are => "0" , 'false' , " " , [] , {} , function(){}



// Nullish Coalescing Operator (??) : null undefined

let val1,val2;
val1 = 5 ?? 10
console.log(val1);
val2 = null ?? 10
console.log(val2);  //if null comes then it gives for next value

//terniary operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");


