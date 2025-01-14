//functions are simply meant as whatever the code you write is wrapped in a package..

function sayMyName(){
    console.log("H")
    console.log("a")
    console.log("r")
    console.log("s")
    console.log("h")
}
// sayMyName()

// function addTwoNumbers (number1, number2)//paramters
// {
//     console.log(number1 + number2)//arguments
// }
//if we do console value cannot be stored in variable or cannot be returned..  

function addTwoNumbers (number1, number2)
{
    let result = number1 + number2
    return result;
}

const result= addTwoNumbers(3, 4)
// console.log("Result: ", result);



function loginUserMessage(username){
    if(username === undefined) {
        console.log("Please Enter Username ")
    }
    else{
           return `${username} just Logged In`
    }
    
}

// console.log(loginUserMessage("Harsh"));




function calculatCartPrice(...num1){
        return num1
}
// console.log(calculatCartPrice(200, 4000, 400,200,700))
// ... triple dots are set to be as rest operator and spread operator it can multiple numbers as parameter and argument


const user = {
    username: "Aniket",
    price: 199, 
}
function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

 handleObject(user)

//  handleObject ({
// username: "Sam",
// price: 299

// })

const myNewArray = [100, 200, 300, 400, 500, 600]
function returnSecondValue(getArray){
    return(getArray[2])
}

console.log(returnSecondValue(myNewArray));