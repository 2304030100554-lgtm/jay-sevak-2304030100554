// rest perameters (...)

function sumAll(...args){
    let sum = 0;

    for(let arg of args) sum += arg;

    return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1,2)); // 3
console.log(sumAll(2,3)); // 5

//Spread  syntex
let arr = [3, 5, 1];
console.log( Math.max(...arr) );// 5

// syntex normal value
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

// Garbage collection
function f(){
    let value = 123;

    return function(){
        console.log(value);
    }
}

let g = f();
f();

// var
function sayHi(){
    if (true){
        var name = "Hello";
    }
    console.log(name); // Hello
}
sayHi();


