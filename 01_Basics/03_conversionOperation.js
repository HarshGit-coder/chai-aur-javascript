let score = undefined

// console.log(typeof score);
//now i want to convert it to number ..

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 

//NaN means not a number so it is important to check always.. 
//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
//null => 0
//undefined =>NaN


let isLoggedIn = "aniket"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//1 => true
//"" => false
//"aniket" => true


let someNumber = 33;
let stringsomeNumber = String(someNumber)
// console.log(stringsomeNumber)
// console.log(typeof stringsomeNumber)




//*************operations***************//

let value = 3
let negValue = -value
console.log(negValue)


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);
// this are basic arithmetic operations..

let str1 = "hello";
let str2 = " harsh";

let str3 = str1 + str2
// console.log(str3);


// console.log("1"+2);
// console.log(1 + "2");
// console.log("1"+2+2);
// console.log(1+2+"2");
//it basically means if it starts wit string it returns the same number. but if it starts with number then it will add the no.. in the list. and return the string value as it is.. 



// console.log(+true);
// console.log(+"");

// let num1, num2, num3
// num1 = num2 = num3 = 2+2

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);