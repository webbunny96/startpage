function adjustLine(from, to, line) {

  var fT = from.offsetTop + from.offsetHeight / 2;
  var tT = to.offsetTop + to.offsetHeight / 2;
  var fL = from.offsetLeft + from.offsetWidth / 2;
  var tL = to.offsetLeft + to.offsetWidth / 2;

  var CA = Math.abs(tT - fT);
  var CO = Math.abs(tL - fL);
  var H = Math.sqrt(CA * CA + CO * CO);
  var ANG = 180 / Math.PI * Math.acos(CA / H);

  if (tT > fT) {
    var top = (tT - fT) + fT;
  } else {
    var top = (fT - tT) + tT;
  }
  if (tL > fL) {
    var left = (tL - fL)  + fL;
  } else {
    var left = (fL - tL)  + tL;
  }

  if ((fT < tT && fL < tL) || (tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)) {
    ANG *= -1;
  }
  
  top -= H / 2;

  line.style["-webkit-transform"] = 'rotate(' + ANG + 'deg)';
  line.style["-moz-transform"] = 'rotate(' + ANG + 'deg)';
  line.style["-ms-transform"] = 'rotate(' + ANG + 'deg)';
  line.style["-o-transform"] = 'rotate(' + ANG + 'deg)';
  line.style["-transform"] = 'rotate(' + ANG + 'deg)';
  line.style.top = top + 'px';
  line.style.left = left + 'px';
  line.style.height = H + 'px';
}

//adjustLine( document.querySelector('.base-line'), document.querySelector('.skill'), document.querySelector('.con-line'));

let baseLine = document.querySelector('.base-line');
  let skils = document.querySelectorAll('.skil');
  let conectLine = document.querySelectorAll('.con-line');
  let sfts = document.querySelector('.sft-skils').children;

 let skilLeft, skilTop = 0;
 let baseLineTop = baseLine.offsetTop;
  
function conLine(){
  sfts.forEach((skil, ind) => {
    if(skil.className == 'skil'){
      skilLeft = skil.offsetLeft;
      skilTop = skil.offsetTop;
      console.log(ind +': ');
    }
    
    if(skil.className == 'con-line'){
      if(skilLeft === 'undefined') skilLeft = 0;
      if(skilTop > baseLineTop){
        if(typeof skilLeft == undefined) skilLeft = 0;
        skil.style.top = (baseLineTop - (skil.offsetWidth / 2)) + 'px';
      }
      
      if(skilTop < baseLineTop) skil.style.top = (baseLineTop + (skil.offsetWidth / 2)) + 'px';
      console.log(skilLeft);
      skil.style.left = skilLeft + 'px';
    }
  });
}
  
  
 // conectLine.style.width = Math.sqrt((skils.offsetLeft * skils.offsetLeft)) + Math.sqrt((fromElem.offsetTop * fromElem.offsetTop)) + 'px';
 
conLine();