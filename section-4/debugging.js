const measureKelvin = function () {
  const measurement = {
    type: "Kelvin",
    unit: "Celcius",
    //C. Solve the error - to convert string to Number
    // value: Number(prompt("Enter the Value in Degree Celcius")),
    value: 10,
  };

  //B - Find where the error is coming from

  //   console.log(typeof measurement.value); // value is in string

  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  //   console.table(measurement); // show that object in table format.

  const Kelvin = measurement.value + 273;
  return Kelvin;
};

console.log(measureKelvin());

//A - Identify the error
// now it show wrong answer beacuase in Promt when we enter any value, the value is a String and here in
// value +  273 means string + any value will be also a string when we use + Operators.

// ex = 34 + 276 = 34276

//CODING  CHALLANGE #1

/*

Given an array of forecasted maximum temperatues, the thermonmeter displays a string with these 
temperatures.

example: [17, 21, 23] will print "... 17°C in 1 day ...21°C in 2 days ...23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above
to the console.

use the problem-solving framework: Understand the problem and break it up into sub-problems


TEST DATA 1: [17, 21, 23]
TEST DATA 2 : [12, 5, -5, 0, 4]


*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log("..." + str);
};

printForecast(data1);
