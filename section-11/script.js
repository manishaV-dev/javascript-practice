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

// elements

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector("#balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// 1. Add Movements of Account1 in HTML Movement Container

const displayMovements = function (movements, sort = false) {
  // Empty the Container
  containerMovements.innerHTML = " ";

  // 10. Sorting

  const sortMovs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  // movements.forEach(function (mov, i)
  sortMovs.forEach(function (mov, i) {
    // check if type is deposit or with
    const type = mov > 0 ? "deposit" : "withdrawal";

    // creating DOM Element
    // Add type in class and other place, i(index value), and amount (mov)
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">
          ${mov} <i class="fa-solid fa-indian-rupee-sign fa-xs"></i> 
          </div>
        </div>
    `;

    // add that DOM ele to web page with insertAdjacentHTML

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displayMovements(account1.movements); // call it when user login

// 3. Display Current Balance
const calcDisplayMov = function (curAcc) {
  curAcc.balance = curAcc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${curAcc.balance}`;
};
// calcDisplayMov(account1.movements); // call it when user login

// 4. Calculate total In, Out and Interest
const calcDisplaySummery = function (curacc) {
  const income = curacc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.innerHTML = `${income} <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>`;

  const out = curacc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.innerHTML = `${Math.abs(
    out
  )} <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>`;

  const interest = curacc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * curacc.interestRate) / 100)
    //here we want that if interest is above= 1 rs then it should be added so, here we again use filter
    .filter((int, i, arr) => {
      // console.log(arr); // [2.4, 5.4, 36, 0.84, 15.6]
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.innerHTML = `${interest} <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>`;
};
// calcDisplaySummery(account1.movements);// call it when user login

// 2 Short-form username
// const user = "Steven Thomas Williams";
// const username = user.toLowerCase().split(" ");
// console.log(username); //(3) ['steven', 'thomas', 'williams']

// const username = user
//   .toLowerCase()
//   .split(" ")
//   .map(function (name) {
//     return name[0];
//   });
// console.log(username); // (3) ['s', 't', 'w']

// now we have to join this

// const username = user
//   .toLowerCase()
//   .split(" ")
//   .map(function (name) {
//     return name[0];
//   })
//   .join("");
// console.log(username); // stw

// convert to arrow function

// const username = user
//   .toLowerCase()
//   .split(" ")
//   .map((name) => name[0])
//   .join("");
// console.log(username); // stw

// Now implement this in our banklist
// in new function with forEach, because here we don't want to create new array

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    //acc.username = acc.owner == acc's usename is equal to acc owner name (account1.owner, account2.owner....), here in place of username you can write any name
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);
// console.log(accounts);
// [4] 0 : username: "jd"
// 1 : username: "jd"
// 2 : username: "stw"
// 3 : username: "ss"

// 7. create UPDATEUI function where we call all that Summery function at one place, so we don't have to write all 3 all the time
const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayMov(acc);

  // Display summery
  calcDisplaySummery(acc);
};

// 5. Implement Login
let currentAcoount;
btnLogin.addEventListener("click", function (e) {
  // preventing form from submitting
  e.preventDefault();
  // console.log("Loging");

  // find username
  currentAcoount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  // console.log(currentAcoount);

  // match username with pin
  if (currentAcoount?.pin === Number(inputLoginPin.value)) {
    // display UI and Welcome msg with user first name
    labelWelcome.textContent = `Welcome back, ${
      currentAcoount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // after login. clear input field
    inputLoginUsername.value = inputLoginPin.value = "";
    // also blur the cursor blinking
    inputLoginPin.blur();

    // // Display Movements
    // displayMovements(currentAcoount.movements);

    // // Display balance
    // calcDisplayMov(currentAcoount);

    // // Display summery
    // calcDisplaySummery(currentAcoount);

    // just call updateUI

    updateUI(currentAcoount);
  }
});

//6. Implementing Transfer

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiceAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiceAcc);

  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferTo.blur();
  // tranfer condition
  if (
    amount > 0 &&
    receiceAcc &&
    currentAcoount.balance >= amount &&
    receiceAcc?.username !== currentAcoount.username
  ) {
    // console.log("Valid Tranfer")
    // if above condition true then amount should tranfer in receiveACC and that amount should deduct from currentt acc
    currentAcoount.movements.push(-amount);
    receiceAcc.movements.push(amount);

    updateUI(currentAcoount);
  }
});

//9. Loan

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAcoount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAcoount.movements.push(amount);

    updateUI(currentAcoount);
  }
  inputLoanAmount.value = "";
});

//8. Delete Account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  // find the index of account which you want to del (Have to login in that acc)
  if (
    inputCloseUsername.value === currentAcoount.username &&
    Number(inputClosePin.value) === currentAcoount.pin
  ) {
    const getIndex = accounts.findIndex(
      (acc) => acc.username === currentAcoount.username
    );
    // console.log(getIndex);
    //now delete the account
    accounts.splice(getIndex, 1);
    //hide ui
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

// 10. call sorting

// state variable, if we click sort and back to normal

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAcoount.movements, !sorted);
  // click to false tp true and so on
  sorted = !sorted;
});

// // 4. Calculate total In, Out and Interest
// const calcDisplaySummery = function (movements) {
//   const income = movements
//     .filter((mov) => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.innerHTML = `${income} <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>`;

//   const out = movements
//     .filter((mov) => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.innerHTML = `${Math.abs(
//     out
//   )} <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>`;

//   const interest = movements
//     .filter((mov) => mov > 0)
//     .map((deposit) => (deposit * 1.2) / 100)
//     //here we want that if interest is above= 1 rs then it should be added so, here we again use filter
//     .filter((int, i, arr) => {
//       // console.log(arr); // [2.4, 5.4, 36, 0.84, 15.6]
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);

//   labelSumInterest.innerHTML = `${interest} <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>`;
// };
// // calcDisplaySummery(account1.movements);// call it when user login
