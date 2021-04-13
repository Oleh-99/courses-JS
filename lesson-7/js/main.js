var swiper = new Swiper('.swiper-container', {
	slidesPerView: 5,
	spaceBetween: 30,
	centeredSlides: true,
	freeMode: true,
	effect: 'coverflow',
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: true,
	},
});