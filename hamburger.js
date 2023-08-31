const navIcon = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu-mobile")
  
navIcon.addEventListener("click", function() {
  this.classList.toggle("open");
  navMenu.classList.toggle('translate')
});