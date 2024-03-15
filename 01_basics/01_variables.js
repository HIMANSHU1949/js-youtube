const accountId = 144553
let accountEmail = "hdags@gmail.com"
var accountPassword =  "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2   this is not allowed

accountEmail = "urfhas@gmail.com"
accountPassword =  "12345642879"
accountCity = "Surat"

/*
let and var both are used to declare a variable 
but do nnot prefer to use "var"
because of issue in block space and funtional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])