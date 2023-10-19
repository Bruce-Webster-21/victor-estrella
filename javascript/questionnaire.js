function sendEmail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phone-number").value,
    dateOfBirth: document.getElementById("date-of-birth").value,
    instagramUsername: document.getElementById("instagram-username").value,
  }

  const serviceID = "service_bky2b85"
  const templateID = "template_sshk3cf"

  emailjs
  .send(serviceID, templateID, params)
  .then(
    res => {
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("phone-number").value = ""
      document.getElementById("date-of-birth").value = ""
      document.getElementById("instagram-username").value = ""
      console.log(res)
      alert("message working")
    })
    .catch(error => console.log(error))
}