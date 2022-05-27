let list = document.querySelectorAll(".list");

function activeLink(){
  list.forEach((iteam)=>{
    iteam.classList.remove("active");
    this.classList.add("active");
  });
}

list.forEach((iteam)=>{
  iteam.addEventListener("click", activeLink);
});

