//Dates

let myDate = new Date();
// console.log(myDate.toString()); //Fri Jan 10 2025 16:25:12 GMT+0000 (Coordinated Universal Time)

//  console.log(myDate.toDateString()); //Fri Jan 10 2025

// console.log(myDate.toISOString()); //2025-01-10T16:31:48.761Z

//console.log(myDate.toLocaleString());
//1/10/2025, 4:33:59 PM

// console.log(myDate.toLocaleDateString());
//1/10/2025
//console.log(myDate.toLocaleTimeString());
//4:35:33 PM
// console.log(typeof myDate);
//object

// let myCreatedDate = new Date(2025, 5, 13)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("01-14-2025");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))
//to convert milliseconds to seconds..

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
