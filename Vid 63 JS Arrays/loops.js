let arr = [1,65,23,13,45,33]

// for(let i=0;i<arr.length;i++){
//     console.log(i,arr[i]);
// }

// arr.forEach((value,index,array)=>{
//     console.log(value,index,array);
// })

// from 

// let name = "Abhishek"
// let new_name = Array.from(name);
// console.log(new_name)

// for of loop
// shortcut to write for loop
// for(let i of arr){
//     console.log(i);
// }

// for in loop
// when we use in object it returns key
// same in array it return keys i.e index
// for(let i in arr){
//     console.log(i);
// }
// for(let i in arr){
//     console.log(arr[i]);
// }

let object = {
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}
// let object = {
//     1:'a',
//     2:'b',
//     3:'c',
//     4:'d'
// }
// for (const key in object) {
//         const element = object[key];
//         console.log(key,element)
// }

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key,element)
//     }
// }