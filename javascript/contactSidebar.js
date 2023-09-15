const contactBtn = document.getElementById("contact-btn")
const contactBtn1 = document.getElementById("contact-btn-1")
const contactBtn2 = document.getElementById("contact-btn-2")
const contactSidebar = document.getElementById("contact-sidebar")

const contactBtns = [contactBtn, contactBtn1, contactBtn2]

contactBtns.forEach((btn) => {
  btn.addEventListener("click", function() {
    contactSidebar.style.translate = "100%"
  })
})

let prevScrollpos = window.scrollY;
window.onscroll = () => {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos != currentScrollPos) {
    contactSidebar.style.translate = "0%";
  }
  prevScrollpos = currentScrollPos;
}