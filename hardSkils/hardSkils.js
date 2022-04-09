function hexagonActive() {
	const hexagonIteams = document.querySelectorAll('.hexagons li');
	const hexagonWidth = hexagonIteams[1].offsetWidth;
    const hexagonHeigt = hexagonIteams[1].offsetHeight;
	
	const hexagonMargin = parseInt(
		window.getComputedStyle(hexagonIteams[1]).marginRight.replace('px', ''),
	);
    const hexagonMarginTop = parseInt(
		window.getComputedStyle(hexagonIteams[1]).marginTop.replace('px', ''),
	);

	const hexagonViwerWidth = document.querySelector('.hexagons').offsetWidth - window.getComputedStyle(hexagonIteams[1]).paddingLeft.replace('px', '');
	const hexagonViwerHeight = document.querySelector('.hexagons').offsetHeight;

	let hexagonCount = Math.floor(hexagonViwerWidth / (hexagonWidth + (hexagonMargin * 2)) - 0.6);
	let hexagonCountAll = hexagonIteams.length;
	let hexagonCountHeight = Math.round(hexagonCountAll / (hexagonCount - 1));
    let hexagonRow = Math.floor(hexagonViwerHeight / (hexagonHeigt + (hexagonMarginTop * 2))- 0.6) + 2;
    

	//    console.log(hexagonRow);
    for (let index = 0; index < hexagonIteams.length; index++) {
        if ((index % hexagonCount) == 0 & (index % 2) == 0 ) {
			hexagonIteams[index].style.marginLeft = hexagonWidth / 2 + hexagonWidth * 0.1 + 'px';			
		}
         else {
			hexagonIteams[index].style.marginLeft = hexagonMargin + 'px';
		}
		hexagonIteams[index].classList.add("_anim-iteams");
	}
}

window.addEventListener(
	`resize`,
	event => {
		hexagonActive();
	},
	false,
);

hexagonActive();