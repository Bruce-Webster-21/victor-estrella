const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById('nav-mobile-container')
const body = document.getElementById('body')
  
hamburger.addEventListener("click", function() {
  this.classList.toggle("open");
  navMenu.classList.toggle("translate")
  body.classList.toggle("no-scroll")
});

navMenu.addEventListener("click", function() {
  this.classList.toggle("translate")
  hamburger.classList.toggle("open");
  body.classList.toggle("no-scroll")
})