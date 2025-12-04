// Arrays

let arr = new Array();
let arr2 = [];   

let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange
console.log( fruits[2] ); // Plum

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

// mix of values
let arr3 = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr3[1].name ); // John

// get the function at index 3 and run it
arr3[3](); // hello

// length
let fruits5 = ["Apple", "Orange", "Plum"];
console.log( fruits5[fruits5.length-1] ); // Plum

// pop
let fruits1 = ["Apple", "Orange", "Pear"];
console.log( fruits1.pop() ); // remove "Pear" and alert it
console.log( fruits1 ); // Apple, Orange

// push
let fruits2 = ["Apple", "Orange"];
fruits2.push("Pear");
console.log( fruits2 ); // Apple, Orange, Pear

//shift
let fruits3 = ["Orange", "Pear"];
fruits3.unshift('Apple');
console.log( fruits3 ); // add one element

let fruits4 = ["Apple"];

fruits4.push("Orange", "Peach");
fruits4.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log( fruits4 );

// Array loops 
let arr5 = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr5.length; i++) {
  console.log( arr5[i] ); // apple , orange, pear
}
