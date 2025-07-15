'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');

// const greet = function (greeting) {
//   return function (pname) {
//     console.log(`${greeting} ${pname}`);
//   };
// };

const greet = greeting => pname => console.log(`${greeting} ${pname}`);

const greetHey = greet('Hey');

// greetHey('nims');

function introduce(city, country) {
  console.log(
    `Hello, my name is ${this.name} and I live in ${city}, ${country}.`
  );
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

// introduce.call(person1, "New York", "USA"); // Output: Hello, my name is Alice and I live in New York, USA.
// introduce.call(person2, "London", "UK");   // Output: Hello, my name is Bob and I live in London, UK.

// const addTax = rate => {
//   return function (value) {
//     return value + value * rate;
//   };
// };

const addTax = rate => value => value + value * rate;

const addVAT = addTax(0.23);

// console.log(addVAT(100));

// Challenge -1 ----------------------------------------

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const inp = Number(
    prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    )
  );
  typeof inp === 'number' && inp < this.answers.length && this.answers[inp]++;

  this.displayResults();
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
  } else {
    console.log(`Poll results are ${this.answers}`);
  }
};

const obj2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

// obj2.displayResults = poll.displayResults;

// obj2.displayResults();

// poll.displayResults.bind(obj2)('string')

// CHallenge - 2 ---------------------------------------------------

let f;

(() => {
  const header = document.querySelector('h1');
  header.style.color = `red`;

  f = () => {
    header.style.color = `rgb(${Math.trunc(Math.random() * 255) + 1},${
      Math.trunc(Math.random() * 255) + 1
    },${Math.trunc(Math.random() * 255) + 1})`;
  };

})();

document.querySelector('body').addEventListener('click', f);


/**
 * WHY THIS WORKS
 * We have a global variable f
 * We have an IIFE so its invoked immediatly 
 * we have selected header insid this iife
 * 
 * we have assigned function f inside of the IIFE so function f has access to all the variable inside of the IIFE because of the clouser
 * 
 * Now we add an event listener to body and on click we invoke the f function which then get the header element from clouser and set style 
 * 
 */