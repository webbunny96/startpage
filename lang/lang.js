

let ukrNav = {
    aboutMe: "Про мене",
    eduction: "Освіта",
    works: "Роботи",
    contacts: "Контакти",
    price: "Прайс"
}

let ukrStory = {
    h2: "Front-End Розробник",
    p: 'Мене звуть Максим. Займаюся розробкою та програмуванням понад 5 років. За весь цей час виробив уміння швидко та якісно писати код, а знання великої кількості бібліотек дає мені можливість написання багатофункціональних та оптимізованих додатків та сервісів, які зручні та прості у використанні, що привабить велику кількість людей до вашої продукції.'
}

let ukrSoftSkil = {
    timeManagment:"Time managment",
    continuousLearning:"Continuous learning",
    emotionalIntelligence:"Emotional intelligence",
    adaptability:"Adaptability",
    collaborationTeamwork:"Collaboration & Teamwork",
    resilienceCuriosity:"Resilience, Curiosity",
    coachingMindset:"Coaching Mindset",
    projectManagement:"Project Management",
    crativity:"Crativity",
    criticalThinking:"Critical Thinking & Problem Solving"
}

let ukrWorks = {
    works: "Роботи"
}

let ukrCopyright = {
    first:"Усі права захищені 2022",
    second:"Усі права захищені 2022"
}

let enNav = {
    aboutMe: "About me",
    eduction: "Eduction",
    works: "Works",
    contacts: "Contacts",
    price: "Price"
}

let enStory = {
    h2: "Front-End Developer",
    p: 'My name is Max. I have been developing and programming for over 5 years. During all this time, I have developed the ability to write code quickly and efficiently, and the knowledge of a large number of libraries gives me the opportunity to write multifunctional and optimized applications and services that are convenient and easy to use, which will attract a large number of people to your products.'
}

let enSoftSkil = {
    timeManagment:"Time managment",
    continuousLearning:"Continuous learning",
    emotionalIntelligence:"Emotional intelligence",
    adaptability:"Adaptability",
    collaborationTeamwork:"Collaboration & Teamwork",
    resilienceCuriosity:"Resilience, Curiosity",
    coachingMindset:"Coaching Mindset",
    projectManagement:"Project Management",
    crativity:"Crativity",
    criticalThinking:"Critical Thinking & Problem Solving"
}

let enWorks = {
    works: "Works"
}

let enCopyright = {
    first:"All rights reserved 2022",
    second:"All rights reserved 2022"
}


const setLanguageButton = document.querySelectorAll(".langBtn");

const navIteam = document.querySelectorAll("header .menu li a");

const sectionIteam = document.querySelectorAll("section");

setLanguageButton.forEach((elem)=>{
    elem.addEventListener("click", (e)=>{
        setLanguage(elem.id);
        if(e.target.parentNode.id=="en"){
            document.getElementsByClassName('langBtnEn')[0].style= "order: 0";
            document.getElementsByClassName('langBtnUkr')[0].style= "order: 1";
        }
        if(e.target.parentNode.id=="ukr"){
            document.getElementsByClassName('langBtnUkr')[0].style= "order: 0";
            document.getElementsByClassName('langBtnEn')[0].style= "order: 1";
        }
    });
});

function setLanguage(lang = "en"){
    if(lang == "en"){
        //nav
  //nav
        document.querySelector("a.aboutMe").innerHTML = enNav.aboutMe;
        document.querySelector("a.works").innerHTML = enNav.works;
        document.querySelector("a.contacts").innerHTML = enNav.contacts;
        document.querySelector("a.price").innerHTML = enNav.price;
        
        //other all
        document.querySelector(".story-h").innerHTML = enStory.h2;
        document.querySelector(".story-text").innerHTML = enStory.p;
        document.querySelector(".works-h").innerHTML = enWorks.works;
        document.querySelector(".copyright-info-first").innerHTML = enCopyright.first;
        document.querySelector(".copyright-info-second").innerHTML = enCopyright.second;
     }

    if(lang == "ukr"){
        //nav
        document.querySelector("a.aboutMe").innerHTML = ukrNav.aboutMe;
        document.querySelector("a.works").innerHTML = ukrNav.works;
        document.querySelector("a.contacts").innerHTML = ukrNav.contacts;
      //  document.querySelector("a.price").innerHTML = ukrNav.price;
        
        //other all
        document.querySelector(".story-h").innerHTML = ukrStory.h2;
        document.querySelector(".story-text").innerHTML = ukrStory.p;
        document.querySelector(".works-h").innerHTML = ukrWorks.works;
        document.querySelector(".copyright-info-first").innerHTML = ukrCopyright.first;
        document.querySelector(".copyright-info-second").innerHTML = ukrCopyright.second;
    }
}

// function chengeLangNum(){

// }

document.getElementsByClassName('langBtnEn')[0].style= "order: 0";
document.getElementsByClassName('langBtnUkr')[0].style= "order: 1";


setLanguage();


/*

    navIteam.forEach((elm)=>{
        if(elm.classList != "langBtn"){//enNav 
            if(lang = "en"){
                elm.innerHTML = enNav

            }
            console.log();
        };
          });
*/