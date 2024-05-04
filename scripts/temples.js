const navmenu = document.querySelector('.navmenu');
const hamberger = document.querySelector('#hamburger');

hamberger.addEventListener('click', () => {
	navmenu.classList.toggle('open');
	hamberger.classList.toggle('open');
});