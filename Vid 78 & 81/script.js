
const addItem = async(item)=>{
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}

const randomDelay = ()=>{
    return new Promise((resolve,reject)=>{
        //getting a random number netween 'a' and 'b' a+b*Math.random()
        let timeout = 1 + 6 * Math.random();
        setTimeout(()=>{
            resolve();
        },timeout*1000)
    })
}
async function main() {

    let t = setInterval(()=>{
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length - 3);
        }
        else{
            last.innerHTML = last.innerHTML + "."
        }
    
    },100)

    let text = [
        "Initialized hacking now reading your data",
        "Reading your files",
        "Password files detected",
        "Sending all passwords and personal files to the server",
        "Cleaning up",
    ];
    
    for (const item of text) {
        await addItem(item);
    }

    await randomDelay();
    clearInterval(t);
}
main();

