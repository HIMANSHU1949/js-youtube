//Date


let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof Date);

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

let date1=new Date("2023-01-23")
let date2=new Date("23-01-2023")
console.log(date1);
console.log(date2);
