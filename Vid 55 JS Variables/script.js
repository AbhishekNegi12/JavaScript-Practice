console.log("Hey I am Abhishek")

// var a=5;
// var b=8;
// var c="Abhi";

// console.log(a+b);
// console.log(typeof a,typeof b,typeof c)


// ****** NOTE ********
// var 55a = 12; Not allowed
// variable name v=cant start with a number it can only start with $,_ ,or a CHARACTER number is not allowed

// const a =15;
// a=a+14;
// const can't be re-assigned


// Use of let
// let is a block scoped

let a=5;
a=a+1 //Allowed

{
    let a= 55;
    console.log(a) // op = 55
}
console.log(a) // op = 6


// let p="Abhi Negi";
// let q=123;
// let r=22.5;
// const x=true;
// let y=undefined;
// let z=null;

// console.log(p ,q ,r ,x ,y ,z)
// console.log(typeof p ,typeof q ,typeof r ,typeof x ,typeof y ,typeof z)


let obj = {
    "name" : "Abhishek",
    "job role" : "SDE",
    "company" : "Microsoft"
}
console.log(obj);
obj.salary = "100 crores";
console.log(obj)




