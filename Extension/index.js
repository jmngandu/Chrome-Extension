let myLinks = [];
const linkEl = document.querySelector('.link-el');
const btnEL = document.querySelector('.btn-el');
const listEl = document.querySelector('.list-el');

btnEL.addEventListener('click', () => {
	myLinks.push(linkEl.value);
	renderMylinks();
});

renderMylinks = () => {
	let theList = '';
	for (let i = 0; i < myLinks.length; i++) {
		theList += '<li>' + myLinks[i] + '</li>';
		// const li = document.createElement('li');
		// li.textContent = myLinks[i];
		// listEl.append(li);
	}
	listEl.innerHTML = theList;
};
