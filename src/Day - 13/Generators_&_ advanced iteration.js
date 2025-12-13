// Generators

function* generatorsSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let Generators = generatorsSequence();

console.log(Generators);

let two = Generators.next();
console.log(JSON.stringify(two));

// Generators are iterable (for..of)
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for(let value of generator) {
  console.log(value); // 1, then 2
}

// generator.throw

function* gen() {
    try {
        let result = yield "2 + 2 = ?";

        console.log("The excution does not reach, because the exception is throw above");
    } catch(e) {
        console.log(e);
    }
}

let generator1 = gen();

let question = generator1.next().value;

generator1.throw(new Error("The answer is not found in my database"));

// Async iteration and generators

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() { // called once, in the beginning of for..of
    return {
      current: this.from,
      last: this.to,

      next() { // called every iteration, to get the next value
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for(let value of range) {
  console.log(value); // 1 then 2, then 3, then 4, then 5
}