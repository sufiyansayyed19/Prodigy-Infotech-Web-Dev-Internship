const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
menuBtn.addEventListener("click", ()=>{
    header.classList.toggle("show-menu");
});
closeBtn.addEventListener("click",()=> {
    menuBtn.click();
});

document.addEventListener('DOMContentLoaded', function() {
var nav = document.querySelector('header');
window.addEventListener('scroll', function() {
if (window.pageYOffset > nav.offsetHeight) {
    nav.classList.add('scrolled');
} else {
    nav.classList.remove('scrolled');
}});
});