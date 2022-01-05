/* BURGER MENU */
const hamburger = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function() {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
}

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}