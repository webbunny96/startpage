const tileIteam = document.querySelectorAll('.tiles li');
const tileTemplate = document.querySelector('template');

function createWorkModal(params) {
	let elemList = document.createElement('iframe');
	elemList.setAttribute('src', params.params.href);
	document.querySelector('body').style.overflow = 'hidden';

	let paramList = document.createElement('p');
	let link = document.createElement('a');

	let nameLink = link.cloneNode();
	nameLink.innerHTML = params.params.name;
	let autorLink = link.cloneNode();
	autorLink.innerHTML = params.params.designAutor;
	nameLink.setAttribute('href', params.params.href);
	autorLink.setAttribute('href', params.params.autorHref);

	paramList.append(autorLink);
	paramList.append(nameLink);

	addModal(elemList);
	setParamsModal(paramList);
}

function createTiles() {
	tileIteam.forEach(elem => {
		let tileTemp = tileTemplate.content.cloneNode(true);
		let text = elem.textContent;
		let params = text.split('|');
		let tileParams = {
			name: params[0],
			href: params[1],
			designAutor: params[2],
			screen: params[3],
			autorHref: params[4],
		};

		let modalParams = {
			elem: elem,
			params: tileParams,
		};

		tileTemp.querySelector('h3').textContent = tileParams.name;
		tileTemp
			.querySelector('img')
			.setAttribute('src', './worksSection/screen/' + tileParams.screen + '.webp');
		tileTemp.querySelector('img').setAttribute('alt', tileParams.name);
		elem.addEventListener('click', e => {
			createWorkModal(modalParams);
		});
		elem.classList.add('_anim-iteams');
		elem.textContent = '';
		elem.append(tileTemp);
	});
}

createTiles();
