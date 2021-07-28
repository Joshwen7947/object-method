console.log('working');
let box = document.getElementById('root');
let numberList = [2, 34, 64, 3, 8, 99, 12, 21, 99, 67];
// This below array is just a string
const programmers = [
	'Dennis Ritchie',
	'Brian Kernighan',
	'Ken Thompson',
	'Linus Torvalds',
	'Bjarne Stroustrup',
	'Tim Berners-Lee',
	'Donald Knuth',
	'Alan Turing',
	'Mark Zuckerberg',
	'Bill Gates',
	'Larry Page',
	'Elon Musk',
	'Jack Dorsey',
	'Satoshi Nakamoto',
	'Ada Lovelace',
	'Grace Hopper',
	'Dan Ambramov',
	'Jordan Walke',
	'Ryan Dahl',
	'David Heinemeier Hansson',
	'Guido van Rossum',
	'Yukihiro Matsumoto',
	'Sergey Brin',
	'Lyndsey Scott',
	'Abhinav Asthana',
	'Abhijit Kane',
	'Ankit Sobti',
	'Loi Tran',
	'Charles Lee',
	'Tuan Nguyen',
	'Tan Vo',
];
// 3.1 ~ Print name of each programmer
// for (let i = 0; i < programmers.length; i++) {
// 	const programmer = programmers[i];
// 	console.log({ programmer });
// }

// FILTER ~ Keep the good stuff
// must take a callback function
function programmerFirstName(e) {
	console.log('First Name:', e);
	return e.split(' ')[0];
}
let firstName = programmers.map(programmerFirstName);
document.getElementById('3.1').innerHTML = firstName;

function programmerLastName(e) {
	console.log('Last Name:', e);
	return e.split(' ')[1];
}
let lastName = programmers.map(programmerLastName);
document.getElementById('3.2').innerHTML = lastName;

function firstNameLength(e) {
	return e.split(' ')[0].length;
}
let firstLength = programmers.map(firstNameLength);
document.getElementById('3.3').innerHTML = firstLength;

function lastNameLength(e) {
	return e.split(' ')[1].length;
}
let lastLength = programmers.map(lastNameLength);
document.getElementById('3.4').innerHTML = lastLength;

function allProgrammerNameLength(e) {
	return e.length - 1;
}
let programmerLength = programmers.map(allProgrammerNameLength);
document.getElementById('3.5').innerHTML = programmerLength;
// MAP ~ Circle each element/item
// SORT ~ sort array
function alphaAtoZ(e) {
	return e.split(' ')[0];
}
let firstNameAlpha = programmers.map(programmerFirstName).sort();
document.getElementById('3.6').innerHTML = firstNameAlpha;

function alphaLastName(e) {
	return e.split(' ')[1];
}
let lastNameAlpha = programmers.map(programmerLastName).sort();
document.getElementById('3.7').innerHTML = lastNameAlpha;
// REDUCE ~ reduce to min output
// SOME
// INCLUDES
// EVERY
// FOREACH
