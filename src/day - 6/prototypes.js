// Property flags
let user = {
    name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log( JSON.stringify(descriptor, null, 2));

// {
//   "value": "John",
//   "writable": true,
//   "enumerable": true,
//   "configurable": true
// }

//Non-writable
let user1 = {
    name: "Guru"
};

Object.defineProperty(user1, "name",{
    writable: false
});

user.name = "Peta";
console.log(user1.name); 

// property getters and setters
let user2 = {
    name: "John",
    surname: "Snow",

    get fullname(){
        return `${this.name} ${this.surname}`;
    },

    set fullname(value){
        [this.name, this.surname] = value.split(" ");
       }
};

user2.fullname = "Alice cooper";

console.log(user2.name); // Alice
console.log(user2.fullname); // Alice cooper
