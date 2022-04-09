const skilIteam = document.querySelectorAll('.soft-skils li');

function setSoftSkilStyle() {
    const bgColors = [
        'rgb(255, 81, 0)',
        'rgb(255, 166, 0)',
        'rgb(255, 255, 0)',
        'rgb(136, 255, 0)',
        'rgb(72, 255, 0)',
        'rgb(0, 255, 106)',
        'rgb(0, 255, 234)',
        'rgb(0, 26, 255)',
        'rgb(119, 0, 255)',
        'rgb(255, 0, 212)'
    ];
    
    skilIteam.forEach((elm, ind) =>{
        elm.querySelector("picture").style.background = bgColors[ind];
        elm.querySelector("picture").style.boxShadow = "0 0 10px " + bgColors[ind];
		elm.classList.add("_anim-iteams");
    });
}

setSoftSkilStyle();

