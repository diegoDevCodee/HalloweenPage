const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((item) => item.addEventListener("click", linkAction));

// ScrollReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 150,
  reset: true,
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {
  interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });

// SWIPER

let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 16,
});

// SCROLL UP

function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 460) {
    scrollup.classList.add("show-scroll");
  } else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// SECTIONS ACTIVE

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((items) => {
    const sectionHeight = items.offsetHeight,
      sectionTop = items.offsetTop - 58,
      sectionId = items.getAttribute("id");
      if(scrollY>sectionTop && scrollY<= sectionTop + sectionHeight){
        document.querySelector(".nav__menu a[href*="+ sectionId+"]").classList.add("active-link")
      } else {
        document.querySelector(".nav__menu a[href*="+ sectionId+"]").classList.remove("active-link")
      }
  });
}
window.addEventListener("scroll", scrollActive)