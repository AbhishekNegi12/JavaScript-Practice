// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


let arr = ["Abhishek", "Sinchan", "Diya", "Tanisha", "Sanskriti", "Abhay", "Ayush", "Chhota Bheem", "Abhay", "RajatDalal", "MithuDon", "Perman"];

let houses = [];

const house =()=>{
    for(const student of arr){
        if(student.length < 6){
            houses.push("Gryffindor");
        }
        else if(student.length < 8){
            houses.push("Hufflepuff");
        }
        else if(student.length < 12){
            houses.push("Ravenclaw");
        }
        else{
            houses.push("Slytherin");   
        }
    }
}
house();
console.log(houses);