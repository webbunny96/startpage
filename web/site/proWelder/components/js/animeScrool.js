const animIteams = document.querySelectorAll("._anim-iteams"); //get all element with animation

const indicatorIteams = document.querySelectorAll(".indicator");

//Get position elem function
function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, // get corectly left position
      scrollTop = window.pageYOffset || document.documentElement.scrollTop; // get corectly top position
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

if (animIteams.length > 0) { // animIteams have elem
  window.addEventListener("scroll",()=>{ // add event listener on scroll
    onScroll();
  }); 
  // Animation function on scroll
  function animOnScroll(elem) {
      elem.style.marginTop = scrollY  * -0.5 + "px"; //element go margin top on scroll
  }

  // Animation function active on scroll
  function activeAnimOnScroll(elem , animIteamOffset, animIteamPoint, animIteamHeight) { // function animation elem on scroll 
    if (
        scrollY > animIteamOffset - animIteamPoint &&
        scrollY < animIteamOffset + animIteamHeight
      ) { // if scroll Y position > bottom line anim elem and scrol Y position top line anim elem 
        elem.classList.add("__active"); // add elem class "__active"
        
      } else { 
        if (!elem.classList.contains("_anim-no-hide")) { // if elem has class "anim-no-hide" anim working once
          elem.classList.remove("__active"); // remoove class "active"
        }
      }
  }

  //scroll elem plugin
  function onScroll() {
    animIteams.forEach((elem) => { // for animIteams
        const animIteamHeight = elem.offsetHeight; // get height elem
        const animIteamOffset = offset(elem).top; // get top position elem
        const animStart = 4; // teraginezis
  
        let animIteamPoint = window.innerHeight - animIteamHeight / animStart; // calculation Top Position Animation Point
        if (elem > window.innerHeight) { //if ????
          animIteamPoint = window.innerHeight - window.innerHeight / animStart; // calculation TPAP
        }
        activeAnimOnScroll(elem, animIteamOffset, animIteamPoint, animIteamHeight);        
        if (elem.classList.contains("_with-scroll")) {
            animOnScroll(elem);
        }
      }  
    );}
  
   setTimeout(() => { // animation delay
    onScroll();
   }, 300);
}


function indicatorChange(){
  //console.log(window.pageYOffset + window.innerHeight); //смещения окна прокурутки
  console.log("---------");
  document.querySelectorAll("section").forEach((section)=>{
    ofsetTopViwer = window.pageYOffset ;//- parseInt(window.getComputedStyle(section).marginTop.replace("px", ""))
    ofsetButtomViwer = window.pageYOffset + window.innerHeight;
    sectionOffset = offset(section).top + 200;
    if (ofsetTopViwer < sectionOffset && sectionOffset < ofsetButtomViwer) {
      if(section.classList.contains("start-section")){
        document.querySelectorAll(".indicator").forEach((indicator)=>{
          indicator.classList.remove("active");
        })
        document.querySelector(".scroll-start").classList.add("active");
      };//
    }
    if (ofsetTopViwer < sectionOffset && sectionOffset < ofsetButtomViwer) {
      if(section.classList.contains("first-section")){
        document.querySelectorAll(".indicator").forEach((indicator)=>{
          indicator.classList.remove("active");
        })
        document.querySelector(".scroll-one").classList.add("active");
      };//
    }
    if (ofsetTopViwer < sectionOffset && sectionOffset < ofsetButtomViwer) {
      if(section.classList.contains("second-section")){
        document.querySelectorAll(".indicator").forEach((indicator)=>{
          indicator.classList.remove("active");
        })
        document.querySelector(".scroll-two").classList.add("active");
      };//
    }
    if (ofsetTopViwer < sectionOffset && sectionOffset < ofsetButtomViwer) {
      if(section.classList.contains("third-section")){
        document.querySelectorAll(".indicator").forEach((indicator)=>{
          indicator.classList.remove("active");
        })
        document.querySelector(".scroll-tree").classList.add("active");
      };//
    }
    // if (e.classList.contains("second-section")) {
    //   changeActiveClas(e);
    // }
    // if (e.classList.contains("third-section")) {
    //   changeActiveClas(e);
    // }
    //console.log(offset(e));
  });
}

function changeActiveClas(e){
  e.classList.add("active");
}

document.addEventListener("scroll", ()=>{
  //indicatorChange();
})