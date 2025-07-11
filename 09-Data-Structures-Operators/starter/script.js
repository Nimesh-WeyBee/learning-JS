'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order recived`);
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const playerFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;

function printGoals(...playerNames) {
  console.log(...playerNames, playerNames.length);
}

// printGoals('a');
// printGoals('a', 'b');
// printGoals('a', 'b', 'c', ...game.scored);

team1 < team2 && console.log('team 1 win');
team1 > team2 && console.log('team 2 win');

// const rest1 = {
//   name: 'Capri',
//   numGuest: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// console.log(rest1, rest2);

// console.log(0 && 'nims'); // 0
// console.log(1 && 'nims'); // nims

// const gue = 0;

// const ggg = gue || gue != 0 || 10;

// console.log(ggg);

// const newCopyObj = { ...OriginalObj };

// function fun(arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
// }

// const paraArr = ['hi', 'hello', 'hey'];

// fun(...paraArr);

// const myName = 'nimesh kadecha';

// console.log(...myName);

// const arr = [7, 8, 9];
// // Old way
// const oldWayArr = [1, 2, arr[0], arr[1], arr[2]];
// // with spread operator
// const newArr = [1, 2, ...arr];

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const {
//   name: resturentName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// const {
//   fri: { open, close },
// } = hours;
// console.log(open, close);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// console.log(resturentName, hours, tags);

// // Old way
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // With destructuring
// const [x, y, z] = arr;

// console.log(x, y, z); // 2 3 4

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [d = 1, e = 1, f = 1] = [8, 9];
// console.log(d, e, f);
