/* HIGHLIGHT CURRENT SECTION IN NAVIGATION BAR */
/* const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .nav-menu .nav-item a");

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
});*/

/* ONE PAGE SCROLL */
const content = document.querySelectorAll('section');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const navLi = document.querySelectorAll(".navbar .nav-menu .nav-item a");
const idlePeriod = 100;
const animationDuration = 1000;

let lastAnimation = 0;
let index = 0;

const toggleText = (index, state) => {
  if (state === 'show') {
    content[index].querySelector('.text').classList.add('show');  
  } else {
    content[index].querySelector('.text').classList.remove('show');  
  } 

  navBarClass(index);
}

const navBarClass = (index) => {
	let section; 
	switch(index){
		case 0:
			section = 'home';
			break;
		case 1:
			section = 'about';
			break;
		case 2:
			section = 'projects';
			break;
		case 3:
			section = 'contact';
			break;
	}
	navLi.forEach((li) => {
		li.classList.remove("active");
		if (li.classList.contains(section)) {
			li.classList.add("active");
		}
	});
}

toggleText(0, 'show');

prev.addEventListener('click', () => {
  if (index < 1) return;
  toggleText(index, 'hide');
  index--;
  
  content.forEach((section, i) => {
    if (i === index) {
      toggleText(i, 'show');
      section.scrollIntoView({behavior: "smooth"});
    }
  });
})

next.addEventListener('click', () => {
  if (index > 2) return;

  toggleText(index, 'hide');
  index++;
  content.forEach((section, i) => {
    if (i === index) {
      toggleText(i, 'show');
      section.scrollIntoView({behavior: "smooth"});
    }
  })
})

home.addEventListener('click', () => {
	index = 0;
	toggleText(index, 'show');
})

about.addEventListener('click', () => {
	index = 1;
	toggleText(index, 'show');
})

projects.addEventListener('click', () => {
	index = 2;
	toggleText(index, 'show');
})

contact.addEventListener('click', () => {
	index = 3;
	toggleText(index, 'show');
})


document.addEventListener('wheel', event => {
  var delta = event.deltaY;
  var timeNow = new Date().getTime();
  // Cancel scroll if currently animating or within quiet period
  if(timeNow - lastAnimation < idlePeriod + animationDuration) {
    event.preventDefault();
    return;
  }
  
  if (delta > 0) {
    var event = new Event('click');
    next.dispatchEvent(event);
  } else {
    var event = new Event('click');
    prev.dispatchEvent(event);
  }
  
  lastAnimation = timeNow;
}, {passive: false}); 
