// Inheritance Between "Classes" - Object.create()

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

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// StudentProto.calcAge = function () {
//   console.log(2030 - this.birthYear);
// };

const jay = Object.create(StudentProto);
jay.init("Jay", 2020, "CA");
console.log(jay);
jay.introduce();
jay.calcAge();
