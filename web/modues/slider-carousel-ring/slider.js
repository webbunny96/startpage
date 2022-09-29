let slider = document.querySelector(".slider");
let slideIteam = document.querySelectorAll(".slide-item");
let slideMain = document.querySelector(".slide-main");

let prevBtn = document.querySelector(".slide-prev-btn");
let nextBtn = document.querySelector(".slide-next-btn");

let slideWidth = slider.offsetWidth * 0.3;
let slidStyle = slideMain.currentStyle || window.getComputedStyle(slideMain);
let slideMargin = parseInt(slidStyle.marginLeft.replace("px", ""));

let leftIteam = new Array();
let rightIteam = new Array();
let counter = 0;

nextBtn.addEventListener("click", () => {
  counter--;
  setNewPos();
  if (counter > 0) {
    leftIteam[counter].classList.remove("slide-main");
    leftIteam[counter - 1].classList.add("slide-main");
  }
  if (counter < 0) {
    rightIteam[counter * -1].classList.add("slide-main");
    rightIteam[counter * -1 - 1].classList.remove("slide-main");
  }
  if (counter == 0) {
    leftIteam[counter].classList.remove("slide-main");
    rightIteam[counter].classList.add("slide-main");
  }
});

prevBtn.addEventListener("click", () => {
  counter++;
  setNewPos();
  if (counter == 1) {
    rightIteam[counter - 1].classList.remove("slide-main");
    leftIteam[counter - 1].classList.add("slide-main");
  }
  if (counter <= 0) {
    rightIteam[(counter - 1) * -1].classList.remove("slide-main");
    rightIteam[counter * -1].classList.add("slide-main");
  }
  if (counter > 0 && counter != 1) {
    leftIteam[counter - 1].classList.add("slide-main");
    leftIteam[counter - 2].classList.remove("slide-main");
  }
  if (counter == 0) {
    leftIteam[counter + 1].classList.remove("slide-main");
  }
});

function setNewPos() {
  let offsetCenter = slider.offsetWidth / 2 - slideMain.offsetWidth / 2;
  rightIteam.forEach((slide, i) => {
    slide.style.left = slide.offsetWidth * (counter + i) + offsetCenter + "px";
  });
  leftIteam.forEach((slide, i) => {
    slide.style.left =
      slide.offsetWidth * (counter + (i + 1) * -1) + offsetCenter + "px";
  });
}

function getSize() {
  slideWidth = slider.offsetWidth * 0.3;
  slidStyle = slideMain.currentStyle || window.getComputedStyle(slideMain);
  slideMargin = parseInt(slidStyle.marginLeft.replace("px", ""));
}

function addSlideArr(){
  slideIteam.forEach((slide, i) => {
    if (i > slideIteam.length / 2) {
      leftIteam.push(slide);
    }
    if (i <= slideIteam.length / 2) {
      rightIteam.push(slide);
    }
  });
}

function setPosition() {
  let offsetCenter = slider.offsetWidth / 2 - slideMain.offsetWidth / 2;

  rightIteam.forEach((slide, i) => {
    if (i < rightIteam.length) {
      slide.style.left = slideWidth * i + offsetCenter + "px";
    }
  });

  leftIteam.forEach((slide, i) => {
    if (i < leftIteam.length) {
      slide.style.left = slideWidth * ((i + 1) * -1) + offsetCenter + "px";
    }
  });
}

function setHeightSlides() {
  slideIteam.forEach((slide) => {
    slide.style.height = slideWidth + "px";
    slide.style.width = slideWidth + "px";
  });
  slider.style.height = slideWidth + slideMargin * 2 + "px";
  prevBtn.style.height = slideWidth + "px";
  prevBtn.style.width = slideWidth + "px";
  nextBtn.style.height = slideWidth + "px";
  nextBtn.style.width = slideWidth + "px";
}

window.addEventListener("load", function (event) {
  getSize();
  setHeightSlides();
  addSlideArr();
  setPosition();
});

window.addEventListener("resize", (event) => {
  getSize();
  setHeightSlides();
  setPosition();
});
