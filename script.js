//menu bar and searchbar js
const menu = document.querySelector(".navbar-menu");
const menuBtn = document.querySelector("#mobile-menu");
const menuItem = document.querySelectorAll(".navbar-menu-links");
const searchBar = document.querySelector(".navbar-search-container");
const searchBtn = document.querySelector("#search-logo");
const navLogo = document.querySelector(".navbar-logo");

menuBtn.onclick = ()=>{
    menuBtn.classList.toggle("is-active");
    menu.classList.toggle("active");
    searchBar.classList.remove("active");
}

menuItem.forEach((button)=>button.onclick = ()=>{
        menu.classList.remove("active");
        menuBtn.classList.remove("is-active");
    })

searchBtn.onclick = ()=>{
    searchBar.classList.toggle("active");
    menu.classList.remove("active");
    menuBtn.classList.remove("is-active");
}

navLogo.onclick = ()=>{
    searchBar.classList.remove("active");
    menu.classList.remove("active");
    menuBtn.classList.remove("is-active");
}

//frozen scrollbar js code
const homeCircle = document.querySelectorAll(".home-circle");
let activeHomeCircle = 0;

function homeCircleIncrease(){
    homeCircle[activeHomeCircle].className = "home-circle";
    activeHomeCircle++;
    if(activeHomeCircle > 3){
        activeHomeCircle = 0;
    }
    let currentHomeCircle = homeCircle[activeHomeCircle];
    currentHomeCircle.classList.add(currentHomeCircle.getAttribute("color"))
}

//frozen picture change code
const homeWrapper = document.querySelectorAll(".home-container-wrapper");
let activeWrapper = 0;

function wrapperIncrease(){
    homeWrapper[activeWrapper].className = "home-container-wrapper";
    activeWrapper++;
    if(activeWrapper > 3){
        activeWrapper = 0;
    }
    let currentWrapper = homeWrapper[activeWrapper];
    currentWrapper.classList.add(currentWrapper.getAttribute("data-element"))
}

setInterval(()=>{
    wrapperIncrease();
    homeCircleIncrease();
},3000)