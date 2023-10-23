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

const aboutP1 = document.getElementById("about-p-1")
const aboutP2 = document.getElementById("about-p-2")
const aboutP3 = document.getElementById("about-p-3")

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
  /*---------------------------------------*/
  {
    element: aboutP1,
    elementToStr: "aboutP1",
  },
  {
    element: aboutP2,
    elementToStr: "aboutP2",
  },
  {
    element: aboutP3,
    elementToStr: "aboutP3",
  },
];

const eng = document.getElementById("english");
const spa = document.getElementById("spanish");
const fre = document.getElementById("french");
const por = document.getElementById("portuguese");

eng.addEventListener("click", () => {
  eng.classList.remove("not-active");
  spa.classList.add("not-active");
  fre.classList.add("not-active");
  por.classList.add("not-active");

  const language = eng.getAttribute("language");

  websiteTxt.forEach((obj) => {
    const str = obj.elementToStr;
    obj.element.innerHTML = websiteData[language][str];
  });
});

spa.addEventListener("click", () => {
  eng.classList.add("not-active");
  spa.classList.remove("not-active");
  fre.classList.add("not-active");
  por.classList.add("not-active");

  const language = spa.getAttribute("language");

  websiteTxt.forEach((obj) => {
    const str = obj.elementToStr;
    obj.element.innerHTML = websiteData[language][str];
  });
});

fre.addEventListener("click", () => {
  eng.classList.add("not-active");
  spa.classList.add("not-active");
  fre.classList.remove("not-active");
  por.classList.add("not-active");

  const language = fre.getAttribute("language");

  websiteTxt.forEach((obj) => {
    const str = obj.elementToStr;
    obj.element.innerHTML = websiteData[language][str];
  });
});

