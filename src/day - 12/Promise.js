// promiss
let promise = new Promise((resolve, reject) => {
   let success = true;

   if (success) {
    resolve("Task completed", 1000);
   } else {
    reject("Task failed", 1000);
   }


});

promise.then (    // using .then
    resolve => console.log(resolve), // Task completed
    reject => console.log(reject)
);

// loadscript   
async function init() {
  try {
    await loadScript("lib1.js");
    await loadScript("lib2.js");

    console.log("Both scripts loaded");
  } catch (err) {
    console.log(err);
  }
}

init();


// promisses chaining
new Promise(function(resolve, reject){

   setTimeout( () => resolve(1), 1000); // (*)

})  .then(function(result){  // (**)

    console.log(result);  // 1
    return result * 2;

}) .then(function(result){ // (***)

   console.log(result);  // 2
    return result * 2;

}) .then(function(result){
    
    console.log(result); // 4
    return result * 2;

});

// Error handling with promises
let p = new Promise((resolve, reject) => {
  reject("Somthing went wrong")

});

p.catch(err => {
   console.log("Error", err);  // Error Somthing went wrong
});

