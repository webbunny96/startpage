let elemListStyle = new Object();
const treeElem = document.querySelector('#tree')
const childTreeElem = treeElem.querySelectorAll('li');

function getListStyle(){
    let date = [];
    childTreeElem.forEach((elem) => {
        elemListStyle ={
            width: elem.offsetWidth,
            top: elem.offsetTop,
            leftPosLins: elem.offsetLeft
        }; 
    }); 
}
getListStyle();

function creatConLine(){
    childTreeElem.forEach((elem, ind) => {
    elem.insertAdjacentHTML('beforebegin', `<li class="con-line" id="con-line" >${ind + 1}</li>`);
});   
}
creatConLine();

const conLine = document.querySelectorAll('#con-line');

function createBasLine(){
    let baseLine = document.createElement('li');
    baseLine.style.position = 'absolute';
    baseLine.style.top = '50%';
    baseLine.className = 'base-line';
    childTreeElem[0].prepend(baseLine);
}
createBasLine();

function setGeneralListStyle(){
    childTreeElem.forEach((elem, ind) => {
      if (ind % 2 == 0) elem.style.alignSelf = 'flex-start';
      if (ind == 0) elem.style.marginLeft = (elem.offsetWidth / 2) + 'px';
    });
}
setGeneralListStyle();

function calcPos(){
    console.log(elemListStyle);
};
calcPos();