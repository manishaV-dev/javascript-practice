"use strict";

const secureBooking = function () {
  let passangerCount = 0;
  return function () {
    passangerCount++;
    console.log(`${passangerCount} Passangers`);
  };
};

const booker = secureBooking();

booker(); // 1 Passangers
booker(); // 2 Passangers
booker(); // 3 Passangers

console.dir(booker);

/*

ƒ anonymous() 

    [[Scopes]]: Scopes[3]

            0: Closure (secureBooking) {passangerCount: 3}
                    passangerCount: 3


            1: Script {secureBooking: ƒ, booker: ƒ}
            2: Global { }

*/

//================================================

// example 2
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 550;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46
console.dir(f); // 0: Closure (g) {a: 23}

// // Re-Assigning f function
h();
f(); // 1100
console.dir(f); // 0 : Closure (h) {b: 550}

// Example 3

const boardPassanger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`we are now boarding all ${n} passangers.`);
    console.log(`There are 3 groups, and each with ${perGroup} passangers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

boardPassanger(150, 5);

// In console

//1- Will start boarding in 10 seconds. and after 5 sec
// 2- we are now boarding all 150 passangers.
// 2- There are 3 groups, and each with 50 passangers
