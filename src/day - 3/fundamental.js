// variable
let myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!
console.log(myBirthday);

// Data type 
let message = "hello";
message = 123456;

console.log(message);


// typeof operator
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);

// Type conversion
let strvalue = "123";
  strvalue = Number(strvalue);
 console.log(typeof strvalue);// number 

 let numvalue = 456;
  

