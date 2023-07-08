///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challange #01


/*
Mark and john are trying to compare their BMI (Body Mass Ibdex), which is calculated using the formula:

BMI = mass / (height * height).

(mass in KG and Height in meter).

1. store mark's and john's mass and height in variables.
2. calculate both their BMI's using the Formula
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.


Test Data 1: Mark weights 78kg and is 1.69m tall.
john weights 92kg and is 1.95m tall.

test Data 2: Marks weights 95kg and 1.88m tall.
john weights 85kg and is 1.76m tall.


*/


let markWeight, JohnWeight, markHeight, JohnHeight;

markWeight = 78;
JohnWeight = 92;
markHeight = 1.69;
JohnHeight = 1.95;



// let markWeight, JohnWeight, markHeight, JohnHeight;

// markWeight = 95;
// JohnWeight = 85;
// markHeight = 1.88;
// JohnHeight = 1.76;



let markBMI = markWeight / (markHeight * markHeight);
console.log(markBMI);

let johnBMi = JohnWeight / (JohnHeight * JohnHeight);
console.log(johnBMi);

let markHigherBMI = markBMI > johnBMi;
console.log(markHigherBMI);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challange #02

/*

Use the BMI example for challange #1, and the code you already wrote, and improve it.


1. Print a nice output to the console, saying who has the higher BMI. The message can be either 
"Mark's" MBI is higher than john's! or John's BMI is higher than Mark's!

2. Use a template string to include the BMI values is the outputs. 
Example: "Mark's BMI (28.3) is higher than john's (23.9)!"

*/


// if(markBMI > johnBMi){
//     console.log("Mark's BMI is higher than John's BMI");
// }else{
//     console.log("John's BMI is higher than Mike's BMI");
// }


if (markBMI > johnBMi) {
    console.log(`Mark's BMI (${markBMI}) is Higher than John's (${johnBMi})`);
} else {
    console.log(`John's (${johnBMi}) is Higher than Mark's BMI (${markBMI})`);
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challange #03


/*

There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times, The winner with the highest average score wins a trophy.

1. Calculate the average score for each team, using the test data below:

2. Compare the team's average scores to determine the winner of the competition, and print it to 
the console. Don't forget that there can be a draw, so test for that as well.

3. Bonus 1. Include a requirement for a minimum score of 100. with this rule, a team only wins
if it has a higher score than the other team, and the same time a score of at least 100 points.
Hint: use a logical operators to test for minimum score, as well as multiple else-if blocks.

4. BONUS 2. Minimum score also applies to a draw! so a draw only happens when both teams have the 
same score and both have a score greater or equal 100 points. otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.

TEST DATA BONUS 1 : Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.

TEST DATA BONUS 2 : Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.

*/

const DolphinFirstMatchScore = 96;
const DolphinSecondMatchScore = 108;
const DolphinThirdMatchScore = 89;

const avgTeamDolphin = (DolphinFirstMatchScore + DolphinSecondMatchScore + DolphinThirdMatchScore) / 3;
console.log(avgTeamDolphin);


const KoalaFirstMatchScore = 88;
const KoalaSecondMatchScore = 91;
const KoalaThirdMatchScore = 110;

const avgTeamKoala = (KoalaFirstMatchScore + KoalaSecondMatchScore + KoalaThirdMatchScore) / 3;
console.log(avgTeamKoala);


if (avgTeamDolphin > avgTeamKoala) {
    console.log("Team Dolphin is the Winner!!")
} else if (avgTeamDolphin < avgTeamKoala) {
    console.log("Team Koala is the Winner!!")
} else {
    console.log("Match is Draw");
}


/////////////////////////////////////////////////////////


const DolphinBonusFirstMatchScore = 97;
const DolphinBonusSecondMatchScore = 112;
const DolphinBonusThirdMatchScore = 101;

const avgTeamDolphinBonus = (DolphinBonusFirstMatchScore + DolphinBonusSecondMatchScore + DolphinBonusThirdMatchScore) / 3;
console.log(avgTeamDolphinBonus);


const KoalaBonusFirstMatchScore = 109;
const KoalaBonusSecondMatchScore = 95;
const KoalaBonusThirdMatchScore = 123;

const avgTeamKoalaBonus = (KoalaBonusFirstMatchScore + KoalaBonusSecondMatchScore + KoalaBonusThirdMatchScore) / 3;
console.log(avgTeamKoalaBonus);


const minimumScore = 100;

if (avgTeamDolphinBonus > avgTeamKoalaBonus && avgTeamDolphinBonus >= minimumScore) {
    console.log("Team Dolphin is the winner in Bonus 1 match");
} 
else if (avgTeamDolphinBonus < avgTeamKoalaBonus && avgTeamKoalaBonus >= minimumScore) {
    console.log("Team Koala is the winner in Bonus 1 match");
} 
else {
    console.log("Match Drawn!!");
}


/////////////////////////////////////////////////////////


const DolphinBonusSecFirstMatchScore = 97;
const DolphinBonusSecSecondMatchScore = 112;
const DolphinBonusSecThirdMatchScore = 101;

const avgTeamDolphinBonusSec = (DolphinBonusSecFirstMatchScore + DolphinBonusSecSecondMatchScore + DolphinBonusSecThirdMatchScore) / 3;
console.log(avgTeamDolphinBonusSec);


const KoalaBonusSecFirstMatchScore = 109;
const KoalaBonusSecSecondMatchScore = 95;
const KoalaBonusSecThirdMatchScore = 106;

const avgTeamKoalaBonusSec = (KoalaBonusSecFirstMatchScore + KoalaBonusSecSecondMatchScore + KoalaBonusSecThirdMatchScore) / 3;
console.log(avgTeamKoalaBonusSec);

if (avgTeamDolphinBonusSec === avgTeamDolphinBonusSec && avgTeamDolphinBonusSec >= minimumScore && avgTeamDolphinBonusSec >= minimumScore) {
    console.log("Both Team win")
}


/////////////////////////////////////////////////////////////////////////////

// shortcut

// const teamDolphins = (96 + 108 + 89) / 3;
// const teamKoala = (88 + 100 + 110) / 3;

// if (teamDolphins > teamKoala) {
//     console.log("Team Dolphin is the Winner!!")
// } else if (teamDolphins < teamKoala) {
//     console.log("Team Koala is the Winner!!")
// }else{
//     console.log("Match is Draw");
// }


// bonus 1

const teamDolphins = (97 + 112 + 81) / 3;
const teamKoala = (109 + 95 + 86) / 3;

if (teamDolphins > teamKoala && teamDolphins >= 100) {
    console.log("Team Dolphin is the Winner!!")
} 

else if (teamDolphins < teamKoala && teamKoala >= 100) {
    console.log("Team Koala is the Winner!!")
} 

else if (teamDolphins === teamKoala && teamDolphins >= 100 && teamKoala >= 100) {
    console.log("Both Team is the winner!")
} 

else {
    console.log("No one win the match 😥");
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challange #04


/*

Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his
country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, 
the tip is 20%.


1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'TIP' for
this. It's not allowed to use an if/else statement.

2. Print a string to the console containing the bill value, the tip, and the final value (bill+tip).
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'


TEST DATA: Test data for Bill Values 275, 40 and 430.

*/

const bill = 275;
const tip = bill >=50 && bill <=300 ? bill*15/100 : bill*20/100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


const bill2 = 40;
const tip2 = bill2 >=50 && bill2 <=300 ? bill2*15/100 : bill2*20/100;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);


const bill3 = 430;
const tip3 = bill3 >=50 && bill3 <=300 ? bill3*15/100 : bill3*20/100;
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`);