por.addEventListener("click", () => {
  eng.classList.add("not-active");
  spa.classList.add("not-active");
  fre.classList.add("not-active");
  por.classList.remove("not-active");

  const language = por.getAttribute("language");

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
    /*----------------------------------------------------------*/
    aboutP1: "Dr. Victor Rabiere Estrella Ventura is a highly specialized physician in plastic, aesthetic, and reconstructive surgery. With a strong academic background from the Autonomous University of Santo Domingo and over a decade of experience in various prestigious institutions, Dr. Victor Estrella is an expert in aesthetic and functional surgery. Additionally, he is a member of the Dominican Society of Plastic, Aesthetic, and Reconstructive Surgery (SODOCIPRE), which promotes the continuous medical education of its members.",
    aboutP2: "Dr. Victor Estrella specializes in general surgery and minimally invasive approaches, with a focus on hand trauma, congenital malformations, facial surgery, and liposculpture. He offers a wide range of surgical procedures, including facial aesthetic surgery, hand surgery, craniofacial surgery, liposculpture, and the correction of congenital anomalies. He also provides services in aesthetic medicine, such as lip augmentation and alopecia treatment.",
    aboutP3: "His office is located at IPBMA Medical Associates in Gazcue, Santo Domingo, National District. If you are seeking quality medical care in the Dominican Republic, do not hesitate to contact us for more information and to embark on your transformation. Discover the benefits of receiving medical attention at our facilities.",
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
    /*----------------------------------------------------------*/
    aboutP1: "El Dr. Victor Rabiere Estrella Ventura es un médico altamente especializado en cirugía plástica, estética y reconstructiva. Con una sólida formación académica en la Universidad Autónoma de Santo Domingo y más de una década de experiencia en diversas instituciones prestigiosas, el Dr. Victor Estrella es un experto en cirugía estética y funcional. Además, es miembro de la Sociedad Dominicana de Cirugía Plástica, Estética y Reconstructiva (SODOCIPRE), la cual promueve la educación médica continua de sus miembros.",
    aboutP2: "El Dr. Victor Estrella se especializa en cirugía general y abordajes mínimamente invasivos, con enfoque en trauma de mano, malformaciones congénitas, cirugía facial y lipoescultura. Ofrece una amplia gama de procedimientos quirúrgicos, incluyendo cirugía estética facial, de la mano, craneofacial, lipoescultura y corrección de anomalías congénitas. También brinda servicios de medicina estética como el aumento de labios y tratamiento de alopecia.",
    aboutP3: "Su consultorio está ubicado en IPBMA Medical Associates, en Gazcue, Santo Domingo, Distrito Nacional. Si buscas atención médica de calidad en República Dominicana, no dudes en contactarnos para obtener más información y dar inicio a tu transformación. Descubre los beneficios de recibir atención médica en nuestras instalaciones.",
  },
  french: {
    firstmaintitle: "Chirurgie Plastique & Reconstructive",
    firstmainsubtitle: '"Améliorer votre qualité de vie est ma vocation"',
    firstmainquestionnairebtn: "Remplir le Questionnaire",
    firstmaincontactbtn: "Contact",
    /*----------------------------------------------------------*/
    navMobileHome: "Accueil",
    navMobileAbout: "À propos",
    navMobileContact: "Contact",
    navMobileQuestionnaireBtn: "Remplir le Questionnaire",
    /*----------------------------------------------------------*/
    navHome: "Accueil",
    navAbout: "À propos",
    navContact: "Contact",
    navQuestionnaireBtn: "Remplir le Questionnaire",
    /*----------------------------------------------------------*/
    procedures: "Procédures",
    /*----------------------------------------------------------*/
    face: "Visage",
    faceP:
      "Nous sommes là pour vous aider à obtenir l'apparence que vous souhaitez, que vous souhaitiez rajeunir vos yeux avec une blépharoplastie (chirurgie des paupières), améliorer votre nez avec une rhinoplastie ou revitaliser votre visage avec un lifting facial.",
    /*----------------------------------------------------------*/
    body: "Corps",
    bodyP:
      "La liposculpture, également connue sous le nom de liposuccion, est pratiquée pour améliorer l'apparence de vos cuisses, de vos fesses ou de votre abdomen, ou en envisageant une abdominoplastie pour un ventre plus ferme et plat, nous sommes là pour vous aider à obtenir les résultats souhaités.",
    /*----------------------------------------------------------*/
    breast: "Sein",
    breastP:
      "Nous proposons une variété de procédures chirurgicales pour améliorer l'esthétique des seins, y compris l'augmentation mammaire, la réduction mammaire, tant pour les femmes que pour les hommes, le lifting mammaire et la reconstruction mammaire.",
    /*----------------------------------------------------------*/
    arm: "Bras",
    armP: "Connu sous le nom de lifting des bras, cette intervention chirurgicale vise à éliminer l'excès de peau du haut des bras. Cette condition est souvent attribuée à une perte de poids significative (en particulier après une chirurgie bariatrique), à des facteurs génétiques ou au processus naturel de vieillissement.",
    /*----------------------------------------------------------*/
    buttocks: "Fesses",
    buttocksP:
      "Un lifting des fesses améliore la taille et la définition en éliminant l'excès de graisse par liposuccion. Les chirurgiens utilisent habilement cette graisse collectée pour sculpter et rehausser la forme et le volume des fesses, obtenant une apparence harmonieuse conforme aux normes de beauté de cette région.",
    /*----------------------------------------------------------*/
    other: "Autres",
    otherP:
      "Vous avez également la possibilité de subir des traitements de rajeunissement du visage non chirurgicaux. Le Botox est le traitement médico-esthétique injectable que nous utilisons pour lutter efficacement contre les rides et réduire les signes du vieillissement.",
    /*----------------------------------------------------------*/
    aboutP1: "Le Dr. Victor Rabiere Estrella Ventura est un médecin hautement spécialisé en chirurgie plastique, esthétique et reconstructive. Avec une solide formation académique à l'Université autonome de Santo Domingo et plus d'une décennie d'expérience dans diverses institutions prestigieuses, le Dr. Victor Estrella est un expert en chirurgie esthétique et fonctionnelle. De plus, il est membre de la Société dominicaine de chirurgie plastique, esthétique et reconstructive (SODOCIPRE), laquelle promeut la formation médicale continue de ses membres.",
    aboutP2: "Le Dr. Victor Estrella est spécialisé en chirurgie générale et en approches peu invasives, avec un accent sur les traumatismes de la main, les malformations congénitales, la chirurgie faciale et la liposculpture. Il propose une large gamme de procédures chirurgicales, y compris la chirurgie esthétique du visage, de la main, cranio-faciale, la liposculpture et la correction d'anomalies congénitales. Il propose également des services de médecine esthétique tels que l'augmentation des lèvres et le traitement de la calvitie.",
    aboutP3: "Son cabinet se trouve à IPBMA Medical Associates, à Gazcue, à Santo Domingo, dans le district national. Si vous recherchez des soins médicaux de qualité en République dominicaine, n'hésitez pas à nous contacter pour obtenir plus d'informations et commencer votre transformation. Découvrez les avantages de recevoir des soins médicaux dans nos installations."
  },
  portuguese: {
    firstmaintitle: "Cirurgia Plástica & Reconstrutiva",
    firstmainsubtitle: '"Melhorar a sua qualidade de vida é a minha vocação"',
    firstmainquestionnairebtn: "Responder ao Questionário",
    firstmaincontactbtn: "Contato",
    /*----------------------------------------------------------*/
    navMobileHome: "Início",
    navMobileAbout: "Sobre",
    navMobileContact: "Contato",
    navMobileQuestionnaireBtn: "Responder ao Questionário",
    /*----------------------------------------------------------*/
    navHome: "Início",
    navAbout: "Sobre",
    navContact: "Contato",
    navQuestionnaireBtn: "Responder ao Questionário",
    /*----------------------------------------------------------*/
    procedures: "Procedimentos",
    /*----------------------------------------------------------*/
    face: "Rosto",
    faceP:
      "Estamos aqui para ajudá-lo a obter a aparência que deseja, seja rejuvenescendo seus olhos com uma blefaroplastia (cirurgia das pálpebras), melhorando o seu nariz com uma rinoplastia ou revitalizando o seu rosto com um lifting facial.",
    /*----------------------------------------------------------*/
    body: "Corpo",
    bodyP:
      "A lipoescultura, também conhecida como lipoaspiração, é realizada para melhorar a aparência das suas coxas, glúteos ou abdômen, ou considerando a abdominoplastia para um abdômen mais firme e plano, estamos aqui para ajudá-lo a obter os resultados desejados.",
    /*----------------------------------------------------------*/
    breast: "Seios",
    breastP:
      "Oferecemos uma variedade de procedimentos cirúrgicos para melhorar a estética dos seios, incluindo o aumento dos seios, a redução dos seios, tanto para mulheres como para homens, o lifting dos seios e a reconstrução dos seios.",
    /*----------------------------------------------------------*/
    arm: "Braços",
    armP: "Conhecido como lifting dos braços, este procedimento cirúrgico aborda a remoção do excesso de pele na parte superior dos braços. Esta condição é frequentemente atribuída a uma perda de peso significativa (especialmente após uma cirurgia bariátrica), fatores genéticos ou o processo natural de envelhecimento.",
    /*----------------------------------------------------------*/
    buttocks: "Nádegas",
    buttocksP:
      "Um lifting das nádegas melhora o tamanho e a definição ao remover o excesso de gordura por meio de lipoaspiração. Os cirurgiões utilizam habilmente esta gordura coletada para esculpir e realçar a forma e o volume das nádegas, obtendo uma aparência harmoniosa de acordo com os padrões de beleza desta área.",
    /*----------------------------------------------------------*/
    other: "Outros",
    otherP:
      "Você também tem a opção de se submeter a tratamentos de rejuvenescimento facial não cirúrgicos. O Botox é o tratamento médico-estético injetável que usamos para combater eficazmente as rugas e reduzir os sinais de envelhecimento.",
    /*----------------------------------------------------------*/
    aboutP1: "O Dr. Victor Rabiere Estrella Ventura é um médico altamente especializado em cirurgia plástica, estética e reconstructiva. Com uma sólida formação acadêmica na Universidade Autônoma de Santo Domingo e mais de uma década de experiência em várias instituições prestigiosas, o Dr. Victor Estrella é um especialista em cirurgia estética e funcional. Além disso, ele é membro da Sociedade Dominicana de Cirurgia Plástica, Estética e Reconstructiva (SODOCIPRE), que promove a educação médica contínua de seus membros.",
    aboutP2: "O Dr. Victor Estrella é especializado em cirurgia geral e abordagens minimamente invasivas, com foco em trauma de mão, malformações congênitas, cirurgia facial e lipoescultura. Ele oferece uma ampla gama de procedimentos cirúrgicos, incluindo cirurgia estética facial, de mão, craniofacial, lipoescultura e correção de anomalias congênitas. Ele também fornece serviços de medicina estética, como aumento dos lábios e tratamento da alopecia.",
    aboutP3: "Seu consultório está localizado no IPBMA Medical Associates, em Gazcue, Santo Domingo, Distrito Nacional. Se você procura atendimento médico de qualidade na República Dominicana, não hesite em entrar em contato conosco para obter mais informações e iniciar sua transformação. Descubra os benefícios de receber atendimento médico em nossas instalações."
  },
};
