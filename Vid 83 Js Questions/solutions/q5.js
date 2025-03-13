// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let arr1 = [1,2,3,4,5,6,-1];
let arr2 = [1,20,13,-4,5,6,-1];
let arr3 = [100,2,3,4,-5,6,-1];
let arr4 = [91,2,-7,4,5,6,-1];
// function sum(arr){

// }

const sum = (arr)=>{
    let res=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] >=0){
            res+= arr[i];
        }
        else{
            break;
        }
    }
    return res;
}

console.log(sum(arr1));
console.log(sum(arr2));
console.log(sum(arr3));
console.log(sum(arr4));