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

// let random = math.randon();

function calculator(a,b,op){
    let random = Math.random();
    console.log("Random value generated:", random);
    let ans=0;
    if(random>0.1){
        switch(op){
            case '+':
                ans = a+b;
                break;
            case '-':
                ans = a>b?a-b:b-a;
                break;
            case '*':
                ans = a*b;
                break;
            case '/':
                ans = a/b;
                break;
            default:
                console.log("Enter valid opeartion");
        }
    }
    else{
        console.log("Faulty operation triggered!");
        switch(op){
            case '*':
                ans = a+b;
                break;
            case '+':
                ans = a-b;
                break;
            case '/':
                ans = a**b;
                break;
            case '-':
                ans = a/b;
                break;
            default:
                console.log("Enter valid opeartion");
        }
    }
    return ans;
}

function main(){
    console.log("Welcome to the Faulty Calculator!");

    let a = parseFloat(prompt("Enter the first number : ")); 
    let b = parseFloat(prompt("Enter the second number : ")); 
    let op = prompt("Enter the opeartion (+, -, *, /) you want to perform ")

    let result = calculator(a,b,op);
    // console.log("The result is : " +result);
    alert("The result of " + a + " " + op + " " + b + " is: " + result);
}
main();