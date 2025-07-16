'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// arr.splice(1, 3);
// console.log(arr);

// Challange - 1 ////////////////////////////////////////////////////////////////////

const checkDogs = function (dogsJulia, dogkate) {
  dogsJulia
    .slice(1, -2)
    .concat(dogkate)
    .forEach((ele, i) => {
      console.log(
        `Dog number ${i + 1} is ${
          ele <= 3 ? 'still a puppy' : 'an adult'
        }, and is ${ele} years old.`
      );
    });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Challange - 2 //////////////////////////////////////////////////////////////////////

const calcAverageHumanAge = dogAgs => {
  return dogAgs
    .map(d_age => (d_age <= 2 ? d_age * 2 : 16 + d_age * 4))
    .filter(h_age => h_age >= 18)
    .reduce((acc, h_age, _, arr) => acc + h_age / arr.length, 0);

  // let finalArrlenget = 0
  //   return (
  //     dogAgs
  //       .map(d_age => (d_age <= 2 ? d_age * 2 : 16 + d_age * 4))
  //       .filter(h_age => h_age >= 18)
  //       .reduce((acc, h_age, _, arr) => {
  //         finalArrlenget = arr.length;
  //         return acc + h_age;
  //       }, 0)
  //   ) / finalArrlenget;
};

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// Challange - 3 //////////////////////////////////////////////////////////////////////
const calcAverageHumanAge2 = dogAgs =>
  dogAgs
    .map(d_age => (d_age <= 2 ? d_age * 2 : 16 + d_age * 4))
    .filter(h_age => h_age >= 18)
    .reduce((acc, h_age, _, arr) => acc + h_age / arr.length, 0);
// console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));

// Challange - 4 //////////////////////////////////////////////////////////////////////
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/**
 * Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

 * YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!
 */

// 1.
dogs.forEach(
  ele => (ele.recommendedFood = Math.trunc(ele.weight ** 0.75 * 28))
);

console.log(dogs.flat());

// 2.
const saras_dog = dogs.find(ele => ele.owners.includes('Sarah'));
console.log(
  saras_dog.recommendedFood > saras_dog.curFood
    ? 'Eats too little'
    : 'Eats too much'
);

//3.
const dogsEatsTooMuch = dogs =>
  dogs.filter(ele => ele.recommendedFood < ele.curFood);

const ownersTooMuch = dogsEatsTooMuch(dogs).flatMap(ele => ele.owners);
console.log(ownersTooMuch);

const dogsEatsTooLittle = dogs =>
  dogs.filter(ele => ele.recommendedFood > ele.curFood);

const ownersTooLittle = dogsEatsTooLittle(dogs).flatMap(ele => ele.owners);
console.log(ownersTooLittle);

// 4.
console.log(`${ownersTooMuch.join(' and ')}'s dog eats too much `);
console.log(`${ownersTooLittle.join(' and ')}'s dog eats too little `);

// 5.
const dogsEatsExact = dogs =>
  dogs.filter(ele => ele.curFood === ele.recommendedFood);

// console.log(dogsEatsExact(dogs).length ? true : false);
console.log(dogs.some((ele) => ele.curFood == ele.recommendedFood));

//6.
const findOKAYdogs = dogs =>
  dogs.filter(
    ele =>
      ele.curFood < ele.recommendedFood * 1.10 &&
      ele.curFood > ele.recommendedFood * .9
  );
console.log(findOKAYdogs(dogs) ? true : false);

// 7.
console.log(findOKAYdogs(dogs));

// 8.
console.log(
  new Array(dogsEatsTooMuch(dogs), dogsEatsTooLittle(dogs), dogsEatsExact(dogs))
);

// 9.
console.log(
  dogs.map((ele, i, arr) => arr.filter(ele => ele.owners.length == i + 1))
);

// 10

console.log(dogs.splice('').sort((a, b) => a.recommendedFood - b.recommendedFood));

////////////////////////////////////////////////////////////////////////////////////////

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (account) {
  const movements = account.movements;

  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, ele) => acc + ele, 0);
  const expence = movements
    .filter(mov => mov < 0)
    .reduce((acc, ele) => acc + ele, 0);

  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(expence)}€`;

  const intrest = movements
    .filter(mov => mov > 0)
    .map(dep => (dep * account.interestRate) / 100)
    .filter(ins => ins >= 1)
    .reduce((acc, ins) => acc + ins, 0);
  labelSumInterest.textContent = `${intrest}€`;
};

const createUsername = function (accs) {
  accs.forEach(
    acc =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(ele => ele[0])
        .join(''))
  );
};

createUsername(accounts);

let currentAccount;

const updateUI = function (account) {
  // disp mov
  displayMovement(account.movements);

  // disp bal
  calcDisplayBalance(account);

  // disp sum
  calcDisplaySummary(account);
};

// Event handlers
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // disp UI & message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 1;

    // clear inputs
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();

    updateUI(currentAccount);
  }
});

// handel transfer

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferTo.blur();
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

// Request loan

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements
      .filter(trans => trans > 0)
      .some(dep => dep >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

// close account

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    currentAccount?.username === inputCloseUsername.value &&
    currentAccount?.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

const transaction = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(transaction.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]

const eurToUsd = 1.1;

const transactionUSD = transaction.map(function (ele) {
  return Math.trunc(ele * eurToUsd);
});

const deposits = transaction.filter(val => val > 0);
const withdrawl = transaction.filter(val => val < 0);

const balance = transaction.reduce((acc, ele) => acc + ele, 0);

const max = transaction.reduce(
  (acc, ele) => (acc < ele ? ele : acc),
  transaction[0]
);

// console.log(transaction, deposits, withdrawl);
// console.log(balance, max);

// const transactionUSD = transaction.map(ele => Math.trunc(ele * eurToUsd));

// console.log(transactionUSD);

const totalDepositsUSD = transaction
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, ele) => acc + ele, 0);

// console.log(totalDepositsUSD);

// console.log(transaction.find(mov => mov < 0));

// console.log(accounts);

// const accountMovements = accounts.map(acc => acc.movements);

// console.log(accountMovements);
/*
(4) [Array(8), Array(8), Array(8), Array(5)]
0: (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
1: (8) [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
2: (8) [200, -200, 340, -300, -20, 50, 400, -460]
3: (5) [430, 1000, 700, 50, 90]
length : 4
*/

// console.log(accountMovements.flat());

// (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(ele => ele > 0)
  .reduce((acc, ele) => acc + ele, 0);

// console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(acc => acc >= 1000)
//   .length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, ele) => (ele >= 1000 ? ++acc : acc), 0);

// console.log(numDeposits1000);

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, ele) => {
      // ele > 0 ? (acc.deposits += ele) : (acc.withdrawl += ele);
      acc[ele > 0 ? 'deposits' : 'withdrawl'] += ele;
      return acc;
    },
    { deposits: 0, withdrawl: 0 }
  );
// console.log(sums);

const convertTitleCase = function (title) {
  const exp = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(ele => (exp.includes(ele) ? ele : ele[0].toUpperCase() + ele.slice(1)))
    .join(' ');

  return titleCase;
};

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a Long title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
