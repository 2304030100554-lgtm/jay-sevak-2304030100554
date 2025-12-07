// setTimeout and setInterval
function sayHi(){
    console.log("Hello");
}
setTimeout(sayHi, 1000);


// clearTimeout
let timerId = setTimeout(() => alert("never happens"), 1000);
console.log(timerId); // timer identifier

clearTimeout(timerId);
console.log(timerId);

// Zero delay setTimeout
setTimeout(() => console.log("world"));

console.log("Hello");

// Using “func.call” for the context
function sayhell(){
    console.log(this.name);
}

let user = {name: "John"};
let admin = {name: "Admin"};

sayhell.call( user );
sayhell.call( admin );


// Function binding
//this
let user1 = {
   firstname: "Rama",
   sayHi(){
    console.log(`Hello, ${this.firstname}!`);
   }
};

setTimeout(function(){
    user1.sayHi();  // Hello, Rama!
}, 1000);


// bind 
let user2 = {
    firstname: "Ashish"
};

function func(){
    console.log(this.firstname);
}

let funcUser = func.bind(user2);
funcUser(); // Ashish

// Partial functions
function mul(a, b){
    return a * b;
}

let triple = mul.bind(null, 3);

console.log( triple(3) ); // 9
console.log( triple(4) ); // 12
console.log( triple(5) ); // 15

// Arrow funcation

let group = {
    title: "Our group",
    studens: ["John", "Peta", "Rama"],

    showList(){
        this.studens.forEach(
            students => console.log(this.title + ': ' + students)
        );
    }
};

group.showList();
