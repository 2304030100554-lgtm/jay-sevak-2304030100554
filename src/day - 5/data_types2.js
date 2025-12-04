// Array destructuring
let arr = ["John", "Smith"];

let [firsthname, surname] = arr;

console.log(firsthname);
console.log(surname);

// Object destructuring

let option = {
    title: "manu",
    width: 100,
    hight: 200
};

let {title, width, hight} = option;
console.log(title);
console.log(width);
console.log(hight);

// date
//creation
let now = new Date();
console.log( now );

let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );
// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );

// JSON Method
let user = {
    name: "John",
    Age:30
};
let jesonData = JSON.stringify(user);
console.log(jesonData); // {"name":"John","Age":30}

// JSON.parse()

let jesonText = '{"name": "John", "age": 30}';

let user1obj = JSON.parse(jesonText);
console.log(user1obj); // John

