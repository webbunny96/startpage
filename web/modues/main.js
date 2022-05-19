///scroler

let counter = 0;
let body = document.querySelector("body");
let main = document.querySelector("main");

//Get position elem function
function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, // get corectly left position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; // get corectly top position
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}


if ('onwheel' in document) {
  // IE9+, FF17+
  body.addEventListener("wheel", onWheel);
} else if ('onmousewheel' in document) {
  // устаревший вариант события
  body.addEventListener("mousewheel", onWheel);
} else {
  // Firefox < 17
  body.addEventListener("MozMousePixelScroll", onWheel);
} 

function onWheel(e) {
  e = e || window.event;
  setInterval(() => {
    if (offset(main).top == ((-1) * counter * body.offsetHeight)) {
      if (e.deltaY < 0) {
        counter--;
      }
      if(e.deltaY > 0){
        counter++;
      }
    }
  }, 100);
  counter = scrollPage(counter);
  counter = scrollPage(counter);
}

function scrollPage(divider){
  main.style.marginTop = ((-1) * divider * body.offsetHeight) + "px";
  if (parseInt(main.style.marginTop.replace("px", "")) >= body.offsetHeight) {
    divider = 0;
  }
  if (parseInt(main.style.marginTop.replace("px", "")) <= (main.offsetHeight * (-1)) + body.offsetHeight) {
    divider = Math.round(main.offsetHeight / body.offsetHeight);
  }
  return divider
}

