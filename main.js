const name = document.querySelector(".container-info h2")
const body = document.querySelector("body")
const anchor = document.querySelectorAll("a")
const anchorLink = document.querySelectorAll("a")
const anchorVisted = document.querySelectorAll("a")

function changeBg(){
    let randomBg = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(randomBg)
    body.style.backgroundColor = randomBg;
    name.style.color = randomBg;
    anchor.forEach(a=>{
            a.style.backgroundColor = randomBg; 
    });
    this.style.backgroundColor = randomBg
}

document.querySelector('button').addEventListener("click", changeBg)