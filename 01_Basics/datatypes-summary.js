// Primitive datatypes
// call by value
//7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const  isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);



//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


//reference type (non-primitive)

//objects and browser summary or events are important..

 // Arrays, Objects, Functions

 const studentsName = ["Aniket", "Sumit", "Sameer"] // array

//  const studentDetails = {
//     Name: Aniket,
//     age: 25,
//     no: 8788021869,
//  }; //Object

 const myFunction = function(){
   //  console.log("vedas");
 } //functions


//console.log(typeof myFunction); It is used to know type of variable..

 
//+++++++++++++++++++++++++++++++++++++++++
//Two types of memory: stack, heap
//stack memory stores(primitive datatypes).
//heap memory stores (non.primitive)..

let myYoutubename = "anikett@mail.com" 
let anothername = myYoutubename
anothername = "sameerm@mail.com"

// console.log(anothername);
// console.log(myYoutubename);
//it is an example of stack were it creates a copy..

let userOne = {
   email: "sameerm@mail.com",
   no: 8459643260,
}

let userTwo = userOne;
userTwo.email =  "anikett@mail.com"

console.log(userOne.email);
console.log(userTwo.email);

//in non-primitive datatypes like objects it reference of same value.. 


