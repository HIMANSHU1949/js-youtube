//for

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
    
}

for (let index = 0; index < 10; index++) {
    console.log(`outer loop count ${index}`);
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop count ${j} and inner loop ${index}`);
        
    }
    
}

let myArray = ["flash","spiderman","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


//break and continue

//break
for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log(`5 is detected`);
        break
    }
    console.log(`value of i is ${index}`);
    
}


//continue
for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log(`5 is detected`);
        continue
    }
    console.log(`value of i is ${index}`);
    
}



//while loop

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}