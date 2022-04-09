
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', (e) =>{
        e.preventDefault();

        let href = e.target.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        if(scrollTarget != null){
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const navLink = document.querySelectorAll("nav li");

const burgerToggle = document.querySelector("#navList_toggle");
const langBox = document.querySelector(".lang-list-point");

function hiedeBurgerMenu(){
    burgerToggle.checked = false;
}

function remClasAct() {    
    navLink.forEach(elem =>{
        elem.classList.remove("active");
    });   
}

navLink.forEach(elem => {
    elem.addEventListener("click", e => {
        remClasAct();
        if(e != langBox){
            hiedeBurgerMenu();
        }
        e.target.parentNode.classList.toggle("active");
    });
});


//add id list on all elements
const domElems = document.querySelectorAll("*");
if (domElems.length > 0) {
    domElems.forEach((elem) =>{
        let idList = {
            add: function add(id){
                if(!elem.id.includes(id)){
                    if (elem.id == "") {
                        elem.id = id;   
                    }else{
                        elem.id = elem.id + " " + id;
                    }
                };
            },
            remove: function remove(id){
                if(elem.id.includes(id)){
                    if (elem.id != id) {
                        elem.id = elem.id.replace(" " + id, "");
                    }else{
                        elem.id = elem.id.replace(id, "");   
                    }
                };   
            }
        }
        elem['idList'] = idList;
    });
}

const goGoBtn = document.querySelector(".go-up-btn");
goGoBtn.addEventListener();
// console.log(ruText);// lang