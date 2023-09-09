class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface

  deposit(val) {
    this.movements.push(val);
  }

  // calling a method in another method
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 8888);
console.log(acc1); // Account {owner: 'Jonas', currency: 'EUR', pin: 8888, movements: Array(0), locale: 'en-IN'}

acc1.deposit(780);
acc1.withdraw(560);
// console.log(acc1); // movements: (2) [780, -560]
acc1.requestLoan(7000);
acc1.approveLoan(7000); // nothing to do here but behind the scene, here we need data privacy
console.log(acc1); // movements: (2) [780, -560, 7000]
