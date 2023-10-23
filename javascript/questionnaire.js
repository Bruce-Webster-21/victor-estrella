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
    patientWants: checkboxLoop("patientWants"),
    typeSurgery: checkboxLoop("plasticSurgeryOptions"),
    otherServiceWanted: document.getElementById("other-service-input").value == "" ? "N/A" : document.getElementById("other-service-input").value,
    medicalConditions: checkboxLoop("medicalconditions"),
    otherMedicalCondition: document.getElementById("disabled-input").value == "" ? "N/A" : document.getElementById("disabled-input").value,
    patientSmokes: checkboxLoop("patientSmokes"),
    amountCigarette: document.getElementById("cigarettes-1").value == "" ? "N/A" : document.getElementById("cigarettes-1").value,
    amountMarijuana: document.getElementById("marijuana-1").value == "" ? "N/A" : document.getElementById("marijuana-1").value,
    otherDrugSmoked: document.getElementById("other-drug").value == "" ? "N/A" : document.getElementById("other-drug").value,
    takingMedicine: document.getElementById("medicine-input").value == "" ? "N/A" : "Si, " + document.getElementById("medicine-input").value,
    medicalTreatment: document.getElementById("medication-input").value == "" ? "N/A" : "Si, " + document.getElementById("medication-input").value,
    cancer: document.getElementById("cancer-yes").checked ? "Si" : "No",
    keloid: document.getElementById("keloid-yes").checked ? "Si" : "No",
    silicon: document.getElementById("silicon-yes").checked ? "Si" : "No",
    covid: document.getElementById("covid-yes").checked ? "Si" : "No",
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

function show(id) {
  input = document.getElementById(id)

  if (input.style.display == "none") {
    input.style.display = "block"
  } else if (input.style.display == "block") {
    input.style.display = "none"
  } 
}

function activate(id) {
  input = document.getElementById(id)

  if (input.style.display == "none") {
    input.style.display = "block"
  }
}

function disable(id) {
  input = document.getElementById(id)

  if (input.style.display == "block") {
    input.style.display = "none"
  }
}

function checkboxLoop(elements) {
  let arr = [];
  let checkboxes = document.getElementsByName(elements)
  for (let i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      arr.push(" " + checkboxes[i].value);
    }
  } 
  if (arr.length == 0) {
    return "N/A"
  } else return arr;
}

