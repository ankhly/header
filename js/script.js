
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


//let _slideUp = (target, duration = 500) => {
//	if (!target.classList.contains('_slide')) {
//		target.classList.add('_slide');
//		target.style.transitionProperty = 'height, margin, padding';
//		target.style.transitionDuration = duration + 'ms';
//		target.style.height = target.offsetHeight + 'px';
//		target.offsetHeight;
//		target.style.overflow = 'hidden';
//		target.style.height = 0;
//		target.style.paddingTop = 0;
//		target.style.paddingBottom = 0;
//		target.style.marginTop = 0;
//		target.style.marginBottom = 0;
//		window.setTimeout(() => {
//			target.hidden = true;
//			target.style.removeProperty('height');
//			target.style.removeProperty('padding-top');
//			target.style.removeProperty('padding-bottom');
//			target.style.removeProperty('margin-top');
//			target.style.removeProperty('margin-bottom');
//			target.style.removeProperty('overflow');
//			target.style.removeProperty('transition-duration');
//			target.style.removeProperty('transition-property');
//			target.classList.remove('_slide');
//		}, duration);
//	}
//}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
//let _slideToggle = (target, duration = 500) => {
//	if (target.hidden) {
//		return _slideDown(target, duration);
//	} else {
//		return _slideUp(target, duration);
//	}
//}



const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {

		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');


		_slideDown(menuBody);
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

const menuCatalogs = document.querySelectorAll('.menu__item_catalog, .menu__item_catalog1');
const catalogs = document.querySelectorAll('.catalog, .catalog1');


for (let index = 0; index < menuCatalogs.length; index++) {
	//const menuCatalog = menuCatalogs[index];

	for (let index = 0; index < catalogs.length; index++) {
		const catalog = catalogs[index];



		menuCatalogs[index].addEventListener("mouseenter", function (e) {
			catalog.classList.add('active');
		});


		catalog.addEventListener("mouseenter", function (e) {
			catalog.classList.add('active');
		});


		menuCatalogs[index].addEventListener("mouseleave", function (e) {
			catalog.classList.remove('active');
		});

		catalog.addEventListener("mouseleave", function (e) {
			catalog.classList.remove('active');
		});
	}
}

//============

