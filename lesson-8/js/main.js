(function($) {
	var apiKey = 'WVEgiSInGXai1zSVMYF8CWe5huRwfA-cS4W7RmUDQEg';


	
	function loadingPage() {
		if (!sessionStorage.getItem('dataPhoto')) {
			$.ajax({
				url: `https://api.unsplash.com/photos/?client_id=${apiKey}`, 
				success: function(data) {
					sessionStorage.setItem('dataPhoto', JSON.stringify(data));
					creatingSlider();
				},
				error: function() {
					alert('Error');
				}
			});
		} else {
			creatingSlider();
		}
	}

	function creatingSlider() {
		let data = JSON.parse(sessionStorage.getItem('dataPhoto'));
		let $slider = $('.slider-wrapper').find('.swiper-wrapper');

		for (let index = 0; index < data.length; index++) {
			$slider.append(
				`<div class="swiper-slide">
					<img src="${data[index].urls.regular}" alt="">
				</div>`
			);
		}
		slider();
	}

	function slider() {
		var $swipers = $('.swiper-container');

		// if (0 === $swipers.length || 'undefined' === typeof Swiper) {
		// 	return;
		// }

		$swipers.each(function() {
			var $this = $(this);
			var $thisData = $this.data('option');
			new Swiper(this, renderSlider($thisData));
		});

		function renderSlider(data) {
			var config = {
				loop : data.loop,
			};

			config.breakpoints = {
				1024: {
					slidesPerView: data.desktop,
				},
				993: {
					slidesPerView: data.tablet,
				},
				150: {
					slidesPerView: data.mobile,
				},
			};
	
			if (data.spaceBetween) {
				config.spaceBetween = data.spaceBetween;
			}

			if (data.pagination) {
				config.pagination = {
					el: '.swiper-pagination',
					clickable: true,
				};
			}

			if (data.navigation) {
				config.navigation = {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				  };
			}

			if (1 < config.slidesPerView) {
				
			}

			if (data.loopedSlides) {
				config.loopedSlides = data.loopedSlides;
			}
	
			console.log(config);
			return config;
		}
	}


	$(document).ready(function() {
		loadingPage();
		// creatingSlider();
	});

})(jQuery);