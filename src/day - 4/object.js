//Object in javascript
function makeUser(name, age){
    return{
        name: name,
        age: age,
        //...other properties
    };
}

let user = makeUser("John", 30);
console.log(user.name);

// some trial
let obj = {
    0: "test"// same as "0": "test"
};

console.log(obj["0"]);
console.log(obj[0]);

// object assing a number
let obj2 = {};
obj.__photo__ = 5;
console.log(obj.__photo__);

// The "foo..in" loop
let client = {

    name:  "rebal",
    age:  30,
    isAdmin: true
};

for(let key in user){
    //keys
    console.log(key);
    // value for a key
    console.log( user[key] )
};

//Nested cloning
let userdata = {
  name: "virat",
  size: {
    height: 156,
    width: 60
  }
};

let clone = Object.assign({}, userdata);

console.log(userdata.size === clone.size); // true

userdata.size.width = 50;  // correct variable name
console.log(clone.size.width); // 50
