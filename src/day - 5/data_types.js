// Uppercase
let str = "hello";

console.log(str.toUpperCase() );

// fixed case
let n = 1.2345;

console.log( n.toFixed(2));

//Number
//The way to write a number
let billion = 1e9;
let billion2 = 1_000_000_000;
console.log( billion );

let mcs = 1e-6;
console.log(mcs);

1e3 === 1 / 1000;// 0.001
1.23e-6 === 1.23/ 1000000; // 0.00000123
1234e-2 === 1234/ 100; //12.34
console.log(1.23e-6);

// Hex,binary and octal numbers
console.log( 0xff ); // 255
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log( a == b ); // true, the same number 255 at both sides

// tosring (Base)
let num = 255;
console.log( num.toString(16) );  // ff
console.log( num.toString(2) );   // 11111111

// Math.round
let num2 = 12.34;
console.log( num2.toFixed(1) );

//toFixed
let num3 = 12.36;
console.log( num3.toFixed(1) );

// +num.toFixed(5)
let num4 = 12.34;
console.log( num.toFixed(5) );

// String
// Special characters
let str1 = "Hello\nworld";
let str2 = `Hello
world`;

console.log(str1 == str2);

// string are immutable    
let str3 = 'Hi';

str3[0] = 'h';// doesn't work
console.log(str3[0]);

// Changing the case
console.log( 'Interface'.toUpperCase() );
console.log( 'Interface'.toLowerCase() );
console.log( 'Interface'[0].toLowerCase() );

// substring
let word = 'Widget with id';

console.log( word.indexOf('widget') );// 0, because 'Widget' is found at the beginning
console.log( word.indexOf('widget') );// -1, not found, the search is case-sensitive

console.log(word.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

console.log( "Widget".includes("id") ); // true 
console.log( "Widget".startsWith("Wid") ); // true
console.log( "Widget".endsWith("get") ); // true

let centence = "stringify";
console.log( centence.slice(0,5) ); //strin