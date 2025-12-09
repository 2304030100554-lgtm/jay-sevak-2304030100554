// inheritance (child class to parent class relationship)

class Animal {
    constructor(name, color) {
        this.name = name;  
        this.color = color;

    }
    run() {
        console.log(`${this.name}  is running.`); 
    }
    shout() {
        console.log(`${this.name}  is barking!.`); // dog is barking!
    }    
}   

// 
class monkey extends Animal {
    eatBanana() {
        console.log(`${this.name}  is eating banana`); // monkey is eating banana
    }

    hide() {
        console.log(`${this.name}  is hiding`); // monkey is hiding
    }
}

const ani = new Animal('dog', 'brown');
let mon = new monkey('monkey', 'orange');

ani.shout();
mon.eatBanana();
mon.hide();
mon.run(); // inherited method from parent class


// method overriding and Super keyword
class Employee {

    login() {
        console.log(`Employee has logged in`);
    }
    
    logout() {
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves - Auto approved`);
    }
}

class Programmer extends Employee {
    // constructor(. ..args) { ---> If there is no constructor in child class, parent class create outomatically
    //     super(...args);
    // }

    requestCoffee(x) {
        console.log(`Programmer has requested ${x} coffee`);
    }
    requestLeaves(leaves) {
        super.requestLeaves(4);  // calls Parent constructor
        console.log("One extra is granted")

    }
}
let emp = new Programmer("Jay");
emp.login();                 // Employee has logged in   
emp.requestLeaves(4);       // Employee has requested 4 leaves - Auto approved
emp.requestCoffee(3);     // Programmer has requested 3 coffee


// extending built-in classes
class CustomArray extends Array {
    getFirst() {
        return this[0];
    }

    getLast() {
        return this[this.length - 1];
    }
}

let arr = new CustomArray(1, 2, 3, 4, 5);
console.log(arr.getFirst()); // 1
console.log(arr.getLast());  // 5
