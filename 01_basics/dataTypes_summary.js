//Primitive data types
// 7 types : Boolean,BigInt, String, Number, null, undefined, Symbol


const  Num= 110
const id = Symbol('1223')
const anotherId = Symbol('123')

console.log(id === anotherId);


//Reference(Non Primitive)
//Array, Objects, Functions

const heros = ["Spiderman", "Lucifer", "Hawkeye"];

let myObj = {
      name : "Aman",
      Age : 21,
}


const myFunction = function() {
    console.log("Hello World");
}


// Stack Memory(primitive) , Heap Memory(Non primitve)

//below is stored in stack beacuse they are primitive datatypes
let myYoutubeName = "aman@youtubedotcom"
let anotherName = "Vlogs"
console.log(myYoutubeName);
console.log(anotherName);


//below is stored in heap because it is non primitive
let userOne = {
    email: "himang1949@gmail.com",
    upi: "jksdah@okAxis"
}
let usertwo = userOne

usertwo.email = "2021@gmail.com"

console.log(usertwo.email);
console.log(userOne.email);
