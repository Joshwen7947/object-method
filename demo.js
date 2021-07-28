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
/////////////////////////////////////////////////////////////////////////
// .map()
// foo is an element from the list.  Ex. element 0, element 1, element 2, etc.
programmers.map((foo) => console.log(typeof foo));
// console.log(typeof foo) === 31 strings (typeof e inside array)

// 2nd e is the index (original array)
programmers.map((foo, idx) => console.log(foo + ':' + idx));
// The above will output the array elements and their position in the array

//.map() will always return(something) an array of functions
// define a variable based on an expression(something that happened)
const bar = programmers.map((foo) => foo.split(' ')[0]);
console.log({ bar }); //dennis, brian, ken, etc.
console.log(typeof bar); //object
//

/////////////////////////////////////////////////////////////////////////
// .filter() for gold ~ Keep all where something is true
// MUST have a function
// needs to value to True or False
const filterForLoi = programmers.filter((bar) => bar.split(' ')[0] === 'Loi');
console.log(filterForLoi); //Pulls any object with 'Loi'

const filterForGold = programmers.filter((bar) => bar.split('').includes('N'));
console.log(filterForGold); //Satoshi Nakamoto", "Tuan Nguyen

/////////////////////////////////////////////////////////////////////////
// .sort() ~ will take an a & b (a,b)
console.log(programmers);
const go = programmers.sort(
	(a, b) => a.split(' ')[0].length - b.split(' ')[0].length
);
console.log({ go });

/////////////////////////////////////////////////////////////////////////
// .reduce(0)
const fizz = programmers.reduce((foo, cur) => {
	return cur.split(' ')[0] + foo;
});
console.log(fizz);
