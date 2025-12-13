export default class user {
    constructor(name) {
        this.name = name;
    }
}

export function sayHi(user) {
    console.log(`Hello, ${user}!`);
}