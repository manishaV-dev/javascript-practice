"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this, Instead of this use Prototype Inheritance to create method
  //   this.calcAge = function () {
  //     console.log(2037 - birthYear);
  //   };
};

const manisha = new Person("Manisha", 1998);
console.log(manisha);
const jonas = new Person("Jonas", 1991);
const jack = new Person("Jack", 1987);
console.log(jonas, jack);

console.log(manisha instanceof Person); // true

Person.hey = function () {
  console.log("Hey There! 🙋🏻‍♀️");
};

Person.hey();
// Prototype Inheritance

console.log(Person.prototype); // {constructor: ƒ}

Person.prototype.calcAge = function () {
  console.log(2038 - this.birthYear);
};
manisha.calcAge(); // 40
jonas.calcAge(); // 47

console.log(jonas.__proto__); // {calcAge: ƒ, constructor: ƒ}

Person.prototype.species = "Homo Sapiens";
console.log(manisha, jonas);
console.log(jack.species);

console.log(manisha.hasOwnProperty("firstName")); // true
console.log(manisha.hasOwnProperty("species")); // false, because species property is not really inside of the Manisha object

const arr = [3, 6, 5, 7, 8, 4, 5, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); // [3, 6, 5, 7, 8, 4, 9]

//=======================================================================================

// ES6 Classes

// Class Expression
// const PersonCl = class {};

// Class Declartion

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // method will be added to .prototype property
  calcAge() {
    console.log(2030 - this.birthYear);
  }

  // 2nd way == both work exactly the same
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // getters

  get age() {
    return 2030 - this.birthYear;
  }

  // Set a property that already exists
  set firstName(name) {
    console.log(name);
    if (name.includes(" ")) this._firstName = name;
    else alert(`${name} is not a valid name!`);
  }

  get firstName() {
    return this._firstName;
  }

  // static methods
  static hey() {
    console.log("Hey There! 🙋🏻‍♀️");
  }
}

const jesica = new PersonCl("Jesica jack", 1990);
console.log(jesica); // PersonCl {firstName: 'Jesica', birthYear: 1990}

jesica.calcAge(); // 40
console.log(jesica.age); // 40
console.log(jesica.__proto__ === PersonCl.prototype); // true
// 1 way
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jesica.greet(); // Hey Jesica

const walter = new PersonCl("Walter white", 1990);
PersonCl.hey();

//=======================================================================================

// Getters and Setters

const account = {
  owner: "Manisha",
  movements: [233, 700, 500, 400],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 400
account.latest = 500;
console.log(account.movements); // [233, 700, 500, 400, 500]

//=======================================================================================

// Object.create()

const PersonProto = {
  calcAge() {
    console.log(2030 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); // {}
// this is not a good way to do this so we call a method init() (You can give any name)
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge(); // 28

// better way
const sarah = Object.create(PersonProto);
sarah.init("Sarah", 2000);
sarah.calcAge();
