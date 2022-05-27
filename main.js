/*Link scroll */
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



let darkThemStyle = `:root{
	--main-anim-time: 2s;
	--second-anim-time: 4s;
	--third-anim-time: 6s;

	--main-color-html: rgb(60, 60, 60);

	--main-color-body: rgb(35, 35, 35);
	
	--heder-font-color: rgb(185, 185, 185);

	--li-active-color: rgb(185, 185, 185);

	--main-colorB-text: rgb(255, 255, 255);
	--main-colorW-text: rgb(0, 0, 0);
	--main-colorGt-text: rgb(166, 166, 166);
	
	--footer-bg-colr: rgb(58, 58, 58);
	
    --hexagon-color: rgb(70, 70, 70);

	--burg-bg-color: rgba(23, 23, 23, 0.1);
	--burg-line-color: #d4d4d4;
	--navList-bg-color: rgba(62, 62, 62, 0.8);
	--sof-li-hover: rgba(243, 243, 243, 0.7);
	--sof-cet-shadow: rgba(255, 255, 255, 0.8);
	--story-text-color: rgb(167, 167, 167);
	--work-title-color: rgb(79, 188, 112);
	--toUP-btn-color: rgb(27, 0, 114);
	--goUp-btn-shadoww: rgba(0, 200, 0, 1);
}
`;

let themToggle = document.querySelector("#dark-them_toggle");


let styleElem = document.createElement("style");
styleElem.innerHTML = darkThemStyle;

themToggle.addEventListener("change", ()=>{
    if (themToggle.checked) {        
        document.querySelector("body").append(styleElem);
    }else{
        styleElem.remove();
    };
})


