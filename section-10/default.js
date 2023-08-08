"use strict";

const bookings = [];

// const createBooking = function (flightNum, numPassangers, price) {
//   const booking = {
//     flightNum,
//     numPassangers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("MH370"); // {flightNum: 'MH370', numPassangers: undefined, price: undefined}

// ====================================================================================================================================

//Set Default value (Old Style ES5)

// const createBooking = function (flightNum, numPassangers, price) {
//   const booking = {
//     flightNum,
//     numPassangers,
//     price,
//   };

//   //ES5
//   numPassangers = numPassangers || 1;
//   price = price || 199;

//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("MH370", 2, 200); // {flightNum: 'MH370', numPassangers: 2, price: 200}

// ====================================================================================================================================

//SET Default Value (ES6)

const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  const booking = {
    flightNum,
    numPassangers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};
createBooking("MH370"); // {flightNum: 'MH370', numPassangers: 1, price: 199}
createBooking("AU678", 2); // {flightNum: 'AU678', numPassangers: 2, price: 398}
createBooking("GZ67", 3, 400); // {flightNum: 'GZ67', numPassangers: 3, price: 400}

// we have to pass all 3 parameter value otherwise get wrong value
//for example we want to only pass flightNum and Price

createBooking("Air34", 1000); // {flightNum: 'Air34', numPassangers: 1000, price: 199000}

//Here we get 1000 of passangers which is wrong so we should set that parameter to "Undefined" to avoid this type of bug

createBooking("Air34", undefined, 1000); // {flightNum: 'Air34', numPassangers: 1, price: 1000}

//=========================================================================================================================

// How passing Arguments works : value vs Reference

//Primitive type
const flight = "LH234";

// Object (Reference Type)
const manisha = {
  name: "Manisha Varma",
  passport: 45673847,
};

const checkIn = function (flightNum2, passanger) {
  //Now change the value

  flightNum2 = "LH999";
  passanger.name = "Mrs. " + passanger.name;

  if (passanger.passport === 45673847) {
    // alert("Check In");
    console.log("Check In");
  } else {
    // alert("Wrong Passport");
    console.log("Wrong Passport");
  }
};

checkIn(flight, manisha); // show alert check In

console.log(flight); // LH234 --- No change in Flight Value
console.log(manisha); // {name: 'Mrs. Manisha Varma', passport: 45673847} -- change in Name, add Mrs (Because both objects are in the same memory heap)

// // Is the same doing ...
// const flightNum2 = flight;
// const passanger = manisha;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(manisha);
checkIn(flight, manisha); //Wrong Passport
// console.log(manisha); {name: 'Mrs. Mrs. Manisha Varma', passport: 60730}
