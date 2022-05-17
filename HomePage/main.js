var menuBtn = document.querySelector("#content .navbar .nav-left");
var menuNav = document.querySelector("#menu");
var btnClose = document.querySelector(".icon-menu-close");
var mainContent = document.querySelector("#content");

menuBtn.onclick = function(e) {
    menuNav.classList.add("open");
    menuNav.classList.remove("close-nav");
}

btnClose.onclick = function(e) {
    menuNav.classList.remove("open");
    menuNav.classList.add("close-nav");
}