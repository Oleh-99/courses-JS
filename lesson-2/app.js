// Task1

var $buttonTask1 = document.getElementsByClassName('buttonT1')[0];
$buttonTask1.addEventListener('click', function () {
	alert('Hello world');
})

// Task2

var $buttonTask2 = document.getElementsByClassName('buttonT2')[0];
$buttonTask2.addEventListener('click', function () {
	var text = document.getElementsByClassName('formT2')[0].value;
	if(text === '') {
		document.getElementsByClassName('formT2')[0].value = 'Error';
	} else {
		alert(text);
	}

})

// Task3

var $buttonTask3 = document.getElementsByClassName('buttonT3')[0];
$buttonTask3.addEventListener('click', function () {
	var num = document.getElementsByClassName('formT3')[0].value;
	num = Math.pow(parseInt(num), 2) ;
	if(isNaN(num)){
		document.getElementsByClassName('formT3')[0].value = 'Error';
	}else {
		document.getElementsByClassName('formT3')[0].value = num;
	}
})

// Task4

var $buttonTask4 = document.getElementsByClassName('buttonT4')[0];
$buttonTask4.addEventListener('click', function () {
	var text1 = document.getElementsByClassName('formT4')[0].value;
	var text2 = document.getElementsByClassName('formT4')[1].value;
	if(text1 ==='' && text2 === '') {
		document.getElementsByClassName('formT4')[0].value = 'Error';
		document.getElementsByClassName('formT4')[1].value = 'Error';
	} else{
		document.getElementsByClassName('formT4')[0].value = text2;
		document.getElementsByClassName('formT4')[1].value = text1;
	}
	
})

// Task5

var $buttonTask5 = document.getElementsByClassName('buttonT5')[0];
$buttonTask5.addEventListener('click', function () {

	if($buttonTask5.classList.contains('newButton') === false){
		$buttonTask5.classList.add('newButton');
		$buttonTask5.innerHTML = 'button-new';
	}else {
		$buttonTask5.classList.remove('newButton');
		$buttonTask5.innerHTML = 'button';
	}	
})

// Task6

var $buttonTask6 = document.getElementsByClassName('buttonT6')[0];
$buttonTask6.addEventListener('click', function () {
	document.getElementsByClassName('formT6')[0].style.color ="red";
})

// Task7
var formT7 = document.getElementsByClassName('formT7')[0];

var $buttonTask7 = document.getElementsByClassName('buttonT7')[0];
$buttonTask7.addEventListener('click', function () {
	if(formT7.classList.contains('readOnly') === false){
		formT7.classList.add('readOnly');
		document.getElementsByClassName('formT7')[0].readOnly = true;
	}	
})

var $buttonTask7 = document.getElementsByClassName('buttonT7')[1];
$buttonTask7.addEventListener('click', function () {
	if(formT7.classList.contains('readOnly') === true){
		formT7.classList.remove('readOnly');
		document.getElementsByClassName('formT7')[0].readOnly = false;
	}	
})

// Task8

var $buttonTask8 = document.getElementsByClassName('buttonT8')[0];
$buttonTask8.addEventListener('mouseenter', function () {
	alert('Hello world');
})

// Task9

var $buttonTask9 = document.getElementsByClassName('buttonT9')[0];
$buttonTask9.addEventListener('dblclick', function () {
	alert('Hello world');
})

// Task10

var $buttonTask10 = document.getElementsByClassName('buttonT10')[0];
$buttonTask10.addEventListener('click', function () {
	var imgT10 = document.getElementsByClassName('imgT10')[0]

	if(imgT10.classList.contains('newImg') === false){
		imgT10.classList.add('newImg');
		imgT10.src = 'asset_206f19f9-35a2-4c69-9d7f-0b6be11a9f08.jpg';
	}else {
		imgT10.classList.remove('newImg');
		imgT10.src = 'asset_5e000e2e-76dd-4f78-b88f-127fb9c4e8b9.jpg';
	}	
})

// Task11

var $imgT11 = document.getElementsByClassName('imgT11')[0];
$imgT11.addEventListener('mouseover', function () {
	this.src = 'asset_206f19f9-35a2-4c69-9d7f-0b6be11a9f08.jpg';	
})

var $imgT11 = document.getElementsByClassName('imgT11')[0];
$imgT11.addEventListener('mouseout', function () {
	this.src = 'asset_5e000e2e-76dd-4f78-b88f-127fb9c4e8b9.jpg';
})

// Task12 

var formT12 = document.getElementsByClassName('formT12')[0];

var $buttonTask12 = document.getElementsByClassName('buttonT12')[0];
$buttonTask12.addEventListener('click', function () {
	if(formT12.classList.contains('delete') === false){
		formT12.classList.add('delete');
		document.getElementsByClassName('formT12')[0].style.display = 'none';
	}	
})

var $buttonTask12 = document.getElementsByClassName('buttonT12')[1];
$buttonTask12.addEventListener('click', function () {
	if(formT12.classList.contains('delete') === true){
		formT12.classList.remove('delete');
		document.getElementsByClassName('formT12')[0].style.display = 'block';
	}	
})

// Task 13

var $buttonTask13 = document.getElementsByClassName('buttonT13')[0];
$buttonTask13.addEventListener('click', function () {
	document.getElementsByClassName('formT13')[0].style = 'color: red; width: 300px';
})

// Task 14

var clickToButton = 0;

var $buttonTask14 = document.getElementsByClassName('buttonT14')[0];
$buttonTask14.addEventListener('click', function () {
	clickToButton++;
	this.innerHTML = 'Button click ' + clickToButton;
})

// Task 15

var $buttonTask15 = document.getElementsByClassName('buttonT15')[0];
$buttonTask15.addEventListener('click', function () {
	var elm =  document.getElementsByClassName('formT15')[0];
	
	document.getElementsByClassName('formT15')[0].value = elm.className;
})

// Task 16

var $buttonTask16 = document.getElementsByClassName('buttonT16')[0];
$buttonTask16.addEventListener('click', function () {
	var name =  document.getElementsByClassName('formT16')[0].value;
	var surname =  document.getElementsByClassName('formT16')[1].value;
	var date =  document.getElementsByClassName('formT16')[2].value;
	var residence =  document.getElementsByClassName('formT16')[3].value;
	var tel =  document.getElementsByClassName('formT16')[4].value;
	alert('Имя ' + name + '; Фамилия ' + surname + '; Дата ' + date + '; Проживання ' + residence + '; тел ' + tel)
})

// Task 17

var $buttonTask17 = document.getElementsByClassName('buttonT17')[0];
$buttonTask17.addEventListener('click', function () {
	var login =  document.getElementsByClassName('formT17')[0].value;
	var pass =  document.getElementsByClassName('formT17')[1].value;
	var passRepeat =  document.getElementsByClassName('formT17')[2].value;

	if (pass === passRepeat) {
		alert ('Ви зареєстровані')
	}else {
		alert ('error')
	}
})


