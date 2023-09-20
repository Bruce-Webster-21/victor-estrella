const eng = document.getElementById("english");
const spa = document.getElementById("spanish");

const firstMainTitle = document.getElementById("first-main-title");
const firstMainSubTitle = document.getElementById("first-main-sub-title");
const firstMainQuestionnaireBtn = document.getElementById(
  "first-main-questionnaire-btn"
);
const firstMainContactBtn = document.getElementById("contact-btn-2");

const navMobileHome = document.getElementById("nav-mobile-home");
const navMobileAbout = document.getElementById("nav-mobile-about");
const navMobileContact = document.getElementById("contact-btn-1");
const navMobileQuestionnaireBtn = document.getElementById(
  "nav-mobile-questionnaire-btn"
);

const navHome = document.getElementById("nav-home");
const navAbout = document.getElementById("nav-about");
const navContact = document.getElementById("contact-btn");
const navQuestionnaireBtn = document.getElementById("nav-questionnaire-btn");

const procedures = document.getElementById("procedures");
const face = document.getElementById("face");
const faceP = document.getElementById("face-p");
const body1 = document.getElementById("body-1");
const bodyP = document.getElementById("body-p");
const breast = document.getElementById("breast");
const breastP = document.getElementById("breast-p");
const arm = document.getElementById("arm");
const armP = document.getElementById("arm-p");
const buttocks = document.getElementById("buttocks");
const buttocksP = document.getElementById("buttocks-p");
const other = document.getElementById("other");
const otherP = document.getElementById("other-p");

const websiteTxt = [
  {
    element: firstMainTitle,
    elementToStr: "firstmaintitle",
  },
  {
    element: firstMainSubTitle,
    elementToStr: "firstmainsubtitle",
  },
  {
    element: firstMainQuestionnaireBtn,
    elementToStr: "firstmainquestionnairebtn",
  },
  {
    element: firstMainContactBtn,
    elementToStr: "firstmaincontactbtn",
  },
  /*---------------------------------------*/
  {
    element: navMobileHome,
    elementToStr: "navMobileHome",
  },
  {
    element: navMobileAbout,
    elementToStr: "navMobileAbout",
  },
  {
    element: navMobileContact,
    elementToStr: "navMobileContact",
  },
  {
    element: navMobileQuestionnaireBtn,
    elementToStr: "navMobileQuestionnaireBtn",
  },
  /*---------------------------------------*/
  {
    element: navHome,
    elementToStr: "navHome",
  },
  {
    element: navAbout,
    elementToStr: "navAbout",
  },
  {
    element: navContact,
    elementToStr: "navContact",
  },
  {
    element: navQuestionnaireBtn,
    elementToStr: "navQuestionnaireBtn",
  },
  /*---------------------------------------*/
  {
    element: procedures,
    elementToStr: "procedures",
  },
  /*---------------------------------------*/
  {
    element: face,
    elementToStr: "face",
  },
  {
    element: faceP,
    elementToStr: "faceP",
  },
  /*---------------------------------------*/
  {
    element: body1,
    elementToStr: "body",
  },
  {
    element: bodyP,
    elementToStr: "bodyP",
  },
  /*---------------------------------------*/
  {
    element: breast,
    elementToStr: "breast",
  },
  {
    element: breastP,
    elementToStr: "breastP",
  },
  /*---------------------------------------*/
  {
    element: arm,
    elementToStr: "arm",
  },
  {
    element: armP,
    elementToStr: "armP",
  },
  /*---------------------------------------*/
  {
    element: buttocks,
    elementToStr: "buttocks",
  },
  {
    element: buttocksP,
    elementToStr: "buttocksP",
  },
  /*---------------------------------------*/
  {
    element: other,
    elementToStr: "other",
  },
  {
    element: otherP,
    elementToStr: "otherP",
  },
];

eng.addEventListener("click", () => {
  eng.classList.remove("not-active");
  spa.classList.add("not-active");

  const language = eng.getAttribute("language");

  websiteTxt.forEach((obj) => {
    const str = obj.elementToStr;
    obj.element.innerHTML = websiteData[language][str];
  });
});

spa.addEventListener("click", () => {
  eng.classList.add("not-active");
  spa.classList.remove("not-active");

  const language = spa.getAttribute("language");

  websiteTxt.forEach((obj) => {
    const str = obj.elementToStr;
    obj.element.innerHTML = websiteData[language][str];
  });
});

