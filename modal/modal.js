const mainModal = document.querySelector('#mainModal');

function addModal(elemList) {
	mainModal.style.display = "flex";
    mainModal.querySelector("#modalContet").append(elemList);
}

function setParamsModal(elemList) {
	mainModal.querySelector("#hederModal").prepend(elemList);
}

function removeModal() {
    mainModal.style.display = "none";
}


document.querySelector("nav .menu .price").addEventListener("click",()=>{
    let elemList = document.createElement("iframe");
    elemList.setAttribute("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vQF6zQEIWRt3i1ag2pRkDi_naV4tGvTgM5WnLIxjiDCnUnnfHluw3nFZIsKkkbr6HW_QWRr5Ply2BtX/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false");
    document.querySelector("body").style.overflow = "hidden";
    addModal(elemList);
});

document.querySelector("#closeModal").addEventListener("click",()=>{
    mainModal.querySelector("#hederModal").querySelector("p").innerHTML = "";
    mainModal.querySelector("#modalContet").innerHTML = "";
    document.querySelector("body").style.overflow = "visible";
    removeModal();
});

//document.querySelector("body").style.overflow = "hidden";// включить как будет настроен скролинг
    