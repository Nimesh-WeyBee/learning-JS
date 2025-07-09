// let js = "amazing";
// if (js === "amazing") alert("hello");

// Code - challange - 1

const markHeight = 1.69;
const markMass = 78;
const markBMI = markMass / markHeight ** 2;

const johnHeight = 1.95;
const johnMass = 92;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// Code - challange - 2 ------------------------------------------------------

// console.log(
//   `Mark's BMI (${markBMI}) is ${
//     markHigherBMI ? "higher" : "lower"
//   } than John's BMI (${johnBMI})`
// );

// Code - challange - 3 -----------------------------------------------------------

const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;
const dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

const koalasScore1 = 88;
const koalasScore2 = 111;
const koalasScore3 = 110;
const koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//   console.log(`Dolphins Wins the trophy 🏆`);
// } else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
//   console.log(`Koalas Wins the trophy 🏆`);
// } else if (dolphinsAvg >= 100 && koalasAvg >= 100) {
//   console.log(`The match is a Draw`);
// }else{
//     console.log(`No one Wins :(`);
// }


// Code - challange - 4 -----------------------------------------------------------

const price = 275;

const tip = (price >=50 && price<=300) ? price *0.15: price *0.2 ;

console.log(`The bill was ${price}, the tip was ${tip}, and the total value ${price + tip} `);