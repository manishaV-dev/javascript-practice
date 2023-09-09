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
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public method (Interface)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    // return this is used for make method more chainable
    return this;
  }

  // calling a method in another method
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
    }
    return this;
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
acc1.deposit(780);
acc1.withdraw(560);
console.log(acc1);

// Chaining

// Not Working
// acc1.deposit(700).deposit(7000).withdraw(678).requestLoan(23400).withdraw(4000); // Uncaught TypeError: Cannot read properties of undefined (reading 'deposit')

// for working this, add return to this to make methods chainable
acc1.deposit(700).deposit(7000).withdraw(678).requestLoan(23400).withdraw(4000);

console.log(acc1.getMovements()); // [780, -560, 700, 7000, -678, 23400, -4000]
