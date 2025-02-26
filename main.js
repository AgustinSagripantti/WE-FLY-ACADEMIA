//VARIABLES
let navbar = document.getElementById("navbar");
const text = "TU CARRERA AERONAUTICA EN TIEMPO RECORD";
const speed = 150; 
let index = 0;
let isDeleting = false;
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const bodyOverlay = document.querySelector(".body-overlay");

//MENU
window.addEventListener("scroll", function () {
  if (window.innerWidth > 992) {
    if (window.scrollY > 0) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-white", "shadow");
    } else {
      navbar.classList.remove("bg-white", "shadow");
      navbar.classList.add("bg-transparent");
    }
  }
});

if (window.innerWidth < 992) {
  navbar.classList.remove("bg-transparent");
  navbar.classList.add("bg-white", "shadow");
}

function changeActiveLink() {
  let scrollY = window.scrollY + 100; 
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      if(scrollY>100){
        document.querySelector(`.nav-link[href="#${section.id}"]`).classList.add("active");
      }
                
    }
  });
}
window.addEventListener("scroll", changeActiveLink);

document.querySelector(".navbar-toggler").addEventListener("click", function() {
  bodyOverlay.classList.toggle("active"); // Muestra u oculta el fondo opaco
});

//CARRUSEL
function typeEffect() {
  const typingElement = document.getElementById("typing-text");

  if (!isDeleting) {
    typingElement.textContent = text.slice(0, index++);
  } 
    
  if (index > text.length) {
    isDeleting = true;
  } else {
    setTimeout(typeEffect, speed);
  }
}
typeEffect();