//-------------------------------------------------------------------------------------------------------
// EMAIL
//------------------------------------------------------------------------------------------------------- 

function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "beautyconsultingelastic@gmail.com",
    Password : "DCF5CAB08F4DC01E9D6AFA1820F8065D85F5",
    To : 'beautyconsultinginc@gmail.com',
    From : 'beautyconsultinginc@gmail.com',
    Subject : " Sunshine medical Tourism Health Questionnaire",
    Body : "<br> <b> Patient wants the 0$ PACKAGE</b>"
    + "<br> <br>"
    + "<hr>"

    + "<b>Name:</b>   " + document.getElementById("name").value
    + "<br>"
    + "<hr>"

    + "<b>Email Address:</b>   " + document.getElementById("email").value
    + "<br>"
    + "<hr>"

    + "<b>Phone Number:</b>   " + document.getElementById("phone-number").value
    + "<br>"
    + "<hr>"

    + "<b>Date Of Birth:</b>   " + document.getElementById("date-of-birth").value
    + "<br>"
    + "<hr>"
    
    + "<b>Instagram Username:</b>   " + document.getElementById("instagram-username").value
    + "<br>"
    + "<hr>"

    + "<b>Height:</b>   " + document.getElementById("height").value
    + "<br>"
    + "<hr>"

    + "<b>Weight:</b>   " + document.getElementById("weight").value
    + "<br>"
    + "<hr>"

    + "<b>Sex:</b>   " + maleOrFemale()
    + "<br>"
    + "<hr>"

    + "<b>Desired date of surgery:</b>   " + document.getElementById("date-of-surgery").value
    + "<br>"
    + "<hr>"

    + "<b>Patient wants:</b>   " + patientWants() + "<br>" + document.getElementById("other-service-input").value
    + "<br> <b>Kind of Plastic Surgery:</b>   " + plasticSurgery()
    + "<br>"
    + "<hr>"

    + "<b>Does the patient want to be evaluated by a specific doctor?</b><br>  " + yesOrNo() + "<br><b>Patient wants: </b> " + document.getElementById("doctor-input").value
    + "<br>"
    + "<hr>"

    + "<b>Patient's Medical conditions:</b>  " + medicalConditions()
    + "<br>"
    + "<hr>"

    + "<b>Does the patient have any other condition not mentioned?</b><br>  " + conditionYesNo() + "<br><b>Patient has: </b> " + document.getElementById("disabled-input").value
    + "<br>"
    + "<hr>"

    + "<b>Does the patient smoke?</b><br>  " + smokeYesNo() + "<br>" +  smokeCigarette() + " - How many per day? - " + document.getElementById("cigarettes-1").value + "<br>" +  smokeMarijuana() + " - How much per day? - " + document.getElementById("marijuana-1").value + " <br> - Which other drug? - " + document.getElementById("other-drug").value
    + "<br>"
    + "<hr>"

    + "<b>Is the patient currently on any medication?</b><br>  " + medicationYesNo() + "<br><b>Patient is currently taking: </b> " + document.getElementById("medicine-input").value
    + "<br>"
    + "<hr>"

    + "<b>Has the patient been under any medical treatment?</b><br>  " + treatmentYesNo() + "<br><b>Patient has received: </b> " + document.getElementById("medication-input").value
    + "<br>"
    + "<hr>"

    + "<b>Is The patient a cancer survivor?</b><br>  " + cancerYesOrNo()
    + "<br>"
    + "<hr>"

    + "<b>Does the patient know if she heals with keloid?</b><br>  " + keloidYesNo()
    + "<br>"
    + "<hr>"

    + "<b>Does the patient have silicone shots in his/her buttocks?</b><br>  " + siliconYesNo()
    + "<br>"
    + "<hr>"

    + "<b>Has the patient had COVID-19 in the last 6 months?</b><br>  " + covidYesNo()
    + "<br>"

  }); 
}

