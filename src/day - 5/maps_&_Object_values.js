// Iterable
let str = "Hello";

let iterator = str[Symbol.iterator]();

while(true) {
    let result = iterator.next();
    if(result.done)break;
    console.log(result.value);// The  "Hello" output is print one by one
}

// Map
const myMap =  new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
]);
console.log(myMap);

// static map methods

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// Instence map method
//set , clear, get, forEach

const map = new Map();// set, get
map.set("bar", "foo");

console.log(map.get("bar")); // foo
console.log(map.get("baz")); // undefined

// clear
const map1 = new Map();

map1.set("bar", "baz");
map1.set(1, "foo");
console.log(map1.size);// 2

map1.clear();
console.log(map1.size);// 0

// forEach
function logMapElements(value, key, map2) {
    console.log(`m[${key}] = ${value}`);
}

new Map([
    ["food", 3], //"m[foo] = 3"
    ["bar", {}], // "m[bar] = [o bject Object]"
    ["baz", undefined],  // "m[baz] = undefined"
]).forEach(logMapElements); 

