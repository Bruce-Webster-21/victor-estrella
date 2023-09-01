const hamburger = document.getElementById("hamburger-menu");
const page = document.getElementById('page')
  
hamburger.addEventListener("click", function() {
  this.classList.toggle("open");
  page.classList.toggle('page-translate')
});