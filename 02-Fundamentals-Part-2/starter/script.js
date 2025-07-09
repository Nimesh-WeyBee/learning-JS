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
