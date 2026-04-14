// variable
let myBirthday = '18.04.1982';
myBirthday = '01.01.2001';
console.log(myBirthday);

// Data type 
let message = "hello";
message = 123456;

console.log(message);

// typeof operator
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);

// Type conversion
let numvalue = "123";

let numConverted = Number(numvalue);
console.log(typeof numConverted);

let strnum1 = 456;
let strvalue12 = String(strnum1);
console.log(typeof strvalue12);

let boolnvalue = true;
console.log(typeof boolnvalue);

// Operators 
let apples = 2;
let orange = 3;
console.log(apples + orange);

// increment/decrement
let counter = 2;
counter++;
console.log(counter);

// Bitwise operator
let a1 = 5;
let b1 = 3;

console.log(a1 & b1);
console.log(a1 | b1);
console.log(a1 << b1);
console.log(a1 >> b1);
console.log(a1 >>> b1);

// conditional operator 
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);

let age1 = 18;
let canVote = age1 >= 18 ? "Yes" : "No";
console.log(canVote);

// comparisons operator
a1 = 10;
b1 = 5;
console.log(a1 > b1);
console.log(a1 < b1);
console.log(a1 != b1);
console.log(a1 == b1);
console.log(a1 === b1);

// logical operator
if (1 || 0) {
  console.log('truthy!');
}

let hour = 9;
if (hour < 10 || hour > 18) {
  console.log('The office is closed.');
}

// Loops

// FIXED: First loop — corrected so it actually runs
let i = 1;
while (i < 5) {
  console.log("i value =", i);
  i++;
}

// Second loop
i = 5;
while (i > 3) {
  console.log(i);
  i--;
}

// FIXED do...while loop
let x = 0;
do {
  console.log(x);
  x++;
} while (x < 3);

// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Breaking loop
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// continue loop
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// switch statement
let a = 2 + 2;

switch (a) {
  case 3:
    console.log('Too small');
    break;
  case 4:
    console.log('Exactly!');
    break;
  case 5:
    console.log('Too big');
    break;
  default:
    console.log("I don't know such values");
}

// function 
function greet() {
  console.log("Hello, welcome!");
}

greet(); // calling the function

// local variable
function showmessage() {
  let message = "Hello, I am JavaScript!";
  console.log(message);
}

showmessage();

// global variable
let input = "john";

function shoinput() {
 let input = "Jecky"; // local variable
 console.log(input);
}

shoinput();

// prime number function
function showPrimes(n){
  nextPrime: for(let i = 2; i < n; i++) {

    for(let j = 2; j < i; j++){
      if (i % j == 0) continue nextPrime;
    }
    console.log(i);
  }
}
showPrimes(10);

// function expressions
const square = function (x) {
  return x * x;
};
console.log(square(4)); // Output: 16

// arrow functions
const drive = (age) => {
  if (age >= 18) {
    return "You can drive.";
  } else {
    return "You cannot drive.";
  }
};

console.log(drive(25));
