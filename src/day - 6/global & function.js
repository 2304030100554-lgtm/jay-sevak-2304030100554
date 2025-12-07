// global object
console.log("Hello");

globalThis.console.log("hello");
global.console.log("Hello");

var gvar = 5;
console.log(globalThis.gvar); // undefined

// using for polyfills
if(!global.promise){
    console.log("your browser is really old!");
}

// function 
let user = {
    sayHi(){
        //..

    },

    sayBye: function(){
        //...

    }
}
console.log(user.sayHi.name); // sayHI
console.log(user.sayBye.name); // SayBye

// lenth property
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2

// function custom
function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
console.log( counter() ); // 0
console.log( counter() ); // 1

// Named Function Expression
let sayHi = function func(who){
    console.log(`Hello, ${who}`);
};
sayHi("John");  // Hello, John


// "new Function" syntax

let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) ); // 3

// closure
function getFunc() {
  let value = "test";

  let func = function() { console.log(value); };

  return func;
}
getFunc()(); // "test", 