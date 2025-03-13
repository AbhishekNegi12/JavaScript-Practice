//Fundamentally prompt gives a string


let a = prompt("Enter first number : ");

let b = prompt("Enter second number : ");

//error
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed");
}

let sum = parseInt(a)+parseInt(b);

// console.log("The sum is : ",sum);
let x=1;
try {
    console.log("The sum is : ",sum*x);
} catch (error) {
    console.log("Error aaa gya bhai !!");
}
finally{
    console.log("Files are being closed and db connection is beibg closed")
}

// try {
//     console.log("The sum is : ",sum*x);
// } catch (error) {
//     console.log("Error aaa gya bhai !!");
// }
// console.log("Files are being closed and db connection is beibg closed");

//these both work same then what is th euse of finally

// it is used in functions
// use of finally as when there are return statements in functions the code written below return doesnot run so finally make it run main use of finally
function main(){
    let x=1;
    try {
        console.log("The sum is : ",sum*x);
        return true;
    } catch (error) {
        console.log("Error aaa gya bhai !!");
        return false;
    }
    finally{
        console.log("Files are being closed and db connection is beibg closed")
    }
}
let c = main();