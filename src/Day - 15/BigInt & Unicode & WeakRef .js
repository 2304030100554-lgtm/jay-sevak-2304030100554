// BigInt
let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number)); // 3n
console.log(Number(bigint) + number); //3

// Boolen 
console.log(1n || 2); // 1n
console.log(0n || 2); // 2


//Unicode, String internals

console.log( "\x7A"); // z
console.log( "\xA9" ); // ©, the copyright symbol

console.log( "\u{20331}" ); // 佫, a rare Chinese character (long Unicode)
console.log( "\u{1F60D}" ); // 😍

console.log( '𝒳'.length ); // 2, 
console.log( '😂'.length ); // 2,
console.log( '𩷶'.length ); // 2,

console.log( '𝒳'.charCodeAt(1).toString(16) ); // dcb3
console.log( '𝒳'.codePointAt(1).toString(16) ); // dcb3

// Diacritical marks and normalization
console.log( 'S\u0307' ); // Ṡ
console.log( 'S\u0307\u0323' ); // Ṩ


// weakref
let user = {name: "John"};
let weak =  new WeakRef(user);

console.log(weak.deref()); // { name: 'John' }

user = null;

// FinalizationRegistry
const registry = new FinalizationRegistry((heldValue) => {
  console.log("Object cleaned:", heldValue);
});

let user2 = { name: "Jay" };

registry.register(user2, "User object");

user2 = null; // object eligible for GC

// WeakRef + FinalizationRegistry
const registry1 = new FinalizationRegistry((id) => {
  console.log(`Cleaned cache for ${id}`);
});

function cacheUser(user3) {
  const ref = new WeakRef(user3);
  registry.register(user3, user3.id);
  return ref;
}