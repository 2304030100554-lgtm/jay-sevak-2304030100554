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
let numvalue = "123";
  strvalue = Number(numvalue);
 console.log(typeof numvalue);// number 

 let strnum = 456;
   let strvalue2 =String(strnum);
   console.log(strnum)

<<<<<<< HEAD


   
=======
>>>>>>> 3b58791a96e014c6ee28f01411f50ae1de8729aa
