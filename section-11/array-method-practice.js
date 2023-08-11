"use strict";

const account1 = {
  owner: "John Doe",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "Monica Geller",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1. Total deposite in all account

// const bankDepositeSum = accounts.map((acc) => acc.movements);
// console.log(bankDepositeSum); // (4) [Array(8), Array(8), Array(8), Array(5)]

// const bankDepositeSum = accounts.map((acc) => acc.movements).flat();
// console.log(bankDepositeSum); // (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

//simplified those 2 step then filter the deposited value

// const bankDepositeSum = accounts.flatMap((acc) => acc.movements);
// console.log(bankDepositeSum); // (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

const bankDepositeSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositeSum); // 25180

// 2. How many deposite there atleast 1000

// const numDeposites1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;
// console.log(numDeposites1000); // 6

// OR using Reduce Method

// const numDeposites1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// console.log(numDeposites1000); // 6

// const numDeposites1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count++ : count), 0);
// console.log(numDeposites1000); // 0

//Prefixed ++ Operator
const numDeposites1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposites1000); // 6

// 3. Create an object which contains the sum of deposits and of the withdrawal

const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawal += cur);
      return sums;
    },
    { deposits: 0, withdrawal: 0 }
  );

console.log(sums); // {deposits: 25180, withdrawal: -7340}
console.log(deposits, withdrawal);
