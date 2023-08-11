"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for-of loop

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You Deposited ${movement}`);
//   } else {
//     //math.abs = to get absolute value, here it remove - sign
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

/*
You Deposited 200
You Deposited 450
You withdrew 400
You Deposited 3000
You withdrew 650
You withdrew 130
You Deposited 70
You Deposited 1300

*/
////////////////////////////////////////////////////////////////
// forEach Loop

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You Deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

/*
You Deposited 200
You Deposited 450
You withdrew 400
You Deposited 3000
You withdrew 650
You withdrew 130
You Deposited 70
You Deposited 1300

*/

// get index value

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You Deposited ${movement}`);
  } else {
    //math.abs = to get absolute value, here it remove - sign
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You Deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
  //   console.log(arr);
  // Movement 1: You Deposited 200
  // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
  // and so on......
});

/*
Movement 1: You Deposited 200
Movement 2: You Deposited 450
Movement 3: You withdrew 400
Movement 4: You Deposited 3000
Movement 5: You withdrew 650
Movement 6: You withdrew 130
Movement 7: You Deposited 70
Movement 8: You Deposited 1300
*/

/*=================================================================================================================
.                                                                                                                 .
.                                                                                                                 .
.                                                                                                                 .
.                                                                                                                 .
.                                                                                                                 .
.                                                                                                                 .
.                                                                                                                 .
=================================================================================================================*/

// forEach With Maps and Sets

// MAP
const currencies = new Map([
  ["USD", "United State Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
  ["INR", "Indian Rupee"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);

  /*USD: United State Dollar
    EUR: Euro
    GBP: Pound Sterling
    INR: Indian Rupee*/
});

// SET

const currenciesUnique = new Set(["USD", "INR", "USD", "EUR", "GBP", "EUR"]);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}`);
});
