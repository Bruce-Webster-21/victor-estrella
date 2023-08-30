const navIcon = document.getElementById("nav-icon1");
const navMenu = document.getElementById("nav-menu-mobile")
  
navIcon.addEventListener("click", function() {
  this.classList.toggle("open");
  navMenu.classList.toggle('translate')
});