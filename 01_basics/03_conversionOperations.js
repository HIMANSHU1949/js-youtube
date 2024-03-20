let score = "33abc"
console.log(typeof score);
console.log(typeof (score));

let valueNumber=Number(score)
console.log((typeof valueNumber));
console.log(valueNumber)

// "33"=> 33
// "33abc" => NaN(Not A Number)

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true    0=> false
// "Aman" => true

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1="hello"
let str2 = " aman"
let str3 = str1 + str2
console.log(str3);

console.log(1+"2");
console.log("1"+2);
console.log(1+"2"+"2");
console.log(1+2+"2");

console.log(true);
console.log(+true );
console.log(+"");
// this gives error => console.log(true+);

let gameCounter=100
gameCounter++
console.log(gameCounter);

console.log(2>1);
console.log(2>=3);
console.log(2!=3);

console.log("2">1);
console.log("01">2);

// ===
console.log("2" == 2);
console.log("2" === 2);
