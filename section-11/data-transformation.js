"use strict";

// MAP

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// example convert that movement (euro) into dollar
const euroToUSD = 1.1;

const movementUSD = movements.map(function (mov) {
  return mov * euroToUSD;
});
console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementUSD); // (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

//===========================================================================================================================================================

// BY using FOR-OF Loop
// Fisrt create a blank array container to store new array value
const movementUSDFor = [];
for (const mov of movements) {
  movementUSDFor.push(mov * euroToUSD);
}
console.log(movementUSDFor); // (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

//===========================================================================================================================================================

// BY using Arrow Function with MAP

// const movementUSDArr = movements.map((mov) => {
//   return mov * euroToUSD;
// });

// smaller code
const movementUSDArr = movements.map((mov) => mov * euroToUSD);
console.log(movementUSDArr); // (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

// Another arrow function ex

// const movDescription = movements.map((mov, i, arr) => {
//     if (mov > 0) {
//       return `Movement ${i + 1}: You Deposited ${mov}`;
//     } else {
//       return `Movement ${i + 1}: You Withdraw ${Math.abs(mov)}`;
//     }

// });

//shortcut

const movDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movDescription); //['Movement 1: You Deposited 200', 'Movement 2: You Deposited 450', 'Movement 3: You Withdraw 400', 'Movement 4: You Deposited 3000', 'Movement 5: You Withdraw 650', 'Movement 6: You Withdraw 130', 'Movement 7: You Deposited 70', 'Movement 8: You Deposited 1300']

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// FILTER

const deposit = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposit); // (5) [200, 450, 3000, 70, 1300]

const withdraw = movements.filter((mov) => mov < 0);
console.log(withdraw); // (3) [-400, -650, -130]

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// Reduce

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance); //3840

/*
console.log(`Iteration ${i}: ${acc}`);
Iteration 0: 0
Iteration 1: 200
Iteration 2: 650
Iteration 3: 250
Iteration 4: 3250
Iteration 5: 2600
Iteration 6: 2470
Iteration 7: 2540
2540+1300 = 3840
*/

// find max value

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max); // 3000

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// Chaining Method

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUSD)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); // 5522.000000000001

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// FIND Method

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(firstWithdrawal); // -400

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// includes
// check equality
console.log(movements.includes(-130)); // true

// Some Method

// condintion

// const anyDeposite = movements.some((mov) => mov > 5000);
// console.log(anyDeposite); // false

const anyDeposite = movements.some((mov) => mov > 500);
console.log(anyDeposite); // true

// Every Method

console.log(movements.every((mov) => mov > 0)); // false, some are less than 0 means -

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// Flat Method

const arr = [[1, 2], [3, 4, 5], [6, 7], 8, 9];
console.log(arr.flat()); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrDeep = [[[1, 2]], [3, [4, 5]], [6, 7], 8, 9];
console.log(arrDeep.flat()); //  [Array(2), 3, Array(2), 6, 7, 8, 9]
console.log(arrDeep.flat(2)); //  (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// Sort Method

// strings

const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort()); // (4) ['Adam', 'Jonas', 'Martha', 'Zach']
console.log(owners); // Mutated (4) ['Adam', 'Jonas', 'Martha', 'Zach']

// Numbers

console.log(movements.sort()); // wrong solution (8) [-130, -400, -650, 1300, 200, 3000, 450, 70]
console.log(movements); // (8) [-130, -400, -650, 1300, 200, 3000, 450, 70]

//correct

// Ascending Order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements); // (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]

//or

// here we know that if a>b means a-b always be a positive(large) Number and if a<b means a is always be a negative(smaller) number

movements.sort((a, b) => a - b);
console.log(movements); // (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]

// Descending Order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(movements); // (8) [3000, 1300, 450, 200, 70, -130, -400, -650]

// or

movements.sort((a, b) => b - a);
console.log(movements); // (8) [3000, 1300, 450, 200, 70, -130, -400, -650]
