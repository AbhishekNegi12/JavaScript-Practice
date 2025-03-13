let button = document.getElementById("btn")

// button.addEventListener("click", ( )=>{
//     // alert("I was Clicked")
//     document.querySelector(".box").innerHTML = "<b>Yeah I was Clicked</b> Enjoy your click!" 
// })
button.addEventListener("dblclick", ( )=>{
    // alert("I was Clicked")
    document.querySelector(".box").innerHTML = "<b>Yeah I was Clicked</b> Enjoy your click!" 
})
button.addEventListener("contextmenu", ( )=>{
    // alert("I was Clicked")
    // document.querySelector(".box").innerHTML = "<b>Yeah I was Clicked</b> Enjoy your click!" 
    alert("Don't hack me by right clicking")
})
// button.addEventListener("keydown", (e)=>{
//     console.log(e); 
// })
buttodocument.addEventListener("keydown", (e)=>{
    // alert("Don't hack me by right clicking")
    console.log(e); 
})