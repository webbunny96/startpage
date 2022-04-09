let debug = false;

let leftPosLins = [];
let topPosLins = [];
let offsetPosLins = [];

let skils = document.querySelectorAll('.skil');
let sfts = document.querySelector('.sft-skils').querySelectorAll('li');

let skilLeft, skilTop;

const sftsklsColection = document.querySelectorAll('li');
const listUl = document.querySelector('ul');

let sftsLine = document.createElement('li');

function CreateBasLine(){
  sftsLine.className = 'base-line';
  listUl.prepend(sftsLine);
}
CreateBasLine();


let baseLine = document.querySelector('.base-line');
let baseLineTop = baseLine.offsetTop;

hypot = function(fk, sk){ return Math.sqrt(fk*fk + sk*sk) }

function setRotate(rotateCline){
  let rotateElem;
  cLine.forEach((elem, ind) => {
    rotateElem = rotateCline;
    if ((ind + 1) % 2 == 0) rotateElem = rotateElem * -1;
    elem.style.transform = 'rotate(' + rotateElem  + 'deg)';
  });
}



let rotateCline = [];
let widthLine = [];

function setSizeCL(leftPosLins, topPosLins){
  cLine.forEach((elem, ind) =>{ 
    widthLine[ind] = (hypot(leftPosLins[ind], Math.abs((baseLineTop - topPosLins[ind]))) - (4));
    elem.style.width = widthLine[ind] + 'px';
    //if(topPosLins[ind] < baseLineTop)
    rotateCline[ind] = Math.asin(topPosLins/widthLine[ind])*180/Math.PI;
    console.log(leftPosLins[ind], widthLine[ind], Math.abs(baseLineTop - topPosLins[ind]));
  }); 
  //setRotate();
  //console.log(leftPosLins);
}

function creatConLine (){
  sftsklsColection.forEach((elem, ind) => {
     elem.insertAdjacentHTML('beforebegin', `<li class="con-line">${ind + 1}</li>`);
  });   

  if(debug == true){
    console.log('5: ');
    console.log('nodes sftskls: ');
    console.log(sftsklsColection);
  }
}
creatConLine();

function rePosElem (){
  let skilss = document.querySelectorAll('.skil');
  skilss.forEach((elem, ind) => {
    if (ind % 2 == 0) elem.style.alignSelf = 'flex-start';
    if (ind == 0) elem.style.marginLeft = (elem.offsetWidth / 2) + 'px';
  });

  if(debug == true){
    console.log('4');
  }
}

let cLine = document.querySelectorAll('.con-line');
setRotate();

function posConLine(leftPosLins, topPosLins){
  cLine.forEach((conLine, ind) => {
    conLine.style.top = baseLineTop + 'px';
    if(ind != 0) conLine.style.left = ((leftPosLins[ind - 1] - 30) / 0.75) + 'px';
//    console.log('left postion Conline'+ ind +' :'+ leftPosLins[ind]);
  });

  if(debug == true){
    console.log('3: ');
    console.log('Nodes cLine: ');
    console.log(cLine);
  }
}


function conLine(){
  sfts.forEach((elem, ind) => {
    if(elem.className == 'skil'){
      skilLeft = elem.offsetLeft;
      skilTop = elem.offsetTop;
      //console.log(skilLeft)
      leftPosLins.push(skilLeft);
      topPosLins.push(skilTop);
    }
    // console.log('pos len '+ elem.className +': ');
    // console.log(skilLeft);
  });


  let offsetPosLins = new Array;
  cLine.forEach((elem, ind) =>{
    let leftElemPos;
    if (ind == 0) leftElemPos = 0;
    if(ind != 0) leftElemPos = ((leftPosLins[ind - 1] - 30) / 2);
    offsetPosLins[ind] = (leftPosLins[ind] - leftElemPos);
  });

  setSizeCL(offsetPosLins, topPosLins);
  posConLine(leftPosLins, topPosLins);

  // console.log('2 :');
  // console.log('left pos CL: ');
  // console.log(leftPosLins);
}

function addStyle(){
  sftsklsColection.forEach((elem) => {
    sftName = elem.textContent;
    elem.innerHTML = `— ${sftName}`;
    elem.className = 'skil';
 });

 rePosElem();
 //conLine();

// console.log('1');
}

addStyle();









//let conectLine = document.querySelectorAll('.con-line');
// conectLine.style.width = Math.sqrt((skils.offsetLeft * skils.offsetLeft)) + Math.sqrt((fromElem.offsetTop * fromElem.offsetTop)) + 'px';

let col = ['green', 'yellow', 'blue'];

document.querySelectorAll('.con-line').forEach((elem, i) => {
  elem.style.background = col[i];
});





	
  function calculat6 (obj) {
  var num3 = obj.Number3.value.replace(/,/,".");// катет
  var num4 = obj.Number4.value.replace(/,/,".");// гіпотенуза
  var result3 =  Math.asin(num3/num4)*180/Math.PI;	
 obj.res3.value=result3;	

}
  