// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected Property
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // Public Interface

//   getMovements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   // calling a method in another method
//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log("Loan Approved");
//     }
//   }
// }

// const acc1 = new Account("Jonas", "EUR", 8888);
// console.log(acc1); // Account {owner: 'Jonas', currency: 'EUR', pin: 8888, movements: Array(0), locale: 'en-IN'}

// acc1.deposit(780);
// acc1.withdraw(560);
// // console.log(acc1); // movements: (2) [780, -560]
// acc1.requestLoan(7000);
// acc1._approveLoan(7000); // nothing to do here but behind the scene, here we need data privacy
// console.log(acc1); // movements: (2) [780, -560, 7000]

/*
========================================================================
========================================================================
========================================================================
*/

// 1. Public Field
// 2. Private Field
// 3. Public Method
// 4. Private Method
// There is also the static method

class Account {
  // Public Field (Instance)
  locale = navigator.language;

  // Private Field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public method (Interface)

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  // calling a method in another method
  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
    }
  }

  // static method (usually used for some helper function because these static method will not be available on all the instances, but only on the class itself)

  static helper() {
    console.log("Helper");
  }

  //  private method
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 8888);
console.log(acc1); // Account {owner: 'Jonas', currency: 'EUR', pin: 8888, movements: Array(0), locale: 'en-IN'}

acc1.deposit(780);
acc1.withdraw(560);
// console.log(acc1); // movements: (2) [780, -560]
acc1.requestLoan(7000);
// acc1._approveLoan(7000); // nothing to do here but behind the scene, here we need data privacy
console.log(acc1); // movements: (2) [780, -560, 7000]
console.log(acc1.getMovements()); // (3) [780, -560, 7000]
// console.log(acc1.#movements); // Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class
// console.log(acc1.#pin);

// console.log(acc1.#approveLoan(7000));
// Uncaught SyntaxError: Private field '#approveLoan' must be declared in an enclosing class

console.log(acc1); // [[PrivateMethods]]: PrivateMethods[1]

Account.helper();
