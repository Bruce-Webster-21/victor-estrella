function sendEmail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phone-number").value,
    dateOfBirth: document.getElementById("date-of-birth").value,
    instagramUsername: document.getElementById("instagram-username").value,
    height: document.getElementById("height").value,
    weight: document.getElementById("weight").value,
    sex: maleOrFemale(),
    dateOfSurgery: document.getElementById("date-of-surgery").value
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
      document.getElementById("height").value = ""
      document.getElementById("weight").value = ""
      document.querySelectorAll(".radio-input").forEach((input) => {
        input.checked = false
      })
      document.getElementById("date-of-surgery").value = ""
      console.log(res)
      alert("Message Sent")
    })
    .catch(error => console.log(error))
}

function maleOrFemale() {
  male = document.getElementById("male")
  if(male.checked) {
    return 'Macho'
  } else {
    return 'Hembra'
  }
}