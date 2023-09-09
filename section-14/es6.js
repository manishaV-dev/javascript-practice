// Inheritance Between "Classes" - ES6 Classes

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
}

// if you want to add new property to child then use constructor otherwise you just need to extends them

// if you don't want to add new property
// class StudentCl extends PersonCl {}
// const martha = new StudentCl("Martha", 2012);
// console.log(martha);

// if you want to add new property
class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    // Always needs to happend first (Parent Class Constructor)
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }

  // Overwrite Parent class Method
  // Its works because in ProtoType , it appears at the top

  calcAge() {
    console.log(
      `I'm ${
        2030 - this.birthYear
      } years old, but as a student I feel more like ${
        2030 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha", 2012, "CS");
console.log(martha);
martha.introduce();
// martha.calcAge(); // 18
martha.calcAge(); // I'm 18 years old, but as a student I feel more like 28
