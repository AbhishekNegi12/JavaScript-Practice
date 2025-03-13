// Q1

let obj = {
    "Abhi":100,
    "Rohan":90,
    "Abhay":85
}
// for(const key in obj){
//     console.log("The marks of "+ key  +" is : "+obj[key]);
// }
// for(let i=0; i<Object.keys(obj).length ; i++){
//     console.log("The marks of "+ Object.keys(obj)[i] + " is : "+ obj[Object.keys(obj)[i]]);
// }
// for(let i=0; i<Object.keys(obj).length ; i++){
//     let key = Object.keys(obj)[i];
//     console.log("The marks of "+ Object.keys(obj)[i] + " is : "+ obj[key]);
// }

// Q2
// let obj ={
//     Abhishek:100,
//     Abniunav:90,
//     Abhay:80
// }
// for(const key in obj){
//     console.log(obj[key])
// }

//Q4

function MEAN5(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}
let result = MEAN5(5,5,5,5,5)
console.log(result)
