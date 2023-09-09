// Inheritance Between "Classes" - Constructor Function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2038 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // Add property of Parent Class
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2000, "CS");
mike.introduce();
mike.calcAge(); // 38

console.log(mike instanceof Student);
console.log(mike instanceof Person);
