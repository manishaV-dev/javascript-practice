/*

We are building a football betting app 

Suppose we get data from a web service about a certain game (below). In this challange
we're gonna work with the data. So, here are your task:

1. Create one player array for each team (variable 'Player1' and 'Player2')

2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (Team1) create one variable ('gk) with the goalkeeper's name
and one array ('fieldPlayer) with all the remaining 10 field players.

3. Create an array 'allPlayers' containing all players of both team (22 players).

4. During the game, Bayern Munich (team1) used 3 substitute players. So create a new array 
('player1Final) containing
all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odd object, create one variable for each odd(called 'team1', 'draw', 
and 'team2')

6. Write a function ('printGoal') that receives an arbitrary number of player names
(Not an array) and prints each of them to the console, along with the number of goals
that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to wind. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary opertaor.

TEST DATA FOR 6: use players 'Davies', 'Muller', 'Lewandowski' and 'Kimchi'. Then 
call the function again with players from game.scored

*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimichi",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],

    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "witzel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],

  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "June 19th 2023",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. using DESTRUCTNG ==============================================================================================
const [player1, player2] = game.players;
console.log(player1); // 11 players name
console.log(player2); // 11 players name

//2... using REST OPERATOR ===========================================================================================
const [gk, ...fieldPlayers] = player1;
console.log(gk); // Neuer
console.log(fieldPlayers); // rest 10 players name

// 3...using Spread Operator =========================================================================================
const allPlayers = [...player1, ...player2];
console.log(allPlayers); // 22 players name

//4.. ADD 3 new players in Player 1 ==================================================================================
const player1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(player1Final); // 14 players name

//5. NESTED DESTRUCTING ==============================================================================================

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2); // 1.33  3.25   6.5

// 6 ....

const printGoal = function (...players) {
  //   console.log(players);
  console.log(`${players.length} goals are scored`); // 4 goals are scored
};

// printGoal("Davies", "Muller", "Lewandowski", "Kimchi"); 4 goals are scored
printGoal(...game.scored); // 4 goals are scored

// Print player 1 name
// console.log(...player1); // Neuer Pavard Martinez Alaba Davies Kimichi Goretzka Coman Muller Gnarby Lewandowski

// Print player 1 name
for (let i = 0; i < player1.length; i++) {
  console.log(player1[i]); // print all player name one by one
}

//7

team1 < team2 && console.log("team 1 is likely to win"); //team 1 is likely to win
team1 > team2 && console.log("team 2 is likely to win");

/*-----------------------------------------------------------------------------------------------------------*/

//CHALLANGE 2

/*

1. Loop over the game.scored array and print each player name to the console, along with the
goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log ot to the console (we already studied how to 
  calculate averages, you can go check if you don't remember).

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
          Odd of victory Bayern Munich: 1.33
          Odd of Draw: 3.25
          Odd of victory Borrussia Dortmund: 6.5

Get the team name directly form the game objects, don't hardcode them (except for "draw").

HINT: Note how to odds and the game objects have to same property names.

BONUS: Create an objects called 'scorers' which contains the names of the players who scored as 
properties, and the number of goals as the value. In this game, it will look like this:

                    {
                      Gnarby: 1,
                      Hummels: 1,
                      Lewandowski: 2
                    }

*/

//1

for (const [i, players] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${players}`);

  /*
 Goal 1: Lewandowski
 Goal 2: Gnarby
 Goal 3: Lewandowski
 Goal 4: Hummels

  */
}

//2.

const oddVar = Object.values(game.odds);
let average = 0;
for (const odd of oddVar) {
  average += odd;
  average /= oddVar.length;
}
console.log(average); // 2.577037037037037

//3

// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(team, odd);

//   /*
// team1 1.33
// x 3.25
// team2 6.5

//   */
// }

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "Draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);

  /*
          Odd of victory Bayern Munich: 1.33
          Odd of Draw: 3.25
          Odd of victory Borrussia Dortmund: 6.5
  */
}

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and
// then increase the count as we encounter a new occurence of a certain element

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers); // {Lewandowski: 2, Gnarby: 1, Hummels: 1}

/*=================================================================================================================================*/
/*=================================================================================================================================*/

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus 
  some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)

2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
So remove this event from the game events log.

3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, 
    like this:
          [FIRST HALF] 17: ⚽️ GOAL


*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1
const eventsSet = new Set(gameEvents.values());
console.log(eventsSet); // Set(4) {'⚽️ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card'}

// to convert set into array, use [ ] and to unpack that use ... operator

const events = [...new Set(gameEvents.values())];
console.log(events); // (4) ['⚽️ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card']

//2
gameEvents.delete(64);

//3

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
); //An event happened, on average, every 9 minutes

//BONUS-- so actually we have 92 minutes
//so here we want that last minute using pop method

const time = [...gameEvents.keys()].pop();
console.log(time); // 92

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
); // An event happened, on average, every 9.2 minutes

//4

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "HALF" : "SECOND";
  console.log(`${half} ${min} : ${event}`);

  /*
HALF 17 : ⚽️ GOAL
HALF 36 : 🔁 Substitution
SECOND 47 : ⚽️ GOAL
SECOND 61 : 🔁 Substitution
SECOND 69 : 🔴 Red card
SECOND 70 : 🔁 Substitution
SECOND 72 : 🔁 Substitution
SECOND 76 : ⚽️ GOAL
SECOND 80 : ⚽️ GOAL
SECOND 92 : 🔶 Yellow card

  */
}
