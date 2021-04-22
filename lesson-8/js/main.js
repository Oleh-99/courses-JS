(function($) {
	var apiKey = 'WVEgiSInGXai1zSVMYF8CWe5huRwfA-cS4W7RmUDQEg';
	var cacheSearch = [];
	var filter = ['item1', 'item2', 'item3', 'item4', 'item2', 'item1', 'item2', 'item3', 'item4', 'item1', 'item3', 'item4',];

	function loadingPage() {
		if (!sessionStorage.getItem('dataPhoto')) {
			$.ajax({
				url: `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=12`, 
				success: function(data) {
					sessionStorage.setItem('dataPhoto', JSON.stringify(data));
					renderCard();
					creatingSlider();
				},
				error: function() {
					alert('Error');
				},
			});
		} else {
			creatingSlider();
			renderCard();
		}
	}

	function creatingSlider() {
		let data = JSON.parse(sessionStorage.getItem('dataPhoto'));
		var $sliderWrapper = $('.single-item');

		for (let index = 0; index < data.length; index++) {
			$sliderWrapper.append(
				`<div>
					<img src="${data[index].urls.raw}&fit=crop&w=350&h=350" alt="">						
				</div>`
			);
		};

		$sliderWrapper.imagesLoaded()
			.done(function(instance) {
				initSlider();
			});
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
		$('.input-search').on('keyup', function() {
			var $thisInput = $('.input-search').val();
			
			if (2 <= $thisInput.length) {
				if ('undefined' === typeof cacheSearch[$thisInput]) {
					removeSearch();
					addLoaderSearch();

					$.ajax({
						url: `https://api.unsplash.com/search?query=${$thisInput}&client_id=${apiKey}`, 
						success: function(data) {
							if (0 !== data.photos.total) {
								cacheSearch[$thisInput] = data;
								renderSearch(cacheSearch[$thisInput]);
							} else {
								removeLoaderSearch();
								$('.render-search').append(
									`<div class="info">Not information</div>`
								);
							}
						},
						error: function() {
							alert('Error');
						},
					});
				} else {
					removeSearch();
					addLoaderSearch();
					renderSearch(cacheSearch[$thisInput]);
				}		
			} else {
				removeSearch();
			}
		});
	}

	function renderSearch(data) {
		for (let index = 0; index < data.photos.results.length; index++) {
			$('.render-search').append(
				`<div class="result" data-value="${index}"><img src="${data.photos.results[index].urls.raw}&fit=crop&w=300&h=300" alt=""></div>`
			);

			$('.result').imagesLoaded()
			.done(function(instance) {
				$('.result').slideDown(300);
				removeLoaderSearch();
			});	
		}
	}

	function removeSearch() {
		$('.render-search').slideUp(3000).remove();
	}

	function addLoaderSearch() {
		$('.input-wrapper').append(`<div class="render-search"></div>`);
		$('.render-search').slideDown(3000).append(`<div class="loader-result"><div class="loader-gif"></div></div>`);
	}

	function removeLoaderSearch() {
		$('.loader-result').remove();
	}

	function viewSearchFoto() {
		$(document).on('click', '.result', function() {
			var $this = $(this); 
			var id = $this.data('value');
			var searchKey = $this.parent().prev().val();
			var usersInfo = cacheSearch[searchKey].photos.results[id];
			
			removeSearch();
			$('.slider-wrapper').remove();
			$('.filters').remove();
			$('.our-user').remove();

			$.ajax({
				url: `${usersInfo.user.links.photos}?client_id=${apiKey}`, 
				success: function(data) {
					fotoUsers(data);
				},
				error: function() {
					alert('Error');
				},
			});

			$('body').append(
				`<section class="our-user">
					<div class="container">
						<div class="profile">
							<div class="profile-foto">
								<img src="${usersInfo.user.profile_image.large}">
							</div>
							<div class="profile-name">
								<h4>${usersInfo.user.name}</h4>
								<p></p>
							</div>
						</div>
					</div>
				</section>`
			);

			function fotoUsers(data) {
				$('.our-user').find('.container').append('<div class="row"></div>');

				let $profileWrapper = $('.our-user').find('.row');

				for (let index = 0; index < data.length; index++) {
					$profileWrapper.append(
						`<div class="col-sm-12 col-md-6 col-lg-4 foto-wrapper">
						<a href="${data[index].urls.regular}" class="foto-view" data-width="${data[index].width}" data-height="${data[index].height}"><img src="${data[index].urls.raw}&fit=crop&w=350&h=350" alt=""></a>
							<div class="foto-inner">
								<a href="${data[index].links.download}?force=true" class="button"  data-toggle="tooltip" data-placement="top" title="Download"><i class="far fa-cloud-download-alt"></i></a>
							</div>
						</div>`
					);
				}
				$profileWrapper.imagesLoaded()
					.done(function(instance) {
						$profileWrapper.slideDown(300);
						fotoSwipe();
					});	
			}
		});
	}

	function renderCard() {
		let data = JSON.parse(sessionStorage.getItem('dataPhoto'));

		for (let index = 0; index < data.length; index++) {
			if (!data[index].user.bio) {
				data[index].user.bio = '';
			}

			$('.cards-wrapper').append(
				`<div class="col-ms-12 col-md-6 col-lg-4 col-md-12 filters-inner ${filter[index]}" data-value="${filter[index]}">
					<div class="card">
						<div class="foto-wrapper">
							<a href="${data[index].urls.regular}" class="foto-view" data-width="${data[index].width}" data-height="${data[index].height}"><img class="card-img-top" src="${data[index].urls.raw}&fit=crop&w=350&h=200" alt="Card image cap"></a>
							<div class="foto-inner">
								<a href="${data[index].links.download}?force=true" class="button" data-toggle="tooltip" data-placement="top" title="Download"><i class="far fa-cloud-download-alt"></i></a>
							</div>
						</div>						
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

	function fotoSwipe() {
		if ('undefined' === typeof PhotoSwipe) {
			return;
		}

		var $pswp = $('.pswp')[0];
		var attr = $('.filter').find('.active').data('filter');
		console.log(attr);

		if('*' !== attr) {
			var filter = attr;
		} else {
			var filter = '.filters-inner';
		}

		$('.cards-wrapper').each( function() {
			var $pic = $(this).find(filter),
				getItems = function() {
					var items = [];
					$pic.each(function() {
						
						var $this = $(this).find('.foto-view');
						var item = {
							src: $this.attr('href'),
							w: $this.data('width'),
							h: $this.data('height'),
						};
	
						items.push(item);
					});
					return items;
				}
				
			var items = getItems();
	
			$pic.on('click', '.foto-view', function(event) {
				event.preventDefault();
				
				var $index = $(this).parents('.filters-inner').index();
				var options = {
					index: $index,
					bgOpacity: 0.7,
					showHideOpacity: true
				};
	
				new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options).init();
			});
		});
	}

	function filterProduct() {
		var $shopGrid = $('.cards-wrapper');

		if (0 === $shopGrid.length || 'undefined' === typeof Isotope) {
			return;
		}

		$shopGrid.imagesLoaded()
			.done(function(instance) {
				filterloaded();
			});

		function filterloaded() {
			var grid = new Isotope('.cards-wrapper', {
				itemSelector: '.filters-inner',
				layoutMode: 'fitRows',
			});
	
			$('.filter').on('click', 'li', function(e) {
				e.preventDefault();
				let $this = $(this);
				let filterData = $this.data('filter');
	
				$this.siblings().removeClass('active');
				$this.addClass('active');
	
				grid.arrange({
					filter: filterData,
				});
				fotoSwipe();
			});
		}
	}

	function tooltip() {
		var $btnTooltip = $('[data-toggle="tooltip"]');

		if ('undefined' === typeof tooltip || 0 === $btnTooltip.length) {
			return;
		}

		$btnTooltip.tooltip();
	}

	$(document).ready(function() {
		loadingPage();
		search();
		viewSearchFoto();
		fotoSwipe();
		filterProduct();
		tooltip();
	});

})(jQuery);