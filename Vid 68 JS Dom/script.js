console.log("Abhishek")

// let box = document.getElementsByClassName("box")
// console.log(box)

// box[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor = "red"
// document.querySelector(".box").style.backgroundColor = "green"


console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach( e=>{
//     console.log(e);
// })
document.querySelectorAll(".box").forEach( e=>{
    e.style.backgroundColor = "olive"
})