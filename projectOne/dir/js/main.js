const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menu_nav = document.querySelector(".menu-nav");
const Mnavitem = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu (){
    if(!showMenu){
        burger.classList.add("open");
        nav.classList.add("open");
        menu_nav.classList.add("open");
        Mnavitem.forEach(item => item.classList.add("open"))

        showMenu = true
    }else {
        burger.classList.remove("open");
        nav.classList.remove("open");
        menu_nav.classList.remove("open");

        Mnavitem.forEach(item => item.classList.remove("open"))
        showMenu =false;
    }
}