const websiteData = {
  english: {
    firstmaintitle: "Reconstructive & Plastic Surgery",
    firstmainsubtitle: '"Improving your quality of life is my vocation"',
    firstmainquestionnairebtn: "Take the Questionnaire",
    firstmaincontactbtn: "Contact",
    /*----------------------------------------------------------*/
    navMobileHome: "Home",
    navMobileAbout: "About",
    navMobileContact: "Contact",
    navMobileQuestionnaireBtn: "Take the Questionnaire",
    /*----------------------------------------------------------*/
    navHome: "Home",
    navAbout: "About",
    navContact: "Contact",
    navQuestionnaireBtn: "Take the Questionnaire",
    /*----------------------------------------------------------*/
    procedures: "Procedures",
    /*----------------------------------------------------------*/
    face: "Face",
    faceP:
      "We are here to help you attain your desired look, whether you want to rejuvenate your eyes with blepharoplasty (eyelid surgery), enhance your nose with rhinoplasty, or revitalize your face with a facelift.",
    /*----------------------------------------------------------*/
    body: "Body",
    bodyP:
      "Liposculpture or also known as liposuction is done to enhance the appearance of your thighs, buttocks, or abdomen, or contemplating abdominoplasty for a firmer, flatter belly, we're here to help you achieve your desired results.",
    /*----------------------------------------------------------*/
    breast: "Breast",
    breastP:
      "We provide a range of surgical procedures to enhance breast aesthetics, including breast augmentation, breast reduction for both women and men, breast lift, and breast reconstruction.",
    /*----------------------------------------------------------*/
    arm: "Arm",
    armP: "Referred to as an arm lift, this surgical procedure addresses the removal of excess skin from the upper arms. This condition is frequently attributed to significant weight loss (particularly after bariatric surgery), genetic factors, or the natural aging process.",
    /*----------------------------------------------------------*/
    buttocks: "Buttocks",
    buttocksP:
      "A buttock lift enhances size and definition by removing excess fat through liposuction. Surgeons skillfully use this harvested fat to sculpt and enhance buttock shape and volume, achieving a harmonious appearance in line with beauty standards for this area.",
    /*----------------------------------------------------------*/
    other: "Other",
    otherP:
      "You also have the option to undergo non-surgical treatments for facial rejuvenation. Botox is the injectable medical-aesthetic treatment we utilize to effectively combat wrinkles and diminish the signs of aging.",
  },
  spanish: {
    firstmaintitle: "Cirugía Plástica & Reconstructiva",
    firstmainsubtitle: '"Mejorar tu calidad de vida es mi vocación"',
    firstmainquestionnairebtn: "Tomar Cuestionario",
    firstmaincontactbtn: "Contacto",
    /*----------------------------------------------------------*/
    navMobileHome: "Incio",
    navMobileAbout: "Sobre",
    navMobileContact: "Contacto",
    navMobileQuestionnaireBtn: "Tomar Cuestionario",
    /*----------------------------------------------------------*/
    navHome: "Incio",
    navAbout: "Sobre",
    navContact: "Contacto",
    navQuestionnaireBtn: "Tomar Cuestionario",
    /*----------------------------------------------------------*/
    procedures: "Procedimientos",
    /*----------------------------------------------------------*/
    face: "Rostro",
    faceP:
      "Estamos aquí para ayudarle a lograr el aspecto que desea, ya sea que desee rejuvenecer sus ojos con una blefaroplastia (cirugía de párpados), mejorar su nariz con una rinoplastia o revitalizar su rostro con un lifting facial.",
    /*----------------------------------------------------------*/
    body: "Cuerpo",
    bodyP:
      "La lipoescultura o también conocida como liposucción se realiza para mejorar la apariencia de tus muslos, glúteos o abdomen, o contemplando la abdominoplastia para un vientre más firme y plano, estamos aquí para ayudarte a lograr los resultados deseados.",
    /*----------------------------------------------------------*/
    breast: "Seno",
    breastP:
      "Ofrecemos una variedad de procedimientos quirúrgicos para mejorar la estética de los senos, incluido el aumento de senos, la reducción de senos tanto para mujeres como para hombres, el levantamiento de senos y la reconstrucción de senos.",
    /*----------------------------------------------------------*/
    arm: "Brazo",
    armP: "Conocido como lifting de brazos, este procedimiento quirúrgico aborda la eliminación del exceso de piel de la parte superior de los brazos. Esta condición se atribuye frecuentemente a una pérdida de peso significativa (particularmente después de una cirugía bariátrica), factores genéticos o el proceso natural de envejecimiento.",
    /*----------------------------------------------------------*/
    buttocks: "Nalgas",
    buttocksP:
      "Un levantamiento de glúteos mejora el tamaño y la definición al eliminar el exceso de grasa mediante liposucción. Los cirujanos utilizan hábilmente esta grasa recolectada para esculpir y realzar la forma y el volumen de los glúteos, logrando una apariencia armoniosa acorde con los estándares de belleza de esta zona.",
    /*----------------------------------------------------------*/
    other: "Otros",
    otherP:
      "También tienes la opción de someterte a tratamientos no quirúrgicos de rejuvenecimiento facial. El Botox es el tratamiento médico-estético inyectable que utilizamos para combatir eficazmente las arrugas y disminuir los signos del envejecimiento.",
  },
};
