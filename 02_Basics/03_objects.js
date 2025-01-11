//when we create objects like literals they are not created as sinGleton...
//if created throuGh constructor then it is sinGleton...

//object literals it is a method of creatinG objects.. 
const mySym = Symbol("key1")
const JsUser = {
    name: "Harsh",
    "Full Name": "Harsh Mendhi",
    age: 21,
    [mySym]: "mykey1",
    location:"Nagpur",
    Email:"harshmendhi@gmail.com",
    isLoggedIn: false
}

// console.log(JsUser.Email); //but its not a good way..
// console.log(JsUser["Email"]);
// console.log(JsUser["Full Name"]);// In tis case we can not use.
// console.log(JsUser[mySym]);

JsUser.Email = "harshmendhi@google.com"
//it will make changes in the object..
// Object.freeze(JsUser);
//it will freeze the js user and you cannot do changes in jsuser now..
console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello");
}



JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this["Full Name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());