//-------------------------------------------------------------------------------------------------------
// QUESTIONNAIRE INTERACTIVITY
//------------------------------------------------------------------------------------------------------- 

function thankYouShow() {
  let thankYou = document.getElementById('thank-you');
  let loaderContainer = document.getElementById("loaderContainer")

  thankYou.style.display = "block"
  loaderContainer.style.display = "none"
}

function otherService() {
  input = document.getElementById("other-service")

  if (input.style.display == "none") {
    input.style.display = "block"
  } else if (input.style.display == "block") {
    input.style.display = "none"
  }
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

function otherPerDayAble() {
  input = document.getElementById("otherPerDay")

  if (input.style.display == "none") {
    input.style.display = "block"
  } else if (input.style.display == "block") {
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

function doctorAbleInput() {
  input = document.getElementById("doctor-input")

  if (input.style.display == "none") {
    input.style.display = "block"
  }
}

function doctorDisableInput() {
  input = document.getElementById("doctor-input")

  if (input.style.display == "block") {
    input.style.display = "none"
  }
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

//-------------------------------------------------------------------------------------------------------
// EMAIL RESPONSES
//------------------------------------------------------------------------------------------------------- 

function patientWants() {
  let arr = [];
  let checkboxes = document.getElementsByName("patientWants")
  for (let i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      arr.push("<br>" + checkboxes[i].value);
    }
  } return arr;
}

function plasticSurgery() {
  let arr = [];
  let checkboxes = document.getElementsByName("plasticSurgeryOptions")
  for (let i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      arr.push("<br>" + checkboxes[i].value);
    }
  } return arr;
}

function medicalConditions() {
  let arr = [];
  let checkboxes = document.getElementsByName("medicalconditions")
  for(let i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      arr.push("<br>" + checkboxes[i].value);
    }
  } return arr;
}

function maleOrFemale() {
  male = document.getElementById("male")

  if(male.checked) {
    return 'Male'
  } else {
    return 'Female'
  }
}

function yesOrNo() {
  yes = document.getElementById("yes")

  if(yes.checked) {
    return 'Yes'
  } else {
    return 'No'
  }
}

function smokeYesNo() {
  smokeYes = document.getElementById("smoke-yes")

  if(smokeYes.checked) {
    return 'Yes'
  } else {
    return 'No'
  }
}

function conditionYesNo() {
  conditionYes = document.getElementById("condition-yes")

  if(conditionYes.checked) {
    return 'Yes'
  } else {
    return 'No'
  }
}

function medicationYesNo() {
  medicationYes = document.getElementById("medication-yes")

  if(medicationYes.checked) {
    return 'Yes'
  } else {
    return 'No'
  }
}

function treatmentYesNo() {
  treatmentYes = document.getElementById("treatment-yes")

  if(treatmentYes.checked) {
    return 'Yes'
  } else {
    return 'No'
  }
}

function cancerYesOrNo() {
  cancerYes = document.getElementById("cancer-yes")

  if(cancerYes.checked) {
    return 'Yes'
  } else {
    return 'No'
  }
}

function keloidYesNo() {
  keloidYes = document.getElementById("keloid-yes")

  if(keloidYes.checked) {
    return 'Yes'
  } else {
    return 'No'
  }
}

function siliconYesNo() {
  siliconYes = document.getElementById("silicon-yes")

  if(siliconYes.checked) {
    return 'Yes'
  } else {
    return 'No'
  }
}

function covidYesNo() {
  covidYes = document.getElementById("covid-yes")

  if(covidYes.checked) {
    return 'Yes'
  } else {
    return 'No'
  }
}

function smokeCigarette() {
  drug = document.getElementById("cigarettes")

  if (drug.checked) {
    return "Patient smokes Cigarettes"
  }
}

function smokeMarijuana() {
  drug = document.getElementById("marijuana")

  if (drug.checked) {
    return "Patient smokes Marijuana"
  }
}