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
const firstName = programmers.map(programmerFirstName);
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

// SORT NAME BASED ON LENGTH
let sortFirstBasedOnLength = firstName.sort((a, b) => a.length - b.length);
document.getElementById('3.8').innerHTML = sortFirstBasedOnLength;
let sortLastBasedOnLength = lastName.sort((a, b) => a.length - b.length);
document.getElementById('3.9').innerHTML = sortLastBasedOnLength;
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const betterProgrammersWithL = programmers.filter((bar) => bar.startsWith('L'));
document.getElementById('4.0').innerHTML = betterProgrammersWithL;

const betterProgrammersWithT = programmers.filter((bar) => bar.startsWith('T'));
document.getElementById('4.1').innerHTML = betterProgrammersWithT;

// const betterProgrammersLessThanFour = programmers.sort(
// 	(a, b) => a.split(' ')[0].length - b.split(' ')[0].length
// );
const betterProgrammersLessThanFour = firstName.filter(function (firstName) {
	return firstName.length <= 4;
});
// console.log(betterProgrammersLessThanFour);
document.getElementById('4.2').innerHTML = betterProgrammersLessThanFour;

const moreThanFour = firstName.filter(function (firstName) {
	return firstName.length > 4;
});
document.getElementById('4.3').innerHTML = moreThanFour;

const greaterThan8 = programmers.filter(function (programmers) {
	return programmers.length > 8;
});
document.getElementById('4.4').innerHTML = greaterThan8;

const lessThan8 = programmers.filter(function (programmers) {
	return programmers.length <= 8;
});
document.getElementById('4.5').innerHTML = lessThan8;
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const kAndN = lastName.filter(function (lastName) {
	return lastName.startsWith('K');
});
console.log(kAndN);
