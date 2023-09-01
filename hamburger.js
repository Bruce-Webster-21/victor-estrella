const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById('nav-menu-mobile')
  
hamburger.addEventListener("click", function() {
  this.classList.toggle("open");
  navMenu.classList.toggle("translate")
});