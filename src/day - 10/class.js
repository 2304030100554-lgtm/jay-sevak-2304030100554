// Class 
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

// Usage:
let user = new User("John");
user.sayHi();

// class syntex
class User1 {
    constructor(name) { this.name = name; } 
    sayHi() { console.log(this.name); }
}

console.log(typeof User1); // Function

// Class Expression
function makeClass(pharse){

    return class{
        sayHi(){
            console.log(pharse);
        }
    };
}

let user2 = makeClass("Hello");

new user2().sayHi(); // Hello

// Getters/setters
class User3 {

    constructor(name){

        this.name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is to Short.");
            return;
        }
        this._name = value;
    }
}

let user3 = new User3("John");
console.log(User3.name);  // John

User3 = new User(" ");

//setTimeout()
class Button{
  constructor(value){
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  }
}

let button = new Button("Hello");

setTimeout(button.click, 1000); // hello 
