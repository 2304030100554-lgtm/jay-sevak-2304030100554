// Object methods, "this"

let user = {
  // ...
};
// first, declare
function sayHi() {
  console.log("Hello!");
}
// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!


let user1 = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  }

};

user1.sayHi(); // John

// "this" is not bound
let user2 = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    console.log( this.name );
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
admin['f']();

let users1 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

users1.sayHi(); // Ilya

// Constructor, operator "new"
function BigUser() {

  this.name = "John";

  return { name: "Godzilla" }; 
}
console.log( new BigUser().name );  // Godzilla, got that object

//Methods in constructor
function User3(name) {
  this.name = name;

  this.sayHi = function() {
    console.log( "My name is: " + this.name );
  };
}

let john = new User3("John");

john.sayHi(); // My name is: John


// Optional chaining '?.'

let key = "firstName";

let user4 = {
  firstName: "John"
};

let user5 = null;

console.log( user4?.[key] ); // John
console.log( user5?.[key] ); // undefined

// sybols
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log     (id1 == id2); // false