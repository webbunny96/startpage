let allIteam = document.querySelectorAll("*");

document.querySelector("body").addEventListener("click", ()=>{
    allIteam.forEach((e)=>{
    if (e.tagName != "HTML") {
        e.classList.toggle("bord");
    }
    e.classList.toggle("active");
    });
});