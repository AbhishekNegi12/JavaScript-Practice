// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// const vowelsCount = (str)=>{
//     let temp = str.split('');
//     let vowel=0;
//     for(const count of temp){
//         if(count=='a'||count=='e'||count=='i'||count=='o'||count=='u'){
//             vowel++;
//         }
//         else if(count=='A'||count=='E'||count=='I'||count=='O'||count=='U'){
//             vowel++;
//         }
//     }
//     return vowel;
// }

// const vowelsCount = (str)=>{
//     let temp = "aeiouAEIOU";
//     let vowel=0;
//     for(const count of str){{
//         if(temp.includes(count)){
//             vowel++;
//         }
//     }
        
//     }
//     return vowel;
// }

const vowelsCount = (str)=>{
    let count = str.match(/[aeiou]/gi || []).length;
    return count;
}
console.log(vowelsCount("Hello"));
console.log(vowelsCount("Abhishek"));
console.log(vowelsCount("BhanuPratap"));