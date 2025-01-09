const accountId = 1445533
let accountEmail = "aniket@mail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; 

// accountId = 2   constant variables are not changed
/*
prefer no to use var 
because of issue of block scope and functional scope..
If you declare a variable but does not provide any value it returns you undefined..like accountState is declared but value is undefined.. 
*/
accountEmail = "sameer@mail.com"
accountPassword = "1223344"
accountCity = "Mysore"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

