"use strict";

const airIndia = {
  airline: "Air India",
  iataCode: "AI",
  bookings: [],
  //book : function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

airIndia.book(130, "Manisha Varma"); // Manisha Varma booked a seat on Air India flight AI130
airIndia.book(250, "Sanjana Ray"); // Sanjana Ray booked a seat on Air India flight AI130
console.log(airIndia.bookings);

// 0: {flight: 'AI130', name: 'Manisha Varma'}
// 1: {flight: 'AI250', name: 'Sanjana Ray'}

//===============================================================================

// Condition - After some year Airindia add a New Airline, here we want to use AirIndia Old BOOKING Method

const spiceJet = {
  airline: "Spice Jet",
  iataCode: "SJ",
  bookings: [],
  // we want here book method here so we create a new var and give airIndia.book
};

// here create new var
const newBook = airIndia.book;

//does not work
// newBook(967, "Samantha S."); // Cannot read properties of undefined (reading 'airline')

// To fix this error, use CALL method

newBook.call(spiceJet, 967, "Samantha S."); // Samantha S. booked a seat on Spice Jet flight SJ967
console.log(spiceJet.bookings); // 0: {flight: 'SJ967', name: 'Samantha S.'}

newBook.call(airIndia, 420, "John Doe"); // John Doe booked a seat on Air India flight AI420
console.log(airIndia.bookings); // (3) [{…}, {…}, {…}]
// 0: {flight: 'AI130', name: 'Manisha Varma'}
// 1: {flight: 'AI250', name: 'Sanjana Ray'}
// 2: {flight: 'AI420', name: 'John Doe'}

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

newBook.call(swiss, 76, "Monica Geller"); // Monica Geller booked a seat on Swiss Air Lines flight LX76

//===============================================================================

// Apply Method (Not use in Modern Js)
const flightData = [584, "George Cooper"];
newBook.apply(swiss, flightData); // George Cooper booked a seat on Swiss Air Lines flight LX584
console.log(swiss.bookings);
// 0: {flight: 'LX76', name: 'Monica Geller'}
// 1: {flight: 'LX584', name: 'George Cooper'}

// New Method
// newBook.apply(swiss, flightData) both are same
newBook.call(swiss, ...flightData); // George Cooper booked a seat on Swiss Air Lines flight LX584
console.log(swiss.bookings);

//===============================================================================

// BIND METHOD

// newBook.call(spiceJet, 967, "Samantha S.");

const bookSJ = newBook.bind(spiceJet);
const bookAI = newBook.bind(airIndia);
const bookLX = newBook.bind(swiss);

bookSJ(23, "Jim Sim"); // Jim Sim booked a seat on Spice Jet flight SJ23
bookAI(456, "Dwight Schrute"); // Dwight Schrute booked a seat on Air India flight AI456
bookLX(24, "Pam Bissly"); // Pam Bissly booked a seat on Swiss Air Lines flight LX24

console.log(airIndia.bookings); // (4) [{…}, {…}, {…}, {…}]
console.log(spiceJet.bookings); // (2) [{…}, {…}]
console.log(swiss.bookings); // (4) [{…}, {…}, {…}, {…}]

// ex- set a value for a specific flight Number
const bookSJ33 = newBook.bind(spiceJet, 33);
bookSJ33("Rajesh Rao"); // Rajesh Rao booked a seat on Spice Jet flight SJ33
bookSJ33("Tanmay Saha"); // Tanmay Saha booked a seat on Spice Jet flight SJ33
console.log(spiceJet.bookings); // (4) [{…}, {…}, {…}, {…}]

// With Event Listenders

// EX- Suppose airIndia ha 300 planes, but when we click on buy new Button planes number should increse

// airIndia.planes = 300;
// airIndia.buyPlane = function () {
//   console.log(this); // <button class="buy">Buy new plane 🛩</button>
//   this.planes++;
//   console.log(this.planes); // NAN
// };
// document.querySelector(".buy").addEventListener("click", airIndia.buyPlane);
//=========================================================================================
//.
//.
//.
//.
//.
//=========================================================================================

// For Correction = call airIndia.buyPlane() function outside, but it workd once a time

// airIndia.planes = 300;
// airIndia.buyPlane = function () {
//   console.log(this); // {airline: 'Air India', iataCode: 'AI', bookings: Array(4), planes: 300, book: ƒ, …}
//   this.planes++;
//   console.log(this.planes); // 301 (Depends on how many times we clicked on buy button)
// };
// airIndia.buyPlane();
// document.querySelector(".buy").addEventListener("click", airIndia.buyPlane);

//=========================================================================================
//.
//.
//.
//.
//.
//=========================================================================================

// For Correction = use Bind Method in Modern Js with calling that function outside

airIndia.planes = 300;
airIndia.buyPlane = function () {
  console.log(this); // {airline: 'Air India', iataCode: 'AI', bookings: Array(4), planes: 300, book: ƒ, …}
  this.planes++;
  console.log(this.planes); // 308 (Depends on how many times we clicked on buy button)
};
document
  .querySelector(".buy")
  .addEventListener("click", airIndia.buyPlane.bind(airIndia));

//=========================================================================================
//.
//.
//.
//.
//.
//=========================================================================================

// Partial Application

const addTax = (rate, value) => value + value * rate;
// 10% of 200
console.log(addTax(0.1, 200)); //220

// const addVAT = addTax.bind(addTax, 0.23); // same
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // 123
// addVAT = (value) => value + value * 0.23;
console.log(addVAT(500)); // 615

//=========================================================================================
//.
//.
//.
//.
//.
//=========================================================================================

// Grid (function return function)

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

//specify rate
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); // 123
console.log(addVAT2(23)); // 28.29
