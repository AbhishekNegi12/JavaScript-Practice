let arr = [1,3,5,7,11,13];

// 1. reating new array which contains the squares of elements in arr array

//  METHOD 1
// let new_arr = [];
// for(let i=0;i<arr.length;i++){
//     new_arr.push(arr[i]*arr[i]);
// }
// console.log(new_arr);

// METHOD 2
// let new_arr = arr.map((e)=>{
//     return e**2;
// })
// let new_arr = arr.map((e,index,array)=>{
//     return e**2;
// })

// console.log(new_arr);

// 2. use of Filter

let new_arr = [];

// const greaterThanSeven = (e)=>{
//     return e>7?true:false;
// }

// console.log(arr.filter(greaterThanSeven))

// Shortcuts of writing this
// console.log(arr.filter(e=>{
//     return e>7?true:false;
// }))
// console.log(arr.filter(e => e > 7));

let arr2 = [1,2,3,4,5,6];

const red=(a,b)=>{
    return a*b;
}
console.log(arr2.reduce(red));
