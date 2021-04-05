
$('.buttonTag').click(function () { 
	var btn =  $(this).attr('data-btn');
	console.log(btn);
	$('.buttonTag').removeClass('active')
	$(this).toggleClass('active').parent().siblings();

	$('.tagContent').each(function() {
		$(this).removeClass('active');
		if (btn === $(this).attr('data-value')) {
			$(this).addClass('active');
		}
	})
});


// ACARDION

$('.questions-inner').each (function() {
	$(this).find('.question').click(function () {
		var wrapper = $(this).find('.question')

		if ($(this).parent().attr('data-version')  === 'all' ) {
			$(this).toggleClass('active').find('.question-text').slideToggle();
		}
		if ($(this).parent().attr('data-version')  === 'one') {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).find('.question-text').slideToggle();
			} else {
				$(this).siblings().removeClass('active')
				$(this).siblings().find('.question-text').slideUp();
				$(this).addClass('active').find('.question-text').slideToggle();
			}
		}
	});
})

// Slider 

$('.arrow-inner-wrapper').each (function () {
	$(this).find('.arrow-inner').click(function () {
		var $foto = $('.fotoNew');
		var number;

		number = $('.fotoNew.active').index();
		$foto.removeClass('active')
		$foto.removeClass('prev')
		$foto.removeClass('next')

		if ($(this).attr('data-direction') === 'left') {
			number --
		}

		if ($(this).attr('data-direction') === 'right') {
			number ++
		}

		if(number === $foto.length) {
			number = 0;
		}

		$foto.eq(number).addClass('active');
		$foto.eq(number - 1).addClass('prev');
		$foto.eq(number + 1).addClass('next'); 

		if(number === $foto.length - 1) {
			$foto.eq(0).addClass('next'); 
		}
		

		
		// if (foto.hasClass('next')) {
		// 	number = $('next').index();
		// 	foto.removeClass('prev').removeClass('next')
		// } else {
		// 	number = foto.index();
		// }

		

		// console.log(number);

		
		// $('.fotoNew').eq(number - 1).addClass('prev');
		// $('.fotoNew').eq(number + 1).addClass('next');
		// if (number === 0) {
		// 	$('.fotoNew').eq(foto.length).addClass('prev');
		// }

		// if (number === foto.length) {
		// 	$('.fotoNew').eq(0).addClass('next');
		// }
		


		// for (let i = 0; i <  foto.length; i++) {
		// 	if($(this).hasClass('active')) {
		// 		$(this).prev().addClass('prev')
		// 		$(this).next().addClass('next')
		// 		console.log(i);

		// 		if (0 === i) {
		// 			foto.last().addClass('prev')
		// 		}

		// 		if (foto.length === i) {
		// 			foto.first().addClass('next')
		// 		}
		// 	}

		// 	console.log(i);
		// }

		// if()
		// $('.fotoNew').each (function () {
		// 	if($(this).hasClass('active')) {
		// 		number = $(this).indexOf()
		// 	}
		
		//console.log(foto.indexOf());
		// console.log($(this).attr('data-direction'));
		// console.log(number);
		
	})
})




// // Slider 

// var $buttonSlider = document.getElementsByClassName('arrow-inner');
// var $foto = document.getElementsByClassName('fotoNew');

// for (let i = 0; i < $buttonSlider.length; i++) {
// 	var $btnSlider = $buttonSlider[i];
// 	$btnSlider.addEventListener('click', function () { 
// 		var fotoNumb;

// 		for (let d = 0; d <  $foto.length; d++) {
// 			if ($foto[d].classList.contains('active')) {
// 				fotoNumb = d + 1;
// 				$foto[d].classList.remove('active');
// 			}
// 		}

// 		if (this.dataset.direction === '1') {
// 			fotoNumb ++;
// 		}

// 		if (this.dataset.direction === '-1') {
// 			fotoNumb --;
// 		}

// 		if ($foto.length + 1 <= fotoNumb) {
// 			fotoNumb = 1;
// 		}

// 		if (0 === fotoNumb) {
// 			fotoNumb = $foto.length;
// 		}

// 		for (let d = 0; d <  $foto.length; d++) {
// 			if (d + 1 === fotoNumb) {
// 				$foto[d].classList.add('active');
// 			}
// 		}
// 	});
// }