function createCard(title,cname,views,monthsold,duration,thumbnail){
    //Finish
    // let viewsNumber = this Function
    let viewsStr=0;
    if(views<1000000){
        viewsStr = views/1000 + "K"
    }
    else if(views>=1000000){
        viewsStr = views/1000 + "M"
    }
   
    let html = `<div class="container">
        <div class="card">
            <div class="image">
                <img src=${thumbnail} alt="">
                <div class="capsule">
                    ${duration}
                </div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${viewsStr} views . ${monthsold} months ago</p>
            </div>
        </div>
    </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    // document.querySelector(".container").insertAdjacentHTML("beforeend", html);
}

createCard("Intro to Backend | Sigma Web Dev #2", "CodeWithHarry", 560000, 7, "15:38","thumbnail.avif")
createCard("Intro to Backend | Sigma Web Dev #3", "CodeWithHarry", 350000, 3, "21:56","thumbnail.avif")
createCard("Intro to Backend | Sigma Web Dev #4", "CodeWithHarry", 750000, 4, "13:02","thumbnail.avif")