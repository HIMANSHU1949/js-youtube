

function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
    
}

sayMyName()
/*
function addTwoNumbers(number1,number2){   //number1,number2 are parameters
    console.log(number1+number2);
    
}
addTwoNumbers(3,4)
const result = addTwoNumbers(3,"4")     //3,4 are arguments
console.log("Result : ",result);     //here comes undefined

*/
/*
function addTwoNumbers(number1,number2){   //number1,number2 are parameters
    let result = number1+number2
    return result
    
}

addTwoNumbers(3,4)
const result = addTwoNumbers(3,"4")     //3,4 are arguments
console.log("Result : ",result);
*/

function addTwoNumbers(number1,number2){   //number1,number2 are parameters
    
    return number1+number2
    
}

addTwoNumbers(3,4)
const result = addTwoNumbers(3,"4")     //3,4 are arguments
console.log("Result : ",result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter the username");
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Aman"));

console.log(loginUserMessage());


function calculateCartPrice(...num1){
         return num1
}

console.log(calculateCartPrice(200,400,500));   //this retuens an array

/*
function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000));   //in this 200 goes to val1    400 goes to val2,       500,2000 goes to array
*/
const user = {
    username: "Aman",
    price : 200,
}

function handleObject(anyObject){
       console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
}


const myNewArray = [10,20,30,40 ]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));