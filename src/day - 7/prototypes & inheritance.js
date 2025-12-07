//[[Prototype]]
let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

console.log( rabbit.eats ); // true
console.log( rabbit.jumps ); // true

// user example
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person("Alice", 30);
alice.greet(); // Hello, my name is Alice and I am 30 years old.
console.log(alice instanceof Person); // true

// object prototypes
let arr = [1, 2, 3];

console.log( arr.__proto__ === Array.prototype); // true
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

//Borrowing
let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
};
obj.join = Array.prototype.join;

console.log( obj.join(',') ); // Hello world!

// Objectget prototupeof
function Human(name, level){
    this.name = name;
    this.level = level;
}

function SuperHero(name, level) {
  Human.call(this, name, level);
}
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

Human.prototype.speak = function(){
    return `${this.name} says hello.`;
};

SuperHero.prototype.fly = function(){
    return `${this.name} is flying.`;
};

const SuperMan =  new SuperHero("Clark Kent", 1);

console.log(SuperMan.fly());
console.log(SuperMan.speak());