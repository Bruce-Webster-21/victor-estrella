const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById('nav-menu-mobile')
const body = document.getElementById('body')
  
hamburger.addEventListener("click", function() {
  this.classList.toggle("open");
  navMenu.classList.toggle("translate")
  body.classList.toggle("no-scroll")
});