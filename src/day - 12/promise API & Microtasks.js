// promise API

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'

];

let requests = urls.map(ur1 => fetch(ur1));

Promise.all(requests)
 .then(respones => respones.forEach(
   respones => console.log(`${respones.url}: ${respones.status}`)
 ));

// Microtasks with .then(), .catch(), .finally()

let p = new Promise((resolve, reject) => {
  reject("Somthing went wrong");

});

p.then((result) => {
  console.log("Then:", result);
})

.catch((error) => {
  console.log("Catch:", error); // Catch: Somthing went wrong
})

.finally( () => {
   console.log("Finally: Always runs"); // Finally: Always runs
});

// Async/await

async function f() {
  
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000)
  });

  let result = await promise;
  
  console.log(result);  // "Done!"
}
f();

// await
async function S() {

  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    console.log(err); // TypeError: failed to fetch
  }
}

S();