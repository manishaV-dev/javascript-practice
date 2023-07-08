/*======================================================================================================== */
// Challange *01 
//ABOUT FUNCTIONS

/*

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, 
which works differently.

Each team competes 3 times and then the average of the score is calculated (so one average score per team).

A team only wins if it has least DOUBLE the average score of the other team. otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.

2. Use the function to calculate the average for both teams.

3. Create a function 'checkWinner' that takes the average score of each team as parameters 
('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points,
according to the rule above. Example: "Koala win (30 vs 13)".

4. Use the 'checkWinner' function to determine the winner for both data 1 and data 2.

5. Ignore draws this time.


TEST DATA 1: Dolphins Score 44, 23 and 71. Koalas score 65, 54 and 49.

TEST DATA 2: Dolphins Score 85, 54 and 41. Koalas score 23, 34 and 27.


*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(9, 7, 7));

//test Data 1
const dolphinsAvg = calcAverage(44, 23, 71);
const koalaAvg = calcAverage(65, 54, 49);
console.log(dolphinsAvg, koalaAvg);

//test data 2
const dolphinsAvg2 = calcAverage(85, 54, 41);
const koalaAvg2 = calcAverage(23, 34, 27);
console.log(dolphinsAvg2, koalaAvg2);

const checkWinner = function (scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= 2 * scoreKoalas) {
        return `Team Dolphins is the Winner 🏆 (${scoreDolphins} vs ${scoreKoalas})`;
    } else if (scoreKoalas >= 2 * scoreDolphins) {
        return `Team Koalas is the Winner 🏆 (${scoreKoalas} vs ${scoreDolphins})`;
    } else {
        return `No Team Wins!!!`
    }
}

const whoIsWinner = checkWinner(dolphinsAvg, koalaAvg);
console.log(whoIsWinner);

const whoIsWinner2 = checkWinner(dolphinsAvg2, koalaAvg2);
console.log(whoIsWinner2);



/*======================================================================================================== */
// Challange *02
//ABOUT ARRAYS

/*

Steven is still building his tip calculator, using the same rules as before:
Tip 15% of the bill if the bil value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and return the corresponding tip,
calculated based on the rules above (You can check out the code from first tip calculator challange if
    you need to). Use the function type you like the most. Test the function using a bill value of 100.

2. And now lets use Arrays so create an array 'bills' containing the test data below.

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you
 created before.

Test Data: 125, 555 and 44.

*/

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return `Your Bill is ${bill} and your tip is ${bill * 15 / 100}`
    } else {
        return `Your Bill is ${bill} and your tip is ${bill * 20 / 100}`
    }
}

const findBill = calcTip(100);
console.log(findBill);

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);




/*======================================================================================================== */
// Challange *03

//ABOUT OBJECT

/*

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the
calculations! Remember: BMI = mass / height **2 or BMI = mass / (height * height).


1. For each of them, create an object with properties for their full name, mass, and heights.(Mark Miller
    and John Smith).

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).
Store the BMI Value to a property, and also return it from the method.

3. Log to the console who has the higher BMI, toghter with the full name and the respective BMI.
example: "John's BMI (28.3) is higher than the Mark's (23.9)".

TEST DATA: Marks weight 78kg and is 1.69m tall. John weights 92 kg and is 1.95m tall


*/

const marks = {
    firstName: 'Marks',
    lastName: 'Miller',
    height: 1.69,
    weight: 78,

    calcBMI: function () {
        // const marksBMI = `${this.weight / (this.height * this.height)}`;
        // return marksBMI;

        //OR

        this.bmi = this.weight / this.height ** 2;
        return this.bmi
    }


}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    weight: 92,

    calcBMI: function () {
        // const johnBMI = `${this.weight / (this.height * this.height)}`;
        // return johnBMI;

        //OR

        this.bmi = this.weight / this.height ** 2;
        return this.bmi
    }
}

// console.log(marks.calcBMI() , john.calcBMI());

// if(john.calcBMI() > marks.calcBMI()) {
//     console.log(`John's BMI (${john.calcBMI()}) is higher than the Mark's (${marks.calcBMI()})`);
// }else{
//     console.log(`Mark's BMI (${marks.calcBMI()}) is higher than the John's BMI (${john.calcBMI()})`);
// }

marks.calcBMI();
john.calcBMI();

console.log(marks.bmi, john.bmi);

if (john.bmi > marks.bmi) {
    console.log(`John's BMI (${john.bmi}) is higher than the Mark's (${marks.bmi})`);
} else {
    console.log(`Mark's BMI (${marks.bmi}) is higher than the John's BMI (${john.bmi})`);
}






/*======================================================================================================== */
// Challange *04

//ABOUT LOOPS

/*

1. Create an array 'bills' containing all 10 test bill values.
2. Create empty arrays for the tips and the totals ('tips and 'totals')
3. Use the 'calcTip' function we wrote before to calculate tips and total values
(bill + tip) for every bill value in the bills array.

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52


4. Bonus: write a function 'calcAverage' which takes an array called 'arr' as an argument
. This function calculates the average of all numbers in the given array. This is a DIFFICULT
challange (we haven't done this before)! Here is how to solve it:
    
        4.1. First, you will need to add up all values in the array. To do the addition
        start by creating a variables 'sum' that starts at 0. Then loop over the current
        value to the 'sum' variable. This way, by the end of the loop, you have all values
        added together

        4.2. To calculate the average, divide the sum you calculated before by the length
        of array (because that's the number of elements)

        4.3. Call the function with the 'totals' array



*/



const calcTipArray = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}



const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsArray = [];
const totalsArray = [];

for (let i = 0; i < billsArray.length; i++) {
    const tip = calcTipArray(billsArray[i]);
    tipsArray.push(tip);
    totalsArray.push(tip + billsArray[i])
}

console.log(billsArray, tipsArray, totalsArray);

// BONUS

const calcAvg = function (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        // sum = sum + arr[i]; 
        sum += arr[i]; //both are same
    }

    // console.log(sum);

    return sum / arr.length
}

// calcAvg([2,6,8]);

console.log(calcAvg([2, 6, 4]));
console.log(calcAvg([5, 0, 4]));
console.log(calcAvg([7, 4, 7]));
console.log(calcAvg([3, 9, 18]));

//average of tips and total array

console.log(calcAvg(tipsArray));
console.log(calcAvg(totalsArray));




//table of 3

// const multiNum = 3;
// for(i=1; i<=10; i++){
//     const result = i * multiNum ;
//     console.log(result);
// }



/*
// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for (let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}

*/



