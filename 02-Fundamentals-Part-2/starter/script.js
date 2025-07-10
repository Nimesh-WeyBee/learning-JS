"use strict";

// function calcAge(birthyear){
//     return 2037 - birthyear;
// }

// const age1 = calcAge(1991);
// console.log(age1);

// Coding - challange - 1 ------------------------------------------------------------

const average = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No one wins`);
  }
};

// checkWinner(average(44, 23, 71), average(65, 54, 49));
// checkWinner(average(85, 54, 41), average(23, 34, 27));

// Arrays

// Coding - challange - 2 ------------------------------------------------------------

const calcTip = (price) =>
  price >= 50 && price <= 300 ? price * 0.15 : price * 0.2;

const bills = [125, 555, 44];

const tips = [];
const total = [];

bills.forEach((price, index) => {
  tips.push(calcTip(price));
  total.push(bills[index] + tips[index]);
});

// console.log(bills, tips, total);

// OBJECTS

// const nims = {
//   fname: "nims",
//   lName: "kadecha",
//   age: 2037 - 1991,
//   job: "SDE intern",
//   friends: ["one", "two", "three"],
// };

// console.log(nims);

// console.log(nims['first' + namekey]);

// Small chalange (13 video)

// console.log(`${nims.fname} has ${nims.friends.length} friends, and his best friend is called ${nims.friends[0]}. `);

const nims = {
  fname: "nims",
  lName: "kadecha",
  birthyear: 1991,
  job: "SDE intern",
  friends: ["one", "two", "three"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },

  // Chalange
  getSummary: function () {
    return `${this.fname} is a ${this.calcAge()} - years old ${
      this.job
    }. and he ${
      this.hasDriversLicense ? "has" : "does not have"
    } the drivers licence`;
  },
};

// console.log(nims.age);
// console.log(nims.calcAge());
// console.log(nims.age);

// console.log(nims.getSummary());

// Coding - challange - 3 --------------------------------------------

const calcBMI = function (obj) {
  obj.bmi = obj.weight / obj.height ** 2;
  return obj.bmi;
};

const markObj = {
  fullName: "Mark Miller",
  height: 1.69,
  weight: 78,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const johnObj = {
  fullName: "John smit",
  height: 1.95,
  weight: 92,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

// console.log(
//   `${markObj.fullName}'s BMI (${markObj.calcBMI()}) ${
//     markObj.bmi > johnObj.calcBMI() ? "higher" : "lower"
//   } than ${johnObj.fullName}'s BMI (${johnObj.bmi}) `
// );



// Coding - challange - 4

// I have completed it before.... 
