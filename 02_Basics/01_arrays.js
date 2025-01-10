//array
// an array can store  multiple types of elements in it ..(brackets),[square],{braces}.. 

let myArr = [1, 2, 3, 4, 5]
// let studentsName =["om", "Aniket","sunil"];
// let myArr2 = new Arr (1,2,3,4);

// console.log(myArr[2]);

// myArr.push(6);
// myArr.push(7);
//  myArr.pop();
//  myArr.unshift(9); //It can brin load on pc
//  myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr); //It converts number to string..
    

// slice , splice

console.log("A", myArr);

const myn1 = (myArr.slice(1, 3));
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("c", myArr);