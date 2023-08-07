"use strict";

console.log(this); //window object

const calcAge = function (birthYear) {
  console.log(2023 - birthYear); //24
  console.log(this); // undefined because there is no parent scope
};

calcAge(1999);

//Arroe function

const calcAgeArrow = (birthYear) => {
  console.log(2030 - birthYear); // 30
  console.log(this); // window object, because here we have global scope [console.log(this)] thats why it show same result if global has some other value it shows that value
};

calcAgeArrow(2000);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // it print JONAS object {year: 1991, calcAge: ƒ}
    console.log(2037 - this.year); // 46
  },
};

jonas.calcAge();

const matlida = {
  year: 1995,
};

matlida.calcAge = jonas.calcAge;
matlida.calcAge();
/////////////////////////////////////////////////////////////////////

var firstName = "Sam";

const mon = {
  firstName: "Monica",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year); // 46
  },

  //   greet: () => {
  //     // console.log(`hey ${this.firstName}`); // hey undefined, because arrow function don't have this keyword

  //     console.log(this); //window
  //     console.log(`hey ${this.firstName}`); // when we declare firstName with Var which is a window object it show is console hey sam and here this is also a window object
  //     // and here this.firstName means window.firstName which is Sam, so this is one of the reason that we should not use VAR varible
  //     // to avoid this error it should advise to not use arrow function as a method, always use function expression
  //   },

  //function expression

  greet: function () {
    console.log(`hey ${this.firstName}`); //hey Monica
  },
};
mon.greet();

/////////////////////////////////////////////////////////////////////

// use this in Function inside method

const sam = {
  firstName: "Sam",
  year: 1998,
  calcAge: function () {
    //method
    console.log(2037 - this.year); // 46

    //create a function indide method

    // const mellanial = function () {
    //   console.log(this); //undefined
    //   console.log(this.year >= 1988 && this.year <= 1996); //Uncaught TypeError: Cannot read properties of undefined (reading 'year')
    // };
    //mellanial();

    /*It is a regular function call, even though it happens inside of a method. And the rule says that inside a regular function call,

     which this clearly is, that this keyword must be undefined. And so therefore it is undefined right here.

    So this is just as if this function was outside of this method. */

    //==========================================================================================================
    //there are two solution : The first solution is to use an extra variable that we usually call self. So outside of the function, let's say self

    //solution one
    // const self = this;

    // const mellanial = function () {
    //   console.log(self); //undefined
    //   console.log(self.year >= 1988 && self.year <= 1996); // false which is correct
    // };

    // mellanial();

    //solution two

    const mellanial = () => {
      console.log(this); //{firstName: 'Sam', year: 1998, calcAge: ƒ}
      console.log(this.year >= 1988 && this.year <= 1996); // false which is correct
    };

    /*this worked because this arrow function uses the this keyword from its parent scope. And in this case, in the parent scope,
        the this keyword is Jonas. So basically an arrow function inherits the this keyword from the parent scope. */

    mellanial();
  },
};
sam.calcAge();

// ARGUMENTS Keyword

const addExpArg = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpArg(2, 3);
console.log(addExpArg(4, 6, 8, 3)); //10 // we can add mode arguments as there are only two parameter
