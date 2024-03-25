// const tinderUser = new Object()   //singleton object
// or you can defined it by another method that is 
const tinderUser = {}    //this is non singleton object

tinderUser.id = "123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullname : 
        {
            
        firstName : "Aman",
        lastName: "Gupta",
    }
        
    }
}

console.log(regularUser.fullName.userFullname.firstName)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);



const users ={
    {id : 1,
    email: "kjwdbwb@gmail.com",
    },
    {
        id : 1,
        email: "kjwdbwb@gmail.com",
    
    },
    {
        id : 1,
        email: "kjwdbwb@gmail.com",
    
    },
    {
        id : 1,
        email: "kjwdbwb@gmail.com",
    
    },
    {
        id : 1,
        email: "kjwdbwb@gmail.com",
    
    },
    

}
user[1].email
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));