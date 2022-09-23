let mesBox = document.querySelector('.mess-box');
let scrollBar = document.querySelector('.scrollBar');
let header = document.querySelector("header");
let footer = document.querySelector("footer"); 


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
   
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:

      if(Math.round(offset(scrollBar).top) >= Math.round(offset(header).bottom)){
        console.log("work");
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        //elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  
        let scrollSb = new Event("scrollSb",{bubbles: true});
        messBox.dispatchEvent(scrollSb);
      }
       
      console.log(Math.round(offset(scrollBar).bottom), Math.round(offset(footer).top), elmnt.style.top);
      
      if(Math.round(offset(scrollBar).top) <= Math.round(offset(header).bottom)){
        elmnt.style.top = 66 + "px";
        
        let scrollSb = new Event("scrollSb",{bubbles: true});
        messBox.dispatchEvent(scrollSb);
      }

      if(Math.round(offset(footer).top) <= Math.round(offset(scrollBar).bottom)){
        elmnt.style.top = 387  + "px";
        let scrollSb = new Event("scrollSb",{bubbles: true});
        messBox.dispatchEvent(scrollSb);
      }
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, // get corectly left position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; // get corectly top position
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    bottom: rect.bottom,
    right: rect.right,
  };
}

let scroll = 75;

mesBox.addEventListener('wheel', e => {
    if (e.deltaY >= 0  && Math.round( offset(mesBox).bottom) >= 550) {
      scroll += 50;
    }
    if (e.deltaY < 0 && Math.round( offset(mesBox).top) <= 50) {
      scroll -= 50;
    }
    scrollP(scroll);
});

function scrollP(scroll_px) {
    mesBox.style.bottom = scroll_px + 'px';
    scrollBar.style.bottom = (scroll_px - 120) * -1.5 + 'px';
}

document.addEventListener("createMessage", ()=>{
    scrollShowHide();
});

document.addEventListener("DOMContentLoaded", ()=>{
    scrollShowHide();
});

function scrollShowHide() {
    if((mesBox.offsetHeight + header.offsetHeight) > (document.querySelector("body").offsetHeight)){
        scrollBar.style.height = document.querySelector("body").offsetHeight-(mesBox.offsetHeight - (header.offsetHeight + 100))  + "px";
    }else{
        scrollBar.style.height = 0 +"px";
    }
}

dragElement(scrollBar);
document.addEventListener("scrollSb", ()=>{
    mesBox.style.bottom = (offset(scrollBar).top - 250) * 0.3 + 'px';
});