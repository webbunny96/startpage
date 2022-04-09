const animIteams = document.querySelectorAll("._anim-iteams"); //get all element with animation

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
        elem.idList.add("__active");
      } else { 
        if (!elem.classList.contains("_anim-no-hide")) { // if elem has class "anim-no-hide" anim working once
          elem.classList.remove("__active"); // remoove class "active"
          elem.idList.remove("__active");
        }
      }
  }

  //scroll elem plugin
  function onScroll() {
    animIteams.forEach((elem) => { // for animIteams
        const animIteamHeight = elem.offsetHeight; // get height elem
        const animIteamOffset = offset(elem).top; // get top position elem
        const animStart = 8; // teraginezis
  
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
