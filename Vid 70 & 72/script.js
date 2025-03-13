// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     console.log(color);
// }

// getRandomColor();
  

function randomColorGenerator(){
    let letters = '0123456789ABCDEF';
    let color = '#';

    for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// randomColorGenerator();

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);


let boxes = document.querySelector(".container").children

Array.from(boxes).forEach(e=>{
    // console.log(e);
    e.style.backgroundColor = randomColorGenerator();
    e.style.color = randomColorGenerator();
})

// document.querySelectorAll(".box").forEach(e=>{
//     console.log(e);
//     // e.style.backgroundColor = randomColorGenerator();
// })