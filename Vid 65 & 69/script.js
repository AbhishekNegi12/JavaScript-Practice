// calculate factorial of a number

// let x = prompt("Enter the number");

// let res = factorial(x){

// }
// let res=1;
// for(let i=2;i<=x;i++){
//     res = res*i;
// }
// alert(`the factorial of ${x} is ${res}`);

// let a=6;

// function fact(x){
//     let arr = Array.from(Array(x+1).keys())
//     console.log(arr.slice(1,))
//     let res = arr.slice(1,).reduce((a,b)=>{
//         return a*b;
//     })
//     console.log(res)
// }
// fact(a);

// let a=10;

// function fact(x){
//     let arr = Array.from(Array(x+1).keys());
//     console.log(arr.slice(1,));

//     let res = arr.slice(1,).reduce((a,b)=>{
//         return a*b;
//     })
//     console.log(res);
//     return res;
// }

// fact(a)


let a=7 ;

function fact(x){
    let arr = Array.from(Array(x+1).keys());
    console.log(arr.slice(1,));

    let res = arr.slice(1,).reduce((a,b)=>a*b);
    return res;
}
console.log(fact(a));