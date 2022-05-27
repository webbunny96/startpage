let styleNavBar = document.querySelectorAll(".styleNavBar li");

function activeLink(){
    styleNavBar.forEach((iteam)=>{
    iteam.classList.remove("active");
    this.classList.add("active");
  });
}

styleNavBar.forEach((iteam)=>{
  iteam.addEventListener("click", activeLink);
});
