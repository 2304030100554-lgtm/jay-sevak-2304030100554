// proxy 
const target  = {
    message1: "Hello",
    message2: "Everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);

console.log(proxy1.message1); // Hello
console.log(proxy1.message2); // Everyone

// reflect with(... arguments)
const target1 = {

    message1: "Hello",
    message2: "Everyone",
};

const handler2 = {
    get (target, prop, recevier){
        if (prop === "message2") {
            return "world";
        }
        return Reflect.get(...arguments);
    },
};

const proxy2 = new Proxy(target, handler2);

console.log(proxy2.message1); // Hello
console.log(proxy2.message2); // world

// set with true
let user = {};

let proxy = new Proxy(user, {
  set(target, prop, value) {
    if (typeof value === "number") {
      target[prop] = value;
      return true;
    } else {
      console.log("Only numbers allowed");
      return false;
    }
  },
});

proxy.age = 20;
proxy.age = "abc";

// wrapping function with proxy
function sum(a, b) {
  return a + b;
}

let proxy3 = new Proxy(sum, {
  apply(target, thisArg, args) {
    console.log("Called with", args);
    return target(...args) * 2;
  },
});

console.log(proxy3(2, 3)); // output :- 10
