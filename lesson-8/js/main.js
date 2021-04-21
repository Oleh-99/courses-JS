(function($) {
	var apiKey = 'WVEgiSInGXai1zSVMYF8CWe5huRwfA-cS4W7RmUDQEg';

	function loadingPage() {
		if (!sessionStorage.getItem('dataPhoto')) {
			$.ajax({
				url: `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=12`, 
				
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

		for (let index = 0; index < data.length; index++) {
			$('.single-item').append(
				`<div>
					<img src="${data[index].urls.raw}&fit=crop&w=350&h=350" alt="">
				</div>`
			);
		}
	}

	function initSlider() {
		if ('undefined' === typeof $.fn.slick) {
			return;
		}

		$('.single-item').each(function() {
			var $this = $(this);
			var $thisData = $this.data('option');
			$this.slick(renderSlider($thisData));
		});

		function renderSlider(data) {
			var config = {
				infinite: data.infinite,
				dots: data.dots,
				slidesToShow: data.desktop,
			};

			if (data.slidesToScroll) {
				config.slidesToScroll = data.slidesToScroll;
			}

			if (data.arrowWrapper) {
				config.appendArrows = $(`.${data.arrowWrapper}`);
				config.prevArrow = '<button class="btn prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>';
				config.nextArrow = '<button class="btn next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>';
			}

			if (data.lazyLoad) {
				config.lazyLoad = data.lazyLoad;
			}

			config.responsive = [
				{
					breakpoint: 993,
					settings: {
						slidesToShow: data.tablet,
					}
				},
				{
					breakpoint: 450,
					settings: {
						slidesToShow: data.mobile,
					}
				},
			];

			return config;
		}
	}

	function search() {
		var info = {};

		if (sessionStorage['Search']) {
			info = JSON.parse(sessionStorage.getItem('Search'));
		}

		$('.input-search').on('keyup', function() {
			var $thisInput = $('.input-search').val();
			
			if(2 <= $thisInput.length) {
				if('undefined' === typeof info[$thisInput]) {
					$.ajax({
						url: `https://api.unsplash.com/search?query=${$thisInput}&client_id=${apiKey}`, 
						
						success: function(data) {
							info[$thisInput] = data;
							sessionStorage.setItem('Search', JSON.stringify(info));
							removeSearch();
							renderSearch(info[$thisInput]);
						},
						error: function() {
							alert('Error');
						}
					});
				} else {
					removeSearch();
					renderSearch(info[$thisInput]);
				}		
			} else {
				removeSearch();
			}
		});
	}

	function renderSearch(date) {
		$('.input-wrapper').append(`<div class="render-search"></div>`);

		for (let index = 0; index < date.photos.results.length; index++) {

			$('.render-search').append(
				`<div class="result"><img src="${date.photos.results[index].urls.thumb}" alt=""></div>`
			);
		}
	}

	function removeSearch() {
		$('.render-search').remove();
	}

	function renderCard() {
		let data = JSON.parse(sessionStorage.getItem('dataPhoto'));

		for (let index = 0; index < data.length; index++) {
			if (!data[index].user.bio) {
				data[index].user.bio = '';
			}
			$('.cards-wrapper').append(
				`<div class="col-ms-12 col-md-6 col-lg-4 col-md-12">
					<div class="card">
						<img class="card-img-top" src="${data[index].urls.raw}&fit=crop&w=350&h=200" alt="Card image cap">
						<div class="card-body">
							<h5 class="card-title">${data[index].user.name}</h5>
							<p class="card-text">${data[index].user.bio}</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated ${new Date(data[index].user.updated_at)}</small>
						</div>
					</div>
				</div`
			);
		}
	}
		


	$(document).ready(function() {
		loadingPage();
		initSlider();
		search();
		renderCard();
	});

})(jQuery);