// settle means resolve or reject

// resolve means promise has settled successfuilly
// reject means promise has not settled successfuilly




//Waiting for the data we have two approaches
// 1. call back approach

// function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },3500)
//     })
// }

// console.log("Loading Modules")

// console.log("Doing Something Else")

// console.log("load Data")

// let data = getdata();

// data.then((v)=>{
//     console.log(data);

//     console.log("Process Data")

//     console.log("Task 2")
// })


// 2. Async/Await
    // -> await can be used inside async function there are also other methods
// async function getdata(){
//     //simulate getting data from server
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },3500)
//     })
// }

// async function main() {
//     console.log("Loading Modules")

//     console.log("Doing Something Else")

//     console.log("load Data")

//     let data = await getdata();

//     console.log(data);

//     console.log("Process Data")

//     console.log("Task 2")    
// }

// main();


async function getdata(){
    //simulate getting data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let data = await x.json();
    let data = await x.text();
    // console.log(data);
    return data;
}

async function main() {
    console.log("Loading Modules")

    console.log("Doing Something Else")

    console.log("load Data")

    let data = await getdata();
    // let data = getdata();

    console.log(data);

    console.log("Process Data")

    console.log("Task 2")    
}

main();