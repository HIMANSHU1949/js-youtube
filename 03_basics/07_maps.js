//maps

const map  = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")

console.log(map);

for (const [key , value] of map  )
 {
    console.log(key," :- ",value);
}

/*

///this wil show that these are not iterable

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key," :- ",value);
}
*/
