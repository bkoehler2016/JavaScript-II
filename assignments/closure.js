// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
const name = 'Ben';

function returnName() {
  console.log(name);
}
returnName();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let counterMaker = 0;
  return function () {
    if (counterMaker < 3) {
      return ++counterMaker;
    } else {
      counterMaker = 1;
      return counterMaker;
    }
  };
};
const myCounter = counterMaker();
// Example usage: const myCounter = counterMaker();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
console.log(myCounter()); // 1
console.log(myCounter()); // 2




// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.



// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count)
  };

};

const newCounterFactory = counterFactory();
console.log(`I increased the number ${newCounterFactory.increment()}`); // 1
console.log(`I increased the number ${newCounterFactory.increment()}`); // 2
console.log(`I increased the number ${newCounterFactory.increment()}`); // 3
console.log(`I decreased the number ${newCounterFactory.decrement()}`); // 2
console.log(`I decressed the number ${newCounterFactory.decrement()}`); // 1