let scrollPosition = 0

function smoothScroll(){
    window.scrollBy({
        top: scrollPosition,
        behavior: 'smooth'
    });
    scrollPosition = scrollPosition + 0.1;
    console.log(scrollPosition);
}

//setInterval(smoothScroll, 50);

document.addEventListener('keydown', function(event) {
    if (event.code == 'Numpad0') {
        setInterval(smoothScroll, 5);
    }
  });