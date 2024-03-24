// array

const myArr = [0,1,2,3,4,5]
const myArr2=new Array(1,2,3,4,5)
console.log(myArr[0]);

//array methods
myArr.push(6)
console.log(myArr);
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr.includes(8));
console.log(myArr.includes(3));

const newArray = myArr.join()
console.log(myArr);
console.log(newArray);


//slice and splice

console.log("A" , myArr);
const myn1 = myArr.slice(1,3)   //1st included and 3rd not included 

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log(myArr);     //splice removes elements from that index to that and also icludes the last index till where it is given
console.log(myn2);