// const tinderUser = new Object() //singleton

const tinderUser2 = {} //non singleton
tinderUser2.id = "124bbc";
tinderUser2.name = "Sammy";
tinderUser2.isLoggedIn = false;


const normalUser = {
    email: "aniket@mail.com",
    fullname: {
        userfullname: {
            firstname: "Aniket",
            lastname: "somane"

        }
    }
} 

// console.log(normalUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "c", 6: "d"}

// console.log(Object.assign(obj1, obj2, obj3))


const users = [
    {
        id : 1,
        email: "a@mail.com" 
    },
    {
        id : 2,
        email: "d@mail.com" 
    },
    {
        id : 3,
        email: "c@mail.com" 
    },
    {
        id : 4,
        email: "b@mail.com" 
    }
] 
// console.log(users[1].email);

// console.log(tinderUser2);

// console.log(Object.keys(tinderUser2))
// console.log(Object.values(tinderUser2))
// console.log(Object.entries(tinderUser2))
//it converts object keyValue pairs to array.. 
