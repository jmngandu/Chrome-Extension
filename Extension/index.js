let myLinks = [];
const linkEl = document.querySelector('.link-el');
const btnEL = document.querySelector('.btn-el');

btnEL.addEventListener('click', () => {
	myLinks.push(linkEl.value);
});
