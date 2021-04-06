// Tabs

$('.tabs').each(function () {
	let product = $(this);
	let $tabs = product.find('.buttonTag');

	$tabs.on('click', function (e) {
		e.preventDefault();
		let $this = $(this);
		let $tabsCategory = $this.data('category');
		let $tabContent = product.find('.tabContent[data-value=' + $tabsCategory + ']');

		$this.parent().siblings().find('.buttonTag').removeClass('active');
		$this.addClass('active');

		$tabContent.siblings().removeClass('active');
		$tabContent.addClass('active');
	})
})


// ACCORDION

$('.questions-inner').each (function() {
	$(this).find('.question').on('click', function () {
		let $this = $(this);

		if ('one' === $this.parent().data('version')) {
			if ($this.hasClass('active')) {
				$this.removeClass('active');
				$this.find('.question-text').slideToggle();
			} else {
				$this.siblings().removeClass('active');
				$this.siblings().find('.question-text').slideUp();
				$this.addClass('active').find('.question-text').slideToggle();
			}
		} else {
			$this.toggleClass('active').find('.question-text').slideToggle();
		}
	});
})

// Slider 

$('.arrow-inner-wrapper').each (function () {
	$(this).find('.arrow-inner').on('click', function () {
		let $this =  $(this);
		let $foto = $('.fotoNew')
		let activeSlide = $this.parent().find('.wrapper > .active');
		$foto.removeClass('prev');

		if ('left' === $this.attr('data-direction')) {
			if (activeSlide.index() === 0) {
				activeSlide.removeClass('active');
				$foto.last().addClass('active').prev().addClass('prev');
			} else {
				activeSlide.removeClass('active');
				activeSlide.prev().addClass('active').prev().addClass('prev');

				if (1 === activeSlide.index()) {
					$foto.last().addClass('prev');
				}
			}
		}

		if ('right' === $this.attr('data-direction')) {
			if ($foto.length === activeSlide.index() + 1) {
				activeSlide.removeClass('active').addClass('prev');
				$foto.first().addClass('active');
			} else {
				activeSlide.removeClass('active').addClass('prev');
				activeSlide.next().addClass('active');
			}
		}
	})
})