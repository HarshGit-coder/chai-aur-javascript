const marvel_heroes = ["Thor", "Spiderman", "Antman"]
const dc_heroes = ["Superman", "flash", "Batman"]

// console.log(marvel_heroes.concat(dc_heroes)); 
// mostly concat is not used rather than that spread(...) operator is used..

console.log([...dc_heroes, ...marvel_heroes]) //spread operator


let anotherArray = [1,2,3,4,[2,3,4],7,[4,5, [7,8],8]];
// console.log(anotherArray.flat(Infinity));


// console.log(Array.isArray("Batman"));
// console.log(Array.from("Batman"));
// console.log(Array.from({name: "Batman"}));

let student1 = "aniket"
let student2 = "sameer"
let student3 = "Om"

console.log(Array.of(student1, student2, student3)); //same goes with number datatype