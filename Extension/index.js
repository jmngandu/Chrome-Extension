let myLinks = [];
const linkEl = document.querySelector('.link-el');
const btnEL = document.querySelector('.btn-el');
const listEl = document.querySelector('.list-el');
const btnDel = document.querySelector('.btn-del');

const linksFromLocalStorage = JSON.parse(localStorage.getItem('myLinks'));

if (linksFromLocalStorage) {
	myLinks = linksFromLocalStorage;
	render(myLinks);
}

function render(links) {
	let theList = '';
	for (let i = 0; i < links.length; i++) {
		theList += `
				<li>
					<a target="_blank"href="${links[i]}"> 
					${links[i]} </a>
				</li>`;
	}
	listEl.innerHTML = theList;
}

btnDel.addEventListener('dblclick', function () {
	localStorage.clear();
	myLinks = [];
	render(myLinks);
});

btnEL.addEventListener('click', () => {
	myLinks.push(linkEl.value);
	linkEl.value = '';

	localStorage.setItem('myLinks', JSON.stringify(myLinks));

	render(myLinks);
});
