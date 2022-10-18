let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

let redOn = document.querySelector(".red-on");
let yellowOn = document.querySelector(".yellow-on");
let greenOn = document.querySelector(".green-on");
let turnOff = document.querySelector(".turn-off");

function lightRed (){
    green.classList.add("off")
    yellow.classList.add("off")
    red.classList.remove("off")
}
function lightYellow (){
    green.classList.add("off")
    red.classList.add("off")
    yellow.classList.remove("off")
}
function lightGreen (){
    red.classList.add("off")
    yellow.classList.add("off")
    green.classList.remove("off")
}
function lightOff (){
    red.classList.add("off")
    yellow.classList.add("off")
    green.classList.add("off")
}

redOn.addEventListener("click", function(){
    lightRed()
})
yellowOn.addEventListener("click", function(){
    lightYellow()
})
greenOn.addEventListener("click", function(){
    lightGreen()
})
turnOff.addEventListener("click", function(){
    lightOff()
})