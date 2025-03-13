// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1,2,3,3,4,5,6,0];

const double = ()=>{
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0 && arr[i]!=arr[i-1]){
            res.push(arr[i]*2);
        }
        else{
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(double(arr));

