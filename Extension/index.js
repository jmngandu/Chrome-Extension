let myLinks = [];
const linkEl = document.querySelector('.link-el');
const btnEL = document.querySelector('.btn-el');
const listEl = document.querySelector('.list-el');
console.log(listEl);
btnEL.addEventListener('click', () => {
	myLinks.push(linkEl.value);

	for (let i = 0; i < myLinks.length; i++) {
		console.log(myLinks[i]);
		listEl.innerHTML += myLinks[i];
	}
});
