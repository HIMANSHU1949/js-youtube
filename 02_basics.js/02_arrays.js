const marvel_heros=["Thor","IronMan","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],[7,[8,9]]]
const rael_another_array = another_array.flat(Infinity)
console.log(rael_another_array); 

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman"));

console.log(Array.from({name: "Aman"}));  //intresting situation

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

