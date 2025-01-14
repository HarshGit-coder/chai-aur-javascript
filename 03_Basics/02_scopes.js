var c = 100
let a = 300   //global scope 
if(true) {
    let a = 10
    const b = 20
    var c = 30           // variables inside function or condition are block scope
    // console.log("INNER: ", a);
} 

// console.log(a);


//nested Scopes

function one(){
    const username = "Sameer"

    function two(){
      const  website = "Youtube"
      console.log(username) 
    }
    // console.log(website)// we cannot access variable outside function.

    two()
}

// one()

if (true) {
    const username = "Aniket"
    if(username === "Aniket")
    {
        const website = " Youtube"
        // console.log(username + website);
    }
    
}


//+++++++++interestin+++++++++++++
// two techniques for functions
function addOne(num){
    return num + 1
}
console.log(addOne(5))

const addTwo = function(num){
          return num + 2 
}
addTwo(5)
