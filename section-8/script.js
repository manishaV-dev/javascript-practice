"use strict";

//   2. (Parent)
function calcAge(birthyear) {
  const age = 2023 - birthyear;
  console.log(firstName); //firstName John

  //   3. (Child)
  function printAge() {
    let output = `${firstName} is ${age} years old and his birth year is ${birthyear}`; //firstName John
    console.log(output);

    // 4. Block Scope
    if (birthyear >= 1991 && birthyear <= 1996) {
      var millanial = true;

      //create new variable with same name of outer scope
      const firstName = "Steven";
      //Re-assigning variable of outer scope
      output = "New Output";
      const str = `oh, and you are a millanial, ${firstName}`; //here firstname is Steven
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 3));
    }

    // 4. Block Scope

    // console.log(add(2, 3)); get error because it is a block scoped function so we cannot access it in outer scope
    console.log(millanial); // can access, because var is function scoped
    // console.log(str); get error because const str is a block scoped so we cannot access it in outer scope

    console.log(output); // "new output" because we re-assign the output variable
  }
  //   3. (Child)
  printAge();
  return age;
}
//   2. (Parent)

// 1. Global Scope
const firstName = "John";
calcAge(1992);

////////////////////////////////
// console.log(age); // get error beacause we do not have access to any variables defined in any other scope.
// printAge();   // get error beacause we do not have access to any variables defined in any other scope.
