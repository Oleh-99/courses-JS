// TABS

var $buttonTags = document.getElementsByClassName('buttonTag');
var $tagContent = document.getElementsByClassName('tagContent');

for (let i = 0; i < $buttonTags.length; i++) {
	var $btnTags = $buttonTags[i];
	$btnTags.addEventListener('click', function () { 

		for (let d = 0; d < $buttonTags.length; d++) {
			if($buttonTags[d].classList.contains('active')) {
				$buttonTags[d].classList.remove('active');
			}
		}

		for (let k = 0; k < $tagContent.length; k++) {
			var tagInner = $tagContent[k];
			tagInner.classList.remove('active');

			if (tagInner.dataset.value === this.dataset.btn) {
				tagInner.classList.add('active');
			}
		}		

		this.classList.add('active');
	});
}

// ACARDION

var $buttonAcard = document.getElementsByClassName('question-inner');
var $textAcard = document.getElementsByClassName('question-text');

for (let i = 0; i < $buttonAcard.length; i++) {
	var $btnAcard = $buttonAcard[i];
	$btnAcard.addEventListener('click', function () { 

		for (let d = 0; d <  $buttonAcard.length; d++) {
			if ($buttonAcard[d].classList.contains('active')) {
				$buttonAcard[d].classList.remove('active');
			}
		}

		for (let k = 0; k <	$textAcard.length; k++) {
			var textInner = $textAcard[k];

			if ($textAcard[k].classList.contains('active')) {
				textInner.classList.remove('active');
				this.classList.remove('active');

			} else {
				
				if (textInner.dataset.value === this.dataset.btn) {
					textInner.classList.add('active');
					$buttonAcard[i].classList.add('active');
				}
			}
		}	
	});
}


// ACARDION V. 2


var $buttonAcardV2 = document.getElementsByClassName('question-innerV2');
var $textAcardV2 = document.getElementsByClassName('question-textV2');

for (let i = 0; i < $buttonAcardV2.length; i++) {
	var $btnAcardV2 = $buttonAcardV2[i];
	$btnAcardV2.addEventListener('click', function () { 

		for (let k = 0; k <	$textAcardV2.length; k++) {
			var textInnerV2 = $textAcardV2[k];

			if (textInnerV2.dataset.value === this.dataset.btn) {

				if (textInnerV2.classList.contains('active')) {
					textInnerV2.classList.remove('active');
					$buttonAcardV2[i].classList.remove('active');
				} else {
					textInnerV2.classList.add('active');
					$buttonAcardV2[i].classList.add('active');
				}
				
			}							
		}
	});
}

// Slider 

var $buttonSlider = document.getElementsByClassName('arrow-inner');
var $foto = document.getElementsByClassName('fotoNew');

for (let i = 0; i < $buttonSlider.length; i++) {
	var $btnSlider = $buttonSlider[i];
	$btnSlider.addEventListener('click', function () { 
		var fotoNumb;

		for (let d = 0; d <  $foto.length; d++) {
			if ($foto[d].classList.contains('active')) {
				fotoNumb = d + 1;
				$foto[d].classList.remove('active');
			}
		}

		if (this.dataset.direction === '1') {
			fotoNumb ++;
		}

		if (this.dataset.direction === '-1') {
			fotoNumb --;
		}

		if ($foto.length + 1 <= fotoNumb) {
			fotoNumb = 1;
		}

		if (0 === fotoNumb) {
			fotoNumb = $foto.length;
		}

		for (let d = 0; d <  $foto.length; d++) {
			if (d + 1 === fotoNumb) {
				$foto[d].classList.add('active');
			}
		}
	});
}