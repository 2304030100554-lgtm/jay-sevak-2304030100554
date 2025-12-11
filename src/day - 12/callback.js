//callback function
function greet(name, callback) {
    console.log("Hello" + name);
    callback();
}

function saybye() {
    console.log("Goodbye!");
}

greet("Alice", saybye);

// Hendling errors in callback functions
function fetchData(callback) {
    let success = false; // Simulating failure 
    if (success) {
        callback(null, "Data fetched successfully!");
    } else {
        callback(new Error("Failed to fetch data"), null);
    }   
}

fetchData(function(error, data) {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log(data);
    }
});

// example
function login(user, pass, callback) {
    if (!user || !pass) {
        return callback("missing credentials");
    }

    //success 
    callback(null, "Login!");
}
login("", "1234", console.log);


// callback Hell 
function add(x, callback) {
  callback(x + 5); // adds 5
}

function multiply(y, callback) {
  callback(y * 2); // multiplies by 2
}

function subtract(z, callback) {
  callback(z - 3); // subtracts 3
}

add(10, function (result1) {          // 10 + 5 = 15
  multiply(result1, function (result2) { // 15 * 2 = 30
    subtract(result2, function (result3) { // 30 - 3 = 27
      console.log(result3);
    });
  });
});

