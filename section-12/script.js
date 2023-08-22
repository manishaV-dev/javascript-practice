"use strict";

console.log(28 === 28.0); //true

console.log(0.1 + 0.5); // 0.6
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.1 + 0.2 === 0.3); // false

// Convert String to Number
console.log(Number("23"));
//or
console.log(+"23");

// Parsing
console.log(Number.parseInt("40px")); // 40
console.log(Number.parseInt("e40")); // NaN
// 2nd Parameter, decimal No. Sys base 10 , (0-9)
console.log(Number.parseInt("20px", 10)); // 20

console.log(Number.parseInt("1.5rem")); // 1
console.log(Number.parseFloat("1.5rem")); // 1.5

console.log(Number.parseInt("  1.5rem  ")); // 1
console.log(Number.parseFloat("  1.5rem  ")); // 1

// check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20px")); // true
console.log(Number.isNaN(23 / 0)); // false

// check if value is Number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20px")); // false
console.log(Number.isFinite(23 / 0)); // false

// check if value is Integer
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.0)); // true

//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================

// Math & Rounding

// sqr root
console.log(Math.sqrt(49)); // 7
// sqr root
console.log(49 ** (1 / 2)); // 7
//cube root
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(6, 7, 2, 45, 20)); // 45
console.log(Math.max(6, 7, 2, "45", 20)); // 45
console.log(Math.max(6, 7, 2, "45px", 20)); // Nan

console.log(Math.min(6, 7, 2, 45, 20)); // 2
console.log(Math.min(6, 7, 2, "45", 20)); // 2
console.log(Math.min(6, 7, 2, "45px", 20)); // Nan

console.log(Math.PI); // 3.141592653589793
console.log(Math.PI * Number.parseFloat("10px") ** 2); // 314.1592653589793

console.log(Math.trunc(Math.random() * 6 + 1)); // 1-6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20)); // between 10-20

// Rounding Integers

console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(23.9)); // 23

console.log(Math.round(24.3)); // 24
console.log(Math.round(24.9)); // 25

console.log(Math.ceil(25.3)); // 26
console.log(Math.ceil(25.9)); // 26

console.log(Math.floor(26.3)); // 26
console.log(Math.floor(26.9)); // 26

// floor and Trunc work similar with Positive Number but Negative
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// rounding Decimal
// toFixed() always returns String

console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.745).toFixed(2)); // 2.75 -- stirng
console.log(+(2.745).toFixed(2)); // 2.75 -- Number

//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================

// The Remainder Operator

console.log(5 % 2); // 1
console.log(5 / 2); // 2.5

const isEven = (n) => n % 2 === 0;
console.log(isEven(24)); // ture
console.log(isEven(73)); // false
console.log(isEven(24)); // ture

//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================

// Numeric Separator ( _ )

const earthDiameter = 287_460_000_000;
console.log(earthDiameter); // 287460000000

const priceCent = 356_87;
console.log(priceCent); // 35687

// const pi = 3._1415; // syntaxError
// const pi = _3.1415; // syntaxError [ _ not from beginning]
// const pi = 3.1415_; // syntaxError [ _ not at end]

//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================

// Working with BigInt

console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// if we have bigger number than this, then we can use BigInt

// console.log(36457849124829471294565); // 3.645784912482947e+22

// number to BigInt
console.log(36457849124829471294565n); // 36457849124829471294565n

//or
console.log(BigInt(364578495)); // 364578495n

// operations

console.log(1000n + 1000n);

const huge = 7459783465627346n;
const num = 10;
// console.log(huge * num); // Cannot mix BigInt and other types, use explicit conversions

console.log(huge * BigInt(num)); // 74597834656273460n

// however it works with > and ===

console.log(20n > 30); // false
console.log(20n === 20); // false

//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================

// DATES

const now = new Date();
console.log(now); // Sun Jul 16 2023 16:33:23 GMT+0530 (India Standard Time)

console.log(new Date("Jul 16 2023 16:33:23")); // // Sun Jul 16 2023 16:33:23 GMT+0530 (India Standard Time)

console.log(new Date(2037, 10, 25, 14, 34, 5)); // Wed Nov 25 2037 14:34:05 GMT+0530 (India Standard Time)

//Autocorrect the time
console.log(new Date(2037, 10, 32)); // Wed Dec 03 2037 00:00:00 GMT+0530 (India Standard Time)

console.log(new Date(0)); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)

const future = new Date(2037, 10, 25, 14, 56);
console.log(future); // Wed Nov 25 2037 14:56:00 GMT+0530 (India Standard Time)

console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 (nov)
console.log(future.getDate()); // 25
console.log(future.getDay()); // 3(wed) (0=sunday, 1=monday.....)
console.log(future.getHours()); // 14
console.log(future.getMinutes()); // 56
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-25T09:26:00.000Z

console.log(future.getTime()); // 2142753960000

console.log(new Date(2142753960000)); // Wed Nov 25 2037 14:56:00 GMT+0530 (India Standard Time)

console.log(Date.now()); // 1689507271085

future.setFullYear(2040);
console.log(future); // Sun Nov 25 2040 14:56:00 GMT+0530 (India Standard Time)

// format number

const numFormat = 388476.23;
const options = {
  style: "currency",
  currency: "EUR",
};
console.log("US:", new Intl.NumberFormat("en-US").format(numFormat)); // US: 388,476.23
console.log("IN:", new Intl.NumberFormat("en-IN").format(numFormat)); // IN: 3,88,476.23
console.log(
  "Spanish (Puerto Rico):",
  new Intl.NumberFormat("es-PR").format(numFormat)
); // Spanish (Puerto Rico):: 388,476.23

console.log("Germany:", new Intl.NumberFormat("de-DE").format(numFormat)); // Germany: 388.476,23

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator).format(numFormat)
); // en-IN 388,476.23

console.log(
  "French:",
  new Intl.NumberFormat("fr-LU", options).format(numFormat)
); // French: 388.476,23 €

//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================

// Settimeout and SetTimeInterval

// setTimeout(() => console.log("I need pizza 🍕"), 3000);

const ingredients = ["Olives", "Chicken", "Spinach"];

const pizzaTimer = setTimeout(
  (ing1, ing2, ing3) => {
    console.log(`Here is your pizza 🍕 with ${ing1} ${ing2} and ${ing3}`);
  },
  3000,
  ...ingredients
);

if (ingredients.includes("Spinach")) clearTimeout(pizzaTimer);

setInterval(() => {
  const now = new Date();
  console.log(now);
}, 3000);
