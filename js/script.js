/* BURGER MENU */
const hamburger = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


/* HIGHLIGHT CURRENT SECTION IN NAVIGATION BAR */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .nav-menu .nav-item a");

console.log(navLi);
window.addEventListener("scroll", () => {
	let current = "";
	
    sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
	  console.log(current);
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
        li.classList.add("active");
    }
  });
});

  