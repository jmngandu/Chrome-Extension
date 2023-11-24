let myLinks = [];
const linkEl = document.querySelector('.link-el');
const btnEL = document.querySelector('.btn-el');
const listEl = document.querySelector('.list-el');
const btnDel = document.getElementById('btn-del');
let linksFromLocalStorage = JSON.parse(localStorage.getItem('myLinks'));

if (linksFromLocalStorage) {
	myLinks = linksFromLocalStorage;
	renderMylinks();
}

btnEL.addEventListener('click', () => {
	myLinks.push(linkEl.value);
	linkEl.value = '';

	localStorage.setItem('myLinks', JSON.stringify(myLinks));

	renderMylinks();
});

renderMylinks = () => {
	let theList = '';
	for (let i = 0; i < myLinks.length; i++) {
		theList +=
			// '<li><a target="_blank" href="' +myLinks[i] + '">' + myLinks[i] + '</a></li>';

			theList += `
				<li>
					<a target="_blank"href="${myLinks[i]}"> 
					${myLinks[i]} </a>
				</li>`;

		// const li = document.createElement('li');
		// li.textContent = myLinks[i];
		// listEl.append(li);
	}
	listEl.innerHTML = theList;
};
