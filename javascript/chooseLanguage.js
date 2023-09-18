const eng = document.getElementById("english");
const spa = document.getElementById("spanish");

const firstMainTitle = document.getElementById("first-main-title");
const firstMainSubTitle = document.getElementById("first-main-sub-title");
const firstMainQuestionnaireBtn = document.getElementById("first-main-questionnaire-btn");
const firstMainContactBtn = document.getElementById("contact-btn-2");

const navMobileHome = document.getElementById("nav-mobile-home");
const navMobileAbout = document.getElementById("nav-mobile-about");
const navMobileContact = document.getElementById("contact-btn-1");
const navMobileQuestionnaireBtn = document.getElementById("nav-mobile-questionnaire-btn");

const websiteTxt = [
  {
    element: firstMainTitle,
    elementToStr: "firstmaintitle"
  }, 
  {
    element: firstMainSubTitle,
    elementToStr: "firstmainsubtitle"
  },
  {
    element: firstMainQuestionnaireBtn,
    elementToStr: "firstmainquestionnairebtn"
  },
  {
    element: firstMainContactBtn,
    elementToStr: "firstmaincontactbtn"
  },
  /*---------------------------------------*/
  {
    element: navMobileHome,
    elementToStr: "navMobileHome"
  }, 
  {
    element: navMobileAbout,
    elementToStr: "navMobileAbout"
  },
  {
    element: navMobileContact,
    elementToStr: "navMobileContact"
  },
  {
    element: navMobileQuestionnaireBtn,
    elementToStr: "navMobileQuestionnaireBtn"
  },
];

eng.addEventListener("click", () => {
  eng.classList.remove("not-active");
  spa.classList.add("not-active");

  const language = eng.getAttribute("language");
  websiteTxt.forEach(obj => {
    const str = obj.elementToStr
    obj.element.textContent = websiteData[language][str]
  })
});

spa.addEventListener("click", () => {
  eng.classList.add("not-active");
  spa.classList.remove("not-active");

  const language = spa.getAttribute("language");
  websiteTxt.forEach(obj => {
    const str = obj.elementToStr
    obj.element.textContent = websiteData[language][str]
  })
});

const websiteData = {
  english: {
    firstmaintitle: "Reconstructive & Plastic Surgery",
    firstmainsubtitle: '"Improving your quality of life is my vocation"',
    firstmainquestionnairebtn: "Take the Questionnaire",
    firstmaincontactbtn: "Contact",
    /*----------------------------------------------------------*/
    navMobileHome: "Home",
    navMobileAbout: 'About',
    navMobileContact: "Contact",
    navMobileQuestionnaireBtn: "Take the Questionnaire"
  },
  spanish: {
    firstmaintitle: "Cirugía Plástica & Reconstructiva",
    firstmainsubtitle: '"Mejorar tu calidad de vida es mi vocación"',
    firstmainquestionnairebtn: "Tomar Cuestionario",
    firstmaincontactbtn: "Contacto",
    /*----------------------------------------------------------*/
    navMobileHome: "Incio",
    navMobileAbout: 'Sobre',
    navMobileContact: "Contacto",
    navMobileQuestionnaireBtn: "Tomar Cuestionario"
  },
};
