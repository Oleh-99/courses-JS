// Task 1

console.log("Task 1");

function arrToSplit(strSplit) {
	return strSplit.split( );
}

var strSplit = arrToSplit ("Lorem ipsum dolor sit amet consectetur");
console.log(strSplit)

// Task 2

console.log("Task 2");

function arrToLength(strLength) {
	return strLength.length;
}

var strLength = arrToLength ("Lorem ipsum dolor sit amet consectetur");
console.log(strLength)

// Task 3

console.log("Task 3");

function splitString(stringToSplit, separator) {
	var arrayOfStrings = stringToSplit.split(separator);

  	console.log(arrayOfStrings.join("/"));
}

var tempestString = "Lorem ipsum dolor sit amet consectetur";
var space = " ";

splitString(tempestString, space);

// Task 4

console.log("Task 4");

let string = "Lorem ipsum dolor sit amet consectetur";

function stringToUpperCase (string) {
	return string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(" ")
}

console.log(stringToUpperCase(string));

// Task 5

console.log("Task 5");

var text1 = "Lorem ipsum dolor sit amet consectetur";
var text2 = "lorem ipsum dolor sit amet consectetur";

function stringComparison (text1, text2) {
	return text1.toUpperCase() == text2.toUpperCase();
}

console.log(stringComparison (text1, text2));

// Task 6

console.log("Task 6");

var searchingWord = "Dolor";

function stringSearch (text1, searchingWord) {
	return text1.toUpperCase().indexOf(searchingWord.toUpperCase())
}

console.log(stringSearch (text1, searchingWord));

// Task 7

console.log("Task 7");

let stringLow = "Lorem ipsum dolor sit amet consectetur";

function stringCamelCase (stringLow) {
	stringLow = stringLow.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join("")
	return stringLow.split(/\s+/).map(word => word[0].toLowerCase() + word.substring(1)).join("")
}

console.log(stringCamelCase (stringLow));

// Task 8

console.log("Task 8");

function splitSnake(stringToSnake, snake) {
	var arrayOfSnake = stringToSnake.split(snake);
	return arrayOfSnake.join("_");
}

var tempestSnake = "Lorem ipsum dolor sit amet consectetur";
var spaces = " ";

console.log(splitSnake(tempestSnake, spaces));

// Task 9

console.log("Task 9");

var world = "Lorem";
var number = 5;

function stringRepetition (world, number) {
	for (let i = 0; i <= number - 1; i++) {
		console.log(world);
	}
}

stringRepetition (world, number);

// Task 10

console.log("Task 10");

var textWithSymbol = "Lorem ipsum - dolor sit amet consectetur";
var symbol = "-"

function stringSearchSymbol (textWithSymbol, symbol) {
	let numberSymbol = textWithSymbol.indexOf(symbol);
	console.log(textWithSymbol.substr(0, numberSymbol - 1));
}

stringSearchSymbol (textWithSymbol, symbol) 

// Task 11

console.log("Task 11");

var worldNumber = "consectetur"

function stringWordsNumbers(worldNumber) {
	let numbertext = worldNumber.split("").length,
	    a = 0, 
	    b = 3;

	for (let i = b; i <= numbertext; i += b) {
		console.log(worldNumber.substr(a, b));
		a = i;
	}

	if (numbertext > a) {
		console.log(worldNumber.substr(a, b));
	}
}

stringWordsNumbers(worldNumber);

// Task 12

console.log("Task 12");

var worldParam = "consectetur"

function stringNumberParam (worldParam) {
	let numberParam = worldParam.length;
	return numberParam;
}

console.log(stringNumberParam (worldParam));

// Task 13

console.log("Task 13");

var worldLrtter = "consectetur"

function stringLettersSort (worldLrtter) {
	var letterSort = worldLrtter.split("");
	console.log( letterSort.sort());
}

stringLettersSort (worldLrtter);

// Task 14

console.log("Task 14");

var arr = "вишня, груша, слива, груша";

function removeDuplicate(arr) {
	arr = arr.split(",");
	var result = [];
	for(var i = 0; i < arr.length ; i++) {
		if(result.indexOf(arr[i]) == -1) result.push(arr[i]);
	}

	return result = result.join(", ");

}

console.log(removeDuplicate(arr))

// Task 15 

console.log("Task 15");

let stringUpp = "consectetur";

function stringCamelCaseUpp (stringUpp) {
	return stringUpp.toUpperCase().split(/\s+/).map(word => word[0].toLowerCase() + word.substring(1)).join(" ")
}

console.log(stringCamelCaseUpp (stringUpp));

// Task 16 

console.log("Task 16");

var type = "111"

function scringTypeOf (type) {
	return typeof(type)
}

console.log(scringTypeOf (type));

// Task 17

console.log("Task 17");

var str = "Lorem, Ipsum, Sit, Consectetur" ;

function removeDupli(str) {
	str = str.split(",");
	let maxLength = 0,
		a
	for(let i = 0; i < str.length; i++) {

		if (str[i].length >= maxLength) {
			a = i;
			maxLength = str[i].length;
		}
	}

	return str[a];

}

console.log(removeDupli(str))

// Task 18 

console.log("Task 18");

var str = "Lorem qwertyuiop, Ipsum qwer, Sit qwe qwertyuio, Consectetur qwert" ;

function removeDupli(str) {
	str = str.split(",");
	console.log(str);
	let maxLength = 0,
		a
	for(let i = 0; i < str.length; i++) {

		if (str[i].length >= maxLength) {
			a = i;
			maxLength = str[i].length;
		}
	}

	maxsting = str[a];
	
	return maxsting.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);;

}

console.log(removeDupli(str))

