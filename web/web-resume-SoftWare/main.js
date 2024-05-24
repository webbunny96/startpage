const date_birth = new Date(1996, 10);
let now = new Date();

function getOld() {
    let old_span = document.querySelector(".old");
    let age = now.getFullYear() - date_birth.getFullYear();
    old_span.textContent = age;
}

getOld();
