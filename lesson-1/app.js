// Task 1

console.log('Task 1');

function arrToSplit(strSplit) {
	return strSplit.split( );
}

console.log(arrToSplit ('Lorem ipsum dolor sit amet consectetur'))

// Task 2

console.log('Task 2');

function arrToLength(strLength) {
	return strLength.length;
}

console.log(arrToLength ('Lorem ipsum dolor sit amet consectetur'))

// Task 3

console.log('Task 3');

function splitString(stringToSplit, separator) {
	return stringToSplit.replace (/ /g, separator);
}

console.log(splitString('Lorem ipsum dolor sit amet consectetur', '/'));

// Task 4

console.log('Task 4');

function stringToUpperCase (string) {
	return string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
}

console.log(stringToUpperCase('Lorem ipsum dolor sit amet consectetur'));

// Task 5

console.log('Task 5');

function stringComparison (text1, text2) {
	return text1.toUpperCase() === text2.toUpperCase();
}

console.log(stringComparison ('Lorem ipsum dolor sit amet consectetur', 'lorem ipsum dolor sit amet consectetur'));

// Task 6

console.log('Task 6');

function stringSearch (text1, searchingWord) {
	return text1.toUpperCase().indexOf(searchingWord.toUpperCase())
}

console.log(stringSearch ('Lorem ipsum dolor sit amet consectetur', 'Dolor'));

// Task 7

console.log('Task 7');

function stringCamelCase (stringLow) {
	stringLow = stringLow.split(/\s/).map(word => word[0].toUpperCase() + word.substring(1)).join('');

	return stringLow.split(/\s/).map(word => word[0].toLowerCase() + word.substring(1)).join('')
}

console.log(stringCamelCase ('Lorem ipsum dolor sit amet consectetur'));

// Task 8

console.log('Task 8');

function splitSnake(stringToSnake, snake) {	
	return stringToSnake.replace (/ /g, snake);
}

console.log(splitSnake('Lorem ipsum dolor sit amet consectetur', '_'));

// Task 9

console.log('Task 9');

function stringRepetition (world, number) {

	for (let i = 0; i <= number - 1; i++) {
		console.log(world);
	}
}

stringRepetition ('Lorem', 5);

// Task 10

console.log('Task 10');

function stringSearchSymbol (textWithSymbol, symbol) {
	let numberSymbol = textWithSymbol.indexOf(symbol);

	return textWithSymbol.substr(0, numberSymbol - 1);
}

console.log(stringSearchSymbol ('Lorem ipsum - dolor sit amet consectetur', '-'));

// Task 11

console.log('Task 11');

function stringWordsNumbers(worldNumber, numbWord) {
	let numbertext = worldNumber.split('').length;
	let num = 0;
	let arr = [];

	for (let i = numbWord; i <= numbertext; i += numbWord) {
		arr.push(worldNumber.substr(num, numbWord));
		num = i;
	}

	if (numbertext > num) {
		arr.push(worldNumber.substr(num, numbWord));
	}

	return arr;
}
console.log(stringWordsNumbers('consectetur', 3));


// Task 12

console.log('Task 12');

function stringNumberParam (worldParam) {
	return worldParam.length;
}

console.log(stringNumberParam ('consectetur'));

// Task 13

console.log('Task 13');

function stringLettersSort (worldLrtter) {
	return  worldLrtter.split('').sort().join('')
}

console.log(stringLettersSort ('consectetur'));

// Task 14

console.log('Task 14');

function removeDuplicate(arr) {
	arr = arr.split(',');
	var result = [];

	for(var i = 0; i < arr.length ; i++) {
		if(result.indexOf(arr[i]) === -1) result.push(arr[i]);
	}

	return result.join(',');
}

console.log(removeDuplicate('вишня, груша, слива, груша'))

// Task 15 

console.log('Task 15');

function stringCamelCaseUpp (stringUpp) {
	return stringUpp.toUpperCase().split(/\s+/).map(word => word[0].toLowerCase() + word.substring(1)).join(' ')
}

console.log(stringCamelCaseUpp ('consectetur'));

// Task 16 

console.log('Task 16');

function scringTypeOf (type) {
	return typeof type
}

console.log(scringTypeOf ('111'));

// Task 17

console.log('Task 17');

function removeDupli(str) {
	let maxLength = 0;
	let num;

	for(let i = 0; i < str.length; i++) {

		if (str[i].length >= maxLength) {
			num = i;
			maxLength = str[i].length;
		}
	}

	return str[num];
}

console.log(removeDupli('Lorem, Ipsum, Sit, Consectetur'))

// Task 18 

console.log('Task 18');

function removeDupli(str) {
	str = str.split(' ');
	let maxLength = 0;
	let	num;

	for(let i = 0; i < str.length; i++) {

		if (str[i].length >= maxLength) {
			num = i;
			maxLength = str[i].length;
		}
	}

	maxsting = str[num];
	
	return maxsting.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);;

}

console.log(removeDupli('Lorem qwertyuiop, Ipsum qwer, Sit qwe qwertyuio, Consectetur qwert' ))

// Task 19

console.log('Task 19');

function numberOfWords (arr) {
	arr = arr.split(' ');
	let result = 0;

	for (let i = 0; i <= arr.length; i++) {
		result = i;
	}

	return result;	
}

console.log(numberOfWords ('Lorem ipsum dolor sit amet consectetur'));

// Task 20

console.log('Task 20');

function dateProcessing (date) {
	return date.split('-').reverse().join('.')
}

console.log(dateProcessing ('31-12-2030'));

// Task 21

console.log('Task 21');

function mergeArray (arr1, arr2) {
	return arr1.concat(arr2)
}

console.log('Lorem, Ipsum,', 'Sit, Consectetur');

// Task 22

console.log('Task 22');

function arrayAddItem (arr, item) {
	arr.push(item);
	return arr
}

console.log(arrayAddItem(['1', '2','3'], '5'));

// Task 23

console.log('Task 23');


function arrayReverse (arr) {

	return arr.reverse();
}

console.log(arrayReverse (['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur']));

// Task 24

console.log('Task 24');

function deleteItems (arr, item) {
	return arr.filter(arr => arr !== item)
}

console.log(deleteItems (['Lorem', 'ipsum', 'dolor', 'sit'], 'sit'));

// Task 25

console.log('Task 25');

function howOld (dateBirth) {
	return Math.floor((((new Date()) - dateBirth) / (24 * 3600 * 365.25 * 1000 + 1)))
}

console.log(howOld (new Date(1996, 08, 17)));
