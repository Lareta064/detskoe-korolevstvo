document.addEventListener("DOMContentLoaded", function () {
	$(".lazy").lazy();
	const jsGroups = document.querySelectorAll('.js-group');
	if (jsGroups.length > 0){
		for (let group of jsGroups){
			const jsGroupBtn = group.querySelector('.js-btn');
			const jsGroupTarget = group.querySelector('.js-btn-target');
			
			jsGroupBtn.addEventListener('click', ()=>{
				if (jsGroupBtn.classList.contains('active')){
					jsGroupBtn.classList.remove('active');
					jsGroupTarget.classList.remove('active');
				}else{
					jsGroupBtn.classList.add('active');
					jsGroupTarget.classList.add('active');
				}
			});

		}
	}

	/* ======  menu icon click ====== */
	const menuToggle = document.querySelector('#menu-toggle');
	const mobileMenu = document.querySelector('#header-menu');
	const bodyEl = document.body;

	if (menuToggle) {

		/*   клик поиконке гамбургер*/  
		menuToggle.addEventListener('click', ()=> {
			
			if (menuToggle.classList.contains('active')) {

				menuToggle.classList.remove('active');
				mobileMenu.classList.remove('active');
				bodyEl.classList.remove('lock');
			
			} else {
				menuToggle.classList.add('active');
			    mobileMenu.classList.add('active');
				bodyEl.classList.add('lock');
			}
		});

       /*   клик по мобильному меню*/  
		mobileMenu.addEventListener('click', () => {
			menuToggle.classList.remove('active');
			mobileMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
		});
	}
	/*HEADER SLIDER */
	var headerSwiper = new Swiper(".header-slider", {
		loop: true,
		speed: 1000,
		effect: "fade",
		autoplay: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	var serviceSlider = new Swiper(".service-swiper", {
		
		loop: true,
		speed: 1000,
		slidesPerView: 1.1,
		spaceBetween: 16,
		autoplay: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			640: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
				
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
				
			},
			1440:{
				slidesPerView: 4,
				spaceBetween: 20,
			}
		},
	});
})