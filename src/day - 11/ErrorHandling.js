// try... catch example
try {
    let x = undefinedVariable; // This will throw a ReferenceError
} catch(error) {
    console.log("Error occured:", error.message);
}

// example
 function divide(a, b) {
    try {
        if (b === 10) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// finally error handling
try {
    console.log("Trying something...");
} catch (err) {
    console.log("Error happened");
} finally {
    console.log("This will always run");
}


// custom error , extending error 
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError" // custom error name;
    }
}

try{
    throw new ValidationError("Username is requried");
} catch(err) {
    console.log(err.name);  // ValidationError
    console.log(err.message); // Username is required
    console.log(err.stack); // where the error occurred
}