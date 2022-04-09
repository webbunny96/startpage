let treeIteam = document.querySelectorAll(".tree li");

function addConLine() {
    treeIteam.forEach((comit) =>{
        let conLine = document.createElement("div");
        conLine.setAttribute("class","con-line");
        conLine.setAttribute("id","conLine");
        
        comit.insertBefore(conLine, comit.querySelector("a"));
    });    
}

// addConLine();


//let conLine = querySelectorAll("#conLine");

function setStyleLine() {
    treeIteam.forEach((comit, ind) =>{
        let comitOffsetLeft = comit.children[1].offsetLeft;
        let conLineOffsetLeft = comit.offsetLeft;
        let comitOffsetHightPos = comit.children[1].offsetTop;
        let comitOffsetHight = comit.children[1].offsetHeight;

        let prevComit, hypo;

        if(ind > 0) {
            prevComit = treeIteam[ind - 1];
        }

        if(prevComit != undefined){
            let comOffsPrevLeft = comitOffsetLeft - prevComit.children[1].offsetLeft;
            // console.log(comit.children[1], prevComit.children[1])
            // console.log(comitOffsetLeft + "-" + prevComit.children[1].offsetLeft + "=" + comOffsPrevLeft);
            hypo = Math.sqrt((comitOffsetHightPos*comitOffsetHightPos)+(comOffsPrevLeft*comOffsPrevLeft));
        }else{
            hypo = Math.sqrt((comitOffsetHightPos*comitOffsetHightPos)+(comitOffsetLeft*comitOffsetLeft));
        }
        
        comit.children[0].style.width = hypo + "px";
    });    
}

// setStyleLine();