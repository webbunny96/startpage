function adjustLine(from, to, line){

	var fT = from.offsetTop  + from.offsetHeight/2; //откуда смещение сверху + смещение по вісоте
  var tT = to.offsetTop 	 + to.offsetHeight/2; //куда смещение сверху + смещение по вісоте
  var fL = from.offsetLeft + from.offsetWidth/2; //откуда смещение слева + смещение по ширене
  var tL = to.offsetLeft 	 + to.offsetWidth/2; //куда смещение сверху + смещение по ширене
  
  var CA   = Math.abs(tT - fT); // модуль разницы
  var CO   = Math.abs(tL - fL);
  var H    = Math.sqrt(CA*CA + CO*CO);
  var ANG  = 180 / Math.PI * Math.acos( CA/H );

  if(tT > fT){
      var top  = (tT-fT)/2 + fT;
  }else{
      var top  = (fT-tT)/2 + tT;
  }
  if(tL > fL){
      var left = (tL-fL)/2 + fL;
  }else{
      var left = (fL-tL)/2 + tL;
  }

  if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
    ANG *= -1;
  }
  
  top-= H/2;

  line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-transform"] = 'rotate('+ ANG +'deg)';
  line.style.top    = top + 'px';
  line.style.left   = left + 'px';
  line.style.height = H + 'px';
  
  console.log(fT, tT, fL, tL, CA, CO, H, ANG, top, left);
}


// console.log(document.querySelectorAll('#hyphen'));

// adjustLine(
//   document.querySelector('#frome'),
//   document.querySelector('#to'), 
//   document.querySelector('#conline')
// );