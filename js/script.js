
document.addEventListener('DOMContentLoaded', () => {
	const menuList = document.querySelector('.menu__list');
	const menuMore = document.querySelector('.menu-more');
	const menuSub = document.querySelector('.menu-sub');
	let menuItems = menuList.querySelectorAll('.menu__item');
	const mediaQuery = window.matchMedia('(max-width: 767.98px)');
	const mediaQueryPhone = window.matchMedia('(min-width: 767.98px)');
	let windowWidth = window.innerWidth;// общая ширина окна

	let deleteElement = true;

	function delElem() {

		if (!deleteElement) return false;

		let w = 0;

		let outerWidth = menuList.offsetWidth;// общая ширина меню

		for (let index = 0; index < menuItems.length; index++) {
			const menuItem = menuItems[index];

			w += menuItem.offsetWidth;// ширина каждого item меню (сумма)  may be +5//

			if (w > 500 && mediaQueryPhone.matches) {

				let listChild = menuList.removeChild(menuList.lastElementChild.previousElementSibling);

				menuSub.prepend(listChild);
			}

			if (w > 700) {
				deleteElement = false;
			}

		}

	}
	function addElem() {

		if (!deleteElement) return false;

		let w = 0;

		for (let index = 0; index < menuItems.length; index++) {
			const menuItem = menuItems[index];

			w += menuItem.offsetWidth;// ширина каждого item меню (сумма)  may be +5//
			if (w > 500 && mediaQueryPhone.matches) {

				let listChild = menuList.removeChild(menuList.lastElementChild.previousElementSibling);

				menuSub.prepend(listChild);

			}

		}
	}

	delElem();

	window.addEventListener('resize', () => {

		(window.innerWidth > windowWidth) ? addElem() : delElem();
		windowWidth = window.innerWidth;

	});


});

//=====================
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {

		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');

	});

}

//==================

function ibg() {
	let ibg = document.querySelectorAll("._ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();

//============

const menuCatalog = document.querySelector('.menu__item_catalog');
const catalog = document.querySelector('.catalog');


menuCatalog.addEventListener("mouseenter", function (e) {
	catalog.classList.add('active');
});

catalog.addEventListener("mouseenter", function (e) {
	catalog.classList.add('active');
});

menuCatalog.addEventListener("mouseleave", function (e) {
	catalog.classList.remove('active');
});

catalog.addEventListener("mouseleave", function (e) {
	catalog.classList.remove('active');
});


//============

