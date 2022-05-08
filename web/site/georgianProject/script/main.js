//add id list on all elements
const domElems = document.querySelectorAll("*");
if (domElems.length > 0) {
    domElems.forEach((elem) =>{
        let idList = {
            add: function add(id){
                if(!elem.id.includes(id)){
                    if (elem.id == "") {
                        elem.id = id;   
                    }else{
                        elem.id = elem.id + " " + id;
                    }
                };
            },
            remove: function remove(id){
                if(elem.id.includes(id)){
                    if (elem.id != id) {
                        elem.id = elem.id.replace(" " + id, "");
                    }else{
                        elem.id = elem.id.replace(id, "");   
                    }
                };   
            }
        }
        elem['idList'] = idList;
    });
}

/*Link scroll */
document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener('click', (e) =>{
        e.preventDefault();

        let href = e.target.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        if(scrollTarget != null){
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});


/* animScroll */

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
    // showGTUBtn();
  }); 
  
  // Animation function on scroll
  function animOnScroll(elem) {
      elem.style.marginTop = scrollY  * -0.5 + "px"; //element go margin top on scroll
  }

    // Animation function on scroll
    function animOnScrollScale(elem) {
        elem.style.transform = "scale(" + scrollY  / 1000 + ")"; //element go margin top on scroll
        console.log(scrollY);
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
            animOnScrollScale(elem);
        }
      }  
    );}
  
   setTimeout(() => { // animation delay
    onScroll();
   }, 300);
}
