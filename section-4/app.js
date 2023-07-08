"use strict";

//Problem:

/*
We work for a company building a smart home thermometer. Our most recent task is this:

"Given an array of temperatures of the one day, calculate the temperature amplitude.
Keep in mind that sometimes there might be a sensor error"


*/

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// console.log(temperature.length);
// console.log(temperature[temperature.length - 2]);

/*

What is Temperature amplitude?

The temperature amplitude is the difference between the minimum and maximum temperature that occurred within a 
specific recording time period (e.g. last 24h).

*/

const calTempAmplitude = function (temps) {

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if(typeof currentTemp !== 'number') continue;

    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }

  console.log(max, min);

  return max - min;
};

// calTempAmplitude([3, 7, 1, 9]);

const amplitude = calTempAmplitude(temperature);
console.log(amplitude);


//////////////////////////////////////////////////////////////////////////////////////////////

//Problem 2:

// Function should now receive 2 arrays of temps.

//How to merge 2 array.


const temperature1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [24, 20, 17, 15, 10, 5, 3, 1];

const calTempAmplitudeNew = function (t1, t2) {

    const temps = t1.concat(t2);


    let max = temps[0];
    let min = temps[0];
  
    for (let i = 0; i < temps.length; i++) {
      const currentTemp = temps[i];
  
      if(typeof currentTemp !== 'number') continue;
  
      if (currentTemp > max) {
        max = currentTemp;
      }
      if (currentTemp < min) {
        min = currentTemp;
      }
    }
  
    console.log(max, min);
  
    return max - min;
  };
  

  
  const amplitudeNew = calTempAmplitudeNew(temperature1, temperature2);
  console.log(amplitudeNew);


