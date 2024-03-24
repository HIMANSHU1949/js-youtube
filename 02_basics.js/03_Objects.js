//singleton

//object literals
const JsUser = {
    name : "Aman",
    age : 18,
    location : "Jaipur",
    email: "himang1949@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","tuesday"],
}
console.log(JsUser.email);
console.log(JsUser["email"]);

const mySym = Symbol("key1")

