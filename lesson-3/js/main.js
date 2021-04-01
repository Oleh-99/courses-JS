// TAGS

var $buttonTags = document.getElementsByClassName('btnTags');

for (let i = 0; i < $buttonTags.length; i++) {
	var $btnTags = $buttonTags[i];
	$btnTags.addEventListener('click', function () { 
		var $new;
		var $bestsellers;
		var $commingSoon;

		for (let d = 0; d < $buttonTags.length; d++) {
			if($buttonTags[d].classList.contains('active')) {
				$buttonTags[d].classList.remove('active');
				$buttonTags[d].classList.add('transparentNew');
			}
		}

		if (i === 0) {
			$new = 'display: block';
			$bestsellers = 'display: none';
			$commingSoon = 'display: none';
		}

		if (i === 1) {
			$new = 'display: none';
			$bestsellers = 'display: block';
			$commingSoon = 'display: none';
		}

		if (i === 2) {
			$new = 'display: none';
			$bestsellers = 'display: none';
			$commingSoon = 'display: block';
		}

		document.getElementsByClassName('new')[0].style = $new;
		document.getElementsByClassName('bestsellers')[0].style = $bestsellers;
		document.getElementsByClassName('commingSoon')[0].style = $commingSoon;
		this.classList.add('active');
		this.classList.remove('transparentNew');
	});
}

// ACARDION

var $buttonAcard = document.getElementsByClassName('btn-acard');

for (let i = 0; i < $buttonAcard.length; i++) {
	var $btnAcard = $buttonAcard[i];
	$btnAcard.addEventListener('click', function () { 
		var $textAcar1;
		var $textAcar2;
		var $textAcar3;
		var $textAcar4;

		for (let d = 0; d <  $buttonAcard.length; d++) {
			if ($buttonAcard[d].classList.contains('active')) {
				$buttonAcard[d].classList.remove('active');
				document.getElementsByClassName('btn-acard')[d].style.transform = 'rotate(0)';
			}
		}

		if (i === 0) {
			$textAcar1 = 'display: block';
			$textAcar2 = 'display: none';
			$textAcar3 = 'display: none';
			$textAcar4 = 'display: none';
		}

		if (i === 1) {
			$textAcar1 = 'display: none';
			$textAcar2 = 'display: block';
			$textAcar3 = 'display: none';
			$textAcar4 = 'display: none';
		}

		if (i === 2) {
			$textAcar1 = 'display: none';
			$textAcar2 = 'display: none';
			$textAcar3 = 'display: block';
			$textAcar4 = 'display: none';
		}

		if (i === 3) {
			$textAcar1 = 'display: none';
			$textAcar2 = 'display: none';
			$textAcar3 = 'display: none';
			$textAcar4 = 'display: block';
		}

		document.getElementsByClassName('question-text1')[0].style = $textAcar1;
		document.getElementsByClassName('question-text2')[0].style = $textAcar2;
		document.getElementsByClassName('question-text3')[0].style = $textAcar3;
		document.getElementsByClassName('question-text4')[0].style = $textAcar4;
		document.getElementsByClassName('btn-acard')[i].style.transform = 'rotate(180deg)';
		this.classList.add('active');
	});
}

// ACARDION V. 2

var $buttonAcardV2 = document.getElementsByClassName('btn-acardion');

for (let i = 0; i < $buttonAcardV2.length; i++) {
	var $btnAcardV2 = $buttonAcardV2[i];
	$btnAcardV2.addEventListener('click', function () { 
		var $textAcar1;
		var $textAcar2;
		var $textAcar3;
		var $textAcar4;

		if (i === 0) {
			$textAcar1 = 'display: block';
			document.getElementsByClassName('btn-acardion')[i].style.transform = 'rotate(180deg)';
			console.log(i);

			if (this.classList.contains('active')) {
				this.classList.remove('active');
				document.getElementsByClassName('btn-acardion')[i].style.transform = 'rotate(0)';
				$textAcar1 = 'display: none';
			}
			this.classList.add('active');
		}

		if (i === 1) {
			$textAcar2 = 'display: block';
			document.getElementsByClassName('btn-acardion')[i].style.transform = 'rotate(180deg)';

			if ($btnAcardV2.classList.contains('active')) {
				$btnAcardV2.classList.remove('active');
				document.getElementsByClassName('btn-acardion')[i].style.transform = 'rotate(0)';
				$textAcar2 = 'display: none';
			}
			this.classList.add('active');
		}

		if (i === 2) {
			$textAcar3 = 'display: block';
			document.getElementsByClassName('btn-acardion')[i].style.transform = 'rotate(180deg)';

			if ($btnAcardV2.classList.contains('active')) {
				$btnAcardV2.classList.remove('active');
				document.getElementsByClassName('btn-acardion')[i].style.transform = 'rotate(0)';
				$textAcar3 = 'display: none';
			}
			this.classList.add('active');
		}

		if (i === 3) {
			$textAcar4 = 'display: block';
			document.getElementsByClassName('btn-acardion')[i].style.transform = 'rotate(180deg)';

			if ($btnAcardV2.classList.contains('active')) {
				$btnAcardV2.classList.remove('active');
				document.getElementsByClassName('btn-acardion')[i].style.transform = 'rotate(0)';
				$textAcar4 = 'display: none';
			}
			this.classList.add('active');
		}

		document.getElementsByClassName('question-acardion-text1')[0].style = $textAcar1;
		document.getElementsByClassName('question-acardion-text2')[0].style = $textAcar2;
		document.getElementsByClassName('question-acardion-text3')[0].style = $textAcar3;
		document.getElementsByClassName('question-acardion-text4')[0].style = $textAcar4;
		
		
	});
}