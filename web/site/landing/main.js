let animationBgElementIteam = document.querySelectorAll("#animBG"); // all element why go top
const pageHeight = document.documentElement.scrollHeight; // height all page

const anmIteam = document.querySelectorAll(".anm"); // all elemen why mast heve animation
 

function scrollSee(){
    let bodyScrollPos = parseInt(window.pageYOffset); // position ofset top line to scroll
    let winInnerHeight = window.innerHeight; // browser viwer hight  
    let scrollViwer = parseInt(bodyScrollPos + winInnerHeight) ; // offset viweer bottom line browser on scrool

    const sectionHeight = document.querySelector("section").offsetHeight;
    
    animationBgElementIteam.forEach((elem)=>{ // foreach elemen why to go top
        //elem.style.marginTop = bodyScrollPos * -0.5 + "px"; //element go margin top on scroll 
    });

    let secIteam = document.querySelectorAll("section"); // all section
    let indicatorIteam = document.querySelectorAll(".scroll-indicator span"); // indecator spann iteam
        //indicator
    secIteam.forEach((elem, elemInd) => { // foreach element all section
      let elemHeight = elem.offsetHeight / 2;
        let elemTopPos = elem.offsetTop; // hes element offset top position
      console.log(bodyScrollPos + " < " + elemTopPos + " && " + elemTopPos+ " < " + scrollViwer);
      console.log(winInnerHeight);
      if (bodyScrollPos < elemTopPos && elemTopPos < scrollViwer) { // condition target actions of element in viwer
        let activeInd = parseInt((bodyScrollPos / pageHeight) * 10); // calculation index inicartors
        indicatorIteam[activeInd].classList.add("active"); // add class "active" on index indicator
        anmIteam[elemInd].classList.add("anm-active"); // add class "anm-active" on elemenyt 
     }else{
        indicatorIteam.forEach((indict)=>{ // foreach element "indicator" 
            indict.classList.remove("active"); // remove class "active" indicator element
        });
    }
    });
}

window.addEventListener('scroll', function() {
    scrollSee();
});
