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
    otherServiceWanted: document.getElementById("other-service-input").value == "" ? "N/A" : document.getElementById("other-service-input").value,
    medicalConditions: medicalConditions(),
    otherMedicalCondition: document.getElementById("disabled-input").value == "" ? "N/A" : document.getElementById("disabled-input").value,
    patientSmokes: patientSmokes(),
    amountCigarette: document.getElementById("cigarettes-1").value == "" ? "N/A" : document.getElementById("cigarettes-1").value,
    amountMarijuana: document.getElementById("marijuana-1").value == "" ? "N/A" : document.getElementById("marijuana-1").value,
    otherDrugSmoked: document.getElementById("other-drug").value == "" ? "N/A" : document.getElementById("other-drug").value,
    takingMedicine: document.getElementById("medicine-input").value == "" ? "N/A" : "Si, " + document.getElementById("medicine-input").value,
    medicalTreatment: document.getElementById("medicine-input").value == "" ? "N/A" : "Si, " + document.getElementById("medicine-input").value,
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

function medicalConditions() {
  let arr = [];
  let checkboxes = document.getElementsByName("medicalconditions")
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      arr.push(" " + checkbox.value)
    }
  })
  return arr;
}

function ableInput() {
  input = document.getElementById("disabled-input")

  if (input.style.display == "none") {
    input.style.display = "block"
  }
}

function disableInput() {
  input = document.getElementById("disabled-input")

  if (input.style.display == "block") {
    input.style.display = "none"
  }
}

function patientSmokes() {
  let arr = []
  document.getElementsByName("patientSmokes").forEach(patientSmoke => {
    if (patientSmoke.checked) {
      arr.push(" " + patientSmoke.value)
    }
  }) 
  if (arr.length == 0) {
    return "N/A"
  }
}

function smokeAbleInput() {
  input = document.getElementById("smoke")

  if (input.style.display == "none") {
    input.style.display = "block"
  }
}

function smokeDisableInput() {
  input = document.getElementById("smoke")

  if (input.style.display == "block") {
    input.style.display = "none"
  }
}

function marijuanaPerDayAble() {
  input = document.getElementById("marijuanaPerDay")

  if (input.style.display == "none") {
    input.style.display = "block"
  } else if (input.style.display == "block") {
    input.style.display = "none"
  }
}

function cigarettesPerDayAble() {
  input = document.getElementById("cigarettesPerDay")

  if (input.style.display == "none") {
    input.style.display = "block"
  } else if (input.style.display == "block") {
    input.style.display = "none"
  }
}

function otherPerDayAble() {
  input = document.getElementById("otherPerDay")

  if (input.style.display == "none") {
    input.style.display = "block"
  } else if (input.style.display == "block") {
    input.style.display = "none"
  }
}

function medicineAbleInput() {
  input = document.getElementById("medicine-input")

  if (input.style.display == "none") {
    input.style.display = "block"
  }
}

function medicineDisableInput() {
  input = document.getElementById("medicine-input")

  if (input.style.display == "block") {
    input.style.display = "none"
  }
}

function medicationAbleInput() {
  input = document.getElementById("medication-input")

  if (input.style.display == "none") {
    input.style.display = "block"
  }
}

function medicationDisableInput() {
  input = document.getElementById("medication-input")

  if (input.style.display == "block") {
    input.style.display = "none"
  }
}