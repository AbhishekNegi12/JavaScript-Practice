async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

// let a = await sleep();
// let b = await sleep();//give error


//1. IIFE (Immediatewly invoke function Expression)
// (async function main(){
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b);
// })()

function sum(a,b,c){
    return a+b+c;
}
//2. Destructuring
(async function main(){
    // let [x,y] = [1,5,7]
    // console.log(x,y);

    // let [x,y,...rest] = [1,5,7,8,9,10,11,12]
    // console.log(x,y,rest);

    //object Destructuring
    //used b/c sometines we want to pull out few things from a very large object.
    // let obj={
    //     a:1,
    //     b:2,
    //     c:1
    // }
    // let {a,b} = obj;
    // console.log(a,b);

    let arr = [1,2,3];
    // console.log(arr[0]+arr[1]+arr[2]); //op-> 6
    // console.log(sum(arr[0],arr[1],arr[2])); //op-> 6
    console.log(sum(...arr)); //op-> 6
})()