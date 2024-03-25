//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Aman",
    age : 18,
    location : "Jaipur",
    [mySym] : "key1",
    email: "himang1949@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","tuesday"],
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(mySym);



JsUser.email = "kbdha@gmail.com"
// Object.freeze(JsUser)    //this freezes the object and doesnot allow to change
JsUser.email = "jwwkhkew"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user ");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}` );
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());