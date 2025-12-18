// eval id a built-in  funnction in javascript that executes a string
console.log(eval("2 + 2"));  //4
console.log(eval(new String("2 + 2"))); // String ('2 + 2')
console.log(eval("2 +2") === eval(new String("2 + 2"))); // false
console.log(eval("2 + 2") === eval("4")); // true

const expression = new String("2 + 2");
eval(String(expression)); // 4


// Using bracket accessors
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));

// eval return value  of statements

const x = 5;
const str = `if (x === 5) {
  console.log("z is 42");
  z = 42;
} else {
  z = 0;
}`;

console.log("z is ", eval(str)); // z is 42  z is 42


// currying

function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);
console.log( curriedSum(1)(2) );

// reference type and this 
let user = {
    name: "Sam",
    greet() {
        console.log(this.name);
    },
};
user.greet(); // sam

// Reference (Important)
let user1 = {
  name: "Tom",
  sayHi() {
    console.log(this.name);
  },
};

setTimeout(user1.sayHi, 1000);
