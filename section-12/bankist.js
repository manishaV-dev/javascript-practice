"use strict";

const account1 = {
  owner: "John Doe",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2,
  pin: 1111,
  movementsDates: [
    "2022-11-18T21:31:17.178Z",
    "2022-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2023-04-01T10:17:24.185Z",
    "2023-05-08T14:11:59.604Z",
    "2023-07-01T10:51:36.790Z",
    "2023-07-12T17:01:17.194Z",
    "2023-07-21T23:36:17.929Z",
  ],
  currency: "EUR",
  locale: "pt-PT",
};

const account2 = {
  owner: "Monica Geller",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2022-11-01T13:15:33.035Z",
    "2022-11-30T09:48:16.867Z",
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2023-02-05T16:33:06.386Z",
    "2023-04-10T14:43:26.374Z",
    "2023-07-18T18:49:59.371Z",
    "2023-07-24T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

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

// create date function

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCurr = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

// 1. Add Movements of Account1 in HTML Movement Container
const displayMovements = function (acc, sort = false) {
  // Empty the Container
  containerMovements.innerHTML = " ";

  // 10. Sorting

  const sortMovs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  // movements.forEach(function (mov, i)
  sortMovs.forEach(function (mov, i) {
    // check if type is deposit or with
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formatMov = formatCurr(mov, acc.locale, acc.currency);
    // creating DOM Element
    // Add type in class and other place, i(index value), and amount (mov)
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">
          ${formatMov}
          </div>
        </div>
    `;
    // ${mov.toFixed(2)} <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>

    // add that DOM ele to web page with insertAdjacentHTML

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// 3. Display Current Balance
const calcDisplayMov = function (curAcc) {
  curAcc.balance = curAcc.movements.reduce((acc, mov) => acc + mov, 0);
  const formatMov = formatCurr(curAcc.balance, curAcc.locale, curAcc.currency);
  labelBalance.textContent = `${formatMov}`;
};

// 4. Calculate total In, Out and Interest
const calcDisplaySummery = function (curacc) {
  const income = curacc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCurr(
    income,
    curacc.locale,
    curacc.currency
  )}`;

  const out = curacc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCurr(
    out,
    curacc.locale,
    curacc.currency
  )}`;

  const interest = curacc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * curacc.interestRate) / 100)
    //here we want that if interest is above= 1 rs then it should be added so, here we again use filter
    .filter((int, i, arr) => {
      // console.log(arr); // [2.4, 5.4, 36, 0.84, 15.6]
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${formatCurr(
    interest,
    curacc.locale,
    curacc.currency
  )}`;
};

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

// 7. create UPDATEUI function where we call all that Summery function at one place, so we don't have to write all 3 all the time
const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc);

  // Display balance
  calcDisplayMov(acc);

  // Display summery
  calcDisplaySummery(acc);
};

// Logout

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI

    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };
  // set time to 5 minutes
  let time = 300;

  // Call the timer every secends
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// 5. Implement Login
let currentAcoount, timer;
btnLogin.addEventListener("click", function (e) {
  // preventing form from submitting
  e.preventDefault();
  // console.log("Loging");

  // find username
  currentAcoount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  // match username with pin
  if (currentAcoount?.pin === +inputLoginPin.value) {
    // display UI and Welcome msg with user first name
    labelWelcome.textContent = `Welcome back, ${
      currentAcoount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Shorcut - experimenting API (Internationalizing Dates (Intl))
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: "long",
    };

    // labelDate.textContent = new Intl.DateTimeFormat("en-US", options).format(
    //   now
    // );

    // or language chnage according to browser
    // const locale = navigator.language;
    // console.log(locale); // en-IN
    // labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
    //   now
    // );

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAcoount.locale,
      options
    ).format(now);

    // set Date
    // const now = new Date();
    // // labelDate.textContent = now; // As of Sun Jul 16 2023 17:18:43 GMT+0530 (India Standard Time)

    // // but we want day/month/year
    // const year = now.getFullYear();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year} , ${hour}:${minutes}`;

    // after login. clear input field
    inputLoginUsername.value = inputLoginPin.value = "";
    // also blur the cursor blinking
    inputLoginPin.blur();

    // call logout Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // just call updateUI
    updateUI(currentAcoount);
  }
});

//6. Implementing Transfer

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiceAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

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
    // Doing the Transfer
    currentAcoount.movements.push(-amount);
    receiceAcc.movements.push(amount);

    // add Transfer date
    currentAcoount.movementsDates.push(new Date().toISOString());
    receiceAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAcoount);
  }
});

//9. Loan

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  setTimeout(function () {
    if (
      amount > 0 &&
      currentAcoount.movements.some((mov) => mov >= amount * 0.1)
    ) {
      currentAcoount.movements.push(amount);

      // add Loan date
      currentAcoount.movementsDates.push(new Date().toISOString());

      updateUI(currentAcoount);
    }
  }, 3000);
  inputLoanAmount.value = "";
});

//8. Delete Account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  // find the index of account which you want to del (Have to login in that acc)
  if (
    inputCloseUsername.value === currentAcoount.username &&
    +inputClosePin.value === currentAcoount.pin
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
  displayMovements(currentAcoount.acc.movements, !sorted);
  // click to false tp true and so on
  sorted = !sorted;
});

// add bg color to even row

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    // 0,2,4,6
    if (i % 2 === 0) {
      row.style.backgroundColor = "#acffd296";
    }
    //0,3,6,9
    // if (i % 3 === 0) {
    //   row.style.backgroundColor = "#ffacb37d";
    // }
    else {
      row.style.backgroundColor = "#ffacb37d";
    }
  });
});

// // Fake Always Logged in

// currentAcoount = account1;
// updateUI(currentAcoount);
// containerApp.style.opacity = 100;
