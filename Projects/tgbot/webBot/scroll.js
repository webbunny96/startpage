let mesBox = document.querySelector(".mess-box");
let scrollBar = document.querySelector(".scrollBar");

function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, // get corectly left position
      scrollTop = window.pageYOffset || document.documentElement.scrollTop; // get corectly top position
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft, bottom: rect.bottom ,  right: rect.right };
}

let scroll = 75;

mesBox.addEventListener("wheel",(e)=>{
    if(e.deltaY >= 0){
        scroll-=50
    }
    if(e.deltaY < 0){
        scroll+=50
    }
    scrollP(scroll);
    // scrol+=10;
    // console.group("Размеры MessegeList")

    // console.log( mesBox);
    // console.log("top: " , mesBox.offsetTop);
    // console.log("width: " , mesBox.offsetWidth);
    // console.log("height: " , mesBox.offsetHeight);
    // console.log("left: " , mesBox.offsetLeft);
    // console.log("oftop: " , offset(mesBox).top);
    // console.log("ofLeft: " , offset(mesBox).left);
    // console.log("ofbottom: " , offset(mesBox).bottom);
    // console.log("ofright: " , offset(mesBox).right);
    // console.groupEnd();
    // 
    // console.log("Scrol: " , window.scrollY);
});
function scrollP(scroll_px ) {
    if(offset(mesBox).bottom < 355 && offset(mesBox).top < 27){// || scroll_px >= 1000
        console.log("Scroll", scroll_px + "px");
        mesBox.style.bottom = scroll_px + "px";
        console.log(offset(mesBox).top, offset(mesBox).bottom);
    }
    // if(offset(mesBox).bottom < 320){
    //     mesBox.style.bottom = 75 + "px";
    // }
    // if(offset(mesBox).top > 27){
    //     mesBox.style.top = 0 + "px";
    // }
    console.log(offset(mesBox).bottom < 400, offset(mesBox).top < 27);
}
