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
    dateOfSurgery: document.getElementById("date-of-surgery").value,
    patientWants: patientWants(),
    typeSurgery: plasticSurgery(),
  }

  const serviceID = "service_bky2b85"
  const templateID = "template_sshk3cf"

  emailjs
  .send(serviceID, templateID, params)
  .then(
    res => {
      /*
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
      */
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

function patientWants() {
  let arr = [];
  let checkboxes = document.getElementsByName("patientWants")
  for (let i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      arr.push(" " + checkboxes[i].value);
    }
  } return arr;
}

function plasticSurgery() {
  let arr = [];
  let checkboxes = document.getElementsByName("plasticSurgeryOptions")
  for (let i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      arr.push(" "  + checkboxes[i].value);
    }
  } return arr;
}

function show() {
  imgUploadSection = document.getElementById("img-upload-section")

  if (imgUploadSection.style.display == "none") {
    imgUploadSection.style.display = "block"
  } else if (imgUploadSection.style.display == "block") {
    imgUploadSection.style.display = "none"
  } 
}

function showDental() {
  dentalImgUploadSection = document.getElementById("dental-img-upload-section")

  if (dentalImgUploadSection.style.display == "none") {
    dentalImgUploadSection.style.display = "block"
  } else if (dentalImgUploadSection.style.display == "block") {
    dentalImgUploadSection.style.display = "none"
  } 
}

function otherService() {
  input = document.getElementById("other-service")

  if (input.style.display == "none") {
    input.style.display = "block"
  } else if (input.style.display == "block") {
    input.style.display = "none"
  }
}