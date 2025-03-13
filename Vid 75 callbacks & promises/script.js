console.log("Abhishek is Hacker")
console.log("Rohan is Hecker")

setTimeout(() => {
    console.log("I am inside Timeout")
}, 0);
// setTimeout(() => {
//     console.log("I am inside Timeout")
// }, 2000);

console.log("The end")

const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback,) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = ()=>callback("Abhishek")
    document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
