let mesBox = document.querySelector('.mess-box');
let scrollBar = document.querySelector('.scrollBar');
let header = document.querySelector("header");
let footer = document.querySelector("footer"); 
let body = document.querySelector("body");


let body_diff_mesBox;

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
     
      if(Math.round( offset(mesBox).bottom) >= Math.round(offset(footer).top) && Math.round(offset(mesBox).top) <= Math.round( header.offsetHeight)){
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        //elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  
        let scrollSb = new Event("scrollSb",{bubbles: true});
        mesBox.dispatchEvent(scrollSb);
      }
          console.log(Math.round( offset(mesBox).bottom), Math.round(offset(footer).top),Math.round( offset(mesBox).bottom) >= Math.round(offset(footer).top) , Math.round(offset(mesBox).top), Math.round( header.offsetHeight), Math.round(offset(mesBox).top) <= Math.round( header.offsetHeight))
      if(Math.round( offset(mesBox).bottom) < Math.round(offset(footer).top)){
        mesBox.style.bottom = footer.offsetHeight + 10 + "px";
      }

      // if(Math.round(offset(footer).top) <= Math.round(offset(scrollBar).bottom)){
      //   elmnt.style.top = offset(footer).top - scrollBar.offsetHeight  + "px";
      //   let scrollSb = new Event("scrollSb",{bubbles: true});
      //   messBox.dispatchEvent(scrollSb);
      // }
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
    if (e.deltaY >= 0  && Math.round( offset(mesBox).bottom) >= offset(footer).top) {
      scroll += 50;
    }
    if (e.deltaY < 0 && Math.round( offset(mesBox).top) <=  header.offsetHeight) {
      scroll -= 50;
    }
    scrollP(scroll);
    console.log();
});

function scrollP(scroll_px) {
    mesBox.style.bottom = scroll_px + 'px';
    scrollBar.style.top = (Math.round( offset(mesBox).top) - header.offsetHeight) * -1 + 'px';
    console.log(offset(scrollBar).bottom);

  }

document.addEventListener("createMessage", ()=>{
    scrollShowHide();
});

document.addEventListener("DOMContentLoaded", ()=>{
    scrollShowHide();
});

function scrollShowHide() {
    if((mesBox.offsetHeight + header.offsetHeight) > (document.querySelector("body").offsetHeight) - header.offsetHeight){
        scrollBar.style.height = (body.offsetHeight - (footer.offsetHeight + header.offsetHeight)) - (mesBox.offsetHeight - (body.offsetHeight - (footer.offsetHeight + header.offsetHeight)) ) + "px";
    }else{
        scrollBar.style.height = 0 +"px";
    }
}

dragElement(scrollBar);
document.addEventListener("scrollSb", ()=>{
    mesBox.style.bottom = Math.round(offset(scrollBar).top) - (header.offsetHeight + footer.offsetHeight )  + 'px';
});



//InitApp(); //Инициализировать приложение

window.addEventListener("resize", ()=>{
  scrollShowHide();
}); //При растягивании окна приложение будет инициализироваться заново

function InitApp() //Растягиваем холст на весь экран
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
