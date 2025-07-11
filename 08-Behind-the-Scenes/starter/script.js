'use strict';

// testingHoisting = 20;

// console.log(testingHoisting);

// var testingHoisting = 10;

// console.log(testingHoisting);

const jon = {
  year: 1991,
  calcAge: function () {
    console.log(this.year);
  },
};

const jay = {
  year: 2000,
};

jay.calcAge = jon.calcAge; // Method barowing

// jay.calcAge()

const f = jon.calcAge;

const jonas = {
  firstName: 'Jonas',
  yaer: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(this);

    console.log(`Hey ${this.firstName} `);
  },
};

// const person1 = {
//   firstName: 'abc',
//   age: 20,
// };

// const friend = person1;

// friend.age = 23;

// console.log(person1, friend);
