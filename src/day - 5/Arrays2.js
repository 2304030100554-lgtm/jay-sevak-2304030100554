// New Arrays
let row = new Array(2);
console.log( row[0] );  //undefine
console.log( row.length ); // 2

//multidimensional array
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

console.log( matrix[0][2]); // 3

// tostring
let data = [1, 2, 3];

console.log( data ); // 1,2,3
console.log( String(data) === '1,2,3' ); // true

console.log( [1] + 1 ); // "11"
console.log( [1,2] + 1 ); // "1,21"
console.log( [] + 1 ); // "1"

//splice
let syntex = ["I", "study", "Javascript"];
syntex.splice(1,1);
console.log( syntex ); // ["I", "Javascript"]


let syntex2 = ["I", "study", "JavaScript", "right", "now"];
syntex2.splice(0, 3, "Let's", "dance");
console.log( syntex2 ) // now ["Let's", "dance", "right", "now"]

// slice
let datt = ["t", "e", "s", "t"];
console.log( datt.slice(1,3) ); // e,s (copy 1 or 3)
console.log( datt.slice(-2) ); // s,t(-2 number for end)

//concat
let datt2 = [1,2];
console.log( datt2.concat([3,4]) );
console.log( datt2.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
console.log( datt2.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

//indexof and lastindexof

let dtt = ['Apple', 'Orange', 'Apple']

console.log( dtt.indexOf('Apple') ); // 0 (first Apple)
console.log( dtt.lastIndexOf('Apple') ); // 2 (last Apple)
console.log( dtt.lastIndexOf("Apple") ); // 2

// find
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

console.log(user.name); // John

//filter
let users1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers1 = users.filter(item => item.id < 3);
console.log(someUsers1.length); // 2

// map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length); // check item legnth
console.log(lengths); // 5,7,6

//sort(fn)
let rar = [ 1, 2, 15 ];
  
rar.sort();
console.log(rar);

// split and join
let names = 'Bilbo, Gandalf, Nazgul';

let arrr = names.split(', ');

for (let name of arrr) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

// Arry.isArry

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true
