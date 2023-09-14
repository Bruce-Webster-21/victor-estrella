const contactBtn = document.getElementById("contact-btn")
const contactSidebar = document.getElementById("contact-sidebar")

contactBtn.addEventListener("click", function() {
  contactSidebar.classList.toggle('show-contact-sidebar')
})