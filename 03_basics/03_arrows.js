const user = {
    username:"Animation",
    price : 990,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website  `);    //   "this" keyword is used to refer the current context
    }
}


user.welcomeMessage()
user.username = "aman"
user.welcomeMessage()    //this uses the current context in it


console.log(this);

/*
function chai(){
    let username = "Aman"
    console.log(this.username);     ///this doesn't work in function
}

chai()

*/
/*

//this also doesn't work ,so what will work

const chai =function (){
    let username = "Aman"
    console.log(this.username);     ///this doesn't work in function
}

chai()
*/


const chai = ()  => {
    let username = "Aman"
    console.log(this);    ///this doesn't work in function
}

chai()


//ARROW FUNCTIONS

//syntax

const addTwo = (num1,num2) => {
          return num1+num2
}

console.log(addTwo(3,4));

//implicit return    in this only one line
const addThree = (num1,num2,num3) =>  (num1+num2+num3)
    
const addwxhree = (num1,num2,num3) =>  ({username:"aman"})   //we have to use curly paranthesis for string
console.log(addwxhree(3,4,5));


