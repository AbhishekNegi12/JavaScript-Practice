/*
Create a faulty calculator using JS that performs the following operations

1. It takes two numbers as iput from the user.
2. It performs wrong opeartions as follows:
10% of the time it performs wrong operations
+ ---> -
* ---> +
/ ---> **
- ---> /
*/

let random = Math.random();
console.log(random);

let a = prompt("Enter first number")
let op = prompt("Enter opeartion")
let b = prompt("Enter second number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
if(random > 0.1){    
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`);
}
else{
    op = obj[op];
    alert(`The result is : ${eval(`${a} ${op} ${b}`)}`)
}