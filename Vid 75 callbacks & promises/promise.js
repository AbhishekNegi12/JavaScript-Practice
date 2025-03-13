console.log("This is promise");
//Promise of code execution

let prom1 = new Promise((resolve,reject)=>{
    let a= Math.random();
    console.log(a);
    
    if(a<0.5){
        reject("Not supported by random number");
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done");
            resolve("Abhishek");        
        },3000)
    }
})
let prom2 = new Promise((resolve,reject)=>{
    let a= Math.random();
    console.log(a);
    
    if(a<0.5){
        reject("Not supported by random number 2");
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done 2");
            resolve("Abhishek 2");        
        },1000)
    }
})

// .then for resolving the error
// .catch for catching the error
// prom1.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// let p3 = Promise.all([prom1,prom2])

// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
// })
let p4 = Promise.allSettled([prom1,prom2])

p4.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
})



