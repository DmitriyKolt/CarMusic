const btnMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

function openMenu() {
    menu.classList.remove('menu-hidden')
}

function closeMenu() {
    menu.classList.add('menu-hidden')
}

btnMenu.addEventListener('click', openMenu);

document.body.addEventListener('click', (ev) => {
	let target = ev.target;
	if(target != btnMenu) closeMenu();
})

btnMenu.addEventListener('click', (ev) => {
	let target = ev.target;
	if(target != btnMenu) closeMenu();
})