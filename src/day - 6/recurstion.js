//recursion and types of pow()
// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16
const { Suspense } = require("react");


function pow(x, n){
    let result = 1;

    for(let i = 0; i < n; i++){
        result *= x;

    }
    return result;
}
console.log( pow(2, 3) );

//  execution context and stack
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log( pow(2, 3) );



// Recursive traversals
let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 2000}],
    devlopment: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Harry', salary: 1500}],
        internals: [{name: 'Jacky', salary: 1200}]
    }
};

//The function to the job:
function sumSalaries(department){
    if(Array.isArray(department)){
        return department.reduce((prev, current) => prev + current.salary, 0);
    }else{
        let sum = 0;
        for (let subdep of Object.values(department)){
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}
console.log(sumSalaries(company));