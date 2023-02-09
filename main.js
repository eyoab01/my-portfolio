
const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburger-close");
const navMenu = document.querySelector(".hidden-menu");
const navLinks = document.querySelectorAll(".hidden-list");

hamburgerClose.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach((ele) => ele.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}));


