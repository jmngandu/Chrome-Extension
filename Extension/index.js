let myLinks = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com'];
const linkEl = document.querySelector('.link-el');
const btnEL = document.querySelector('.btn-el');
const listEl = document.querySelector('.list-el');

btnEL.addEventListener('click', () => {
	myLinks.push(linkEl.value);

	for (let i = 0; i < myLinks.length; i++) {
		listEl.innerHTML += '<li>' + myLinks[i] + '</li>';
	}
});
