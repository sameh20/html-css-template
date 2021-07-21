// function navbartoggle
var navbutton = document.querySelector(".nav-burger")
var navBar    = document.querySelector(".nav")
var navbuton  = document.querySelector(".navbutton")
navbutton.addEventListener("click",()=>{
    navbuton.classList.toggle("activenav")
    navBar.classList.toggle("activenav");
    navbutton.classList.toggle("nav-button");
})