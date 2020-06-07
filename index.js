import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing 
the following pieces of data 
*/

const Final2014 = [
{
    "Year": 2014,
    "Datetime": "13 Jul 2014 - 16:00",
    "Stage": "Final",
    "Stadium": "Estadio do Maracana",
    "City": "Rio De Janeiro",
    "Home Team Name": "Germany",
    "Home Team Goals": 1,
    "Away Team Goals": 0,
    "Away Team Name": "Argentina",
    "Win conditions": "Germany win after extra time",
    "Attendance": 74738,
    "Half-time Home Goals": 0,
    "Half-time Away Goals": 0,
    "Referee": "Nicola RIZZOLI (ITA)",
    "Assistant 1": "Renato FAVERANI (ITA)",
    "Assistant 2": "Andrea STEFANI (ITA)",
    "RoundID": 255959,
    "MatchID": 300186501,
    "Home Team Initials": "GER",
    "Away Team Initials": "ARG"
  }
];



/*
(a) Home Team name for 2014 world cup final*/
const finalHome = Final2014.map((team) => {
    return {"Home Team Name": team["Home Team Name"]}

});

console.log(finalHome);





/*
// const filterLargeStates = data.filter((state) => {
//   return state.population <= 1000000 && state.land_area <= 100 ;
// });

// console.log(filterLargeStates);



/*
(b) Away Team name for 2014 world cup final*/
const finalAway = Final2014.map((team) => {
    return {"Away Team Name": team["Away Team Name"]}

});

console.log(finalAway);

/*
(c) Home Team goals for 2014 world cup final*/
const finalHomeGoals = Final2014.map((goal) => {
    return {"Home Team Goals": goal["Home Team Goals"]}
});

console.log(finalHomeGoals);



/*
(d) Away Team goals for 2014 world cup final*/
const finalAwayGoals = Final2014.map((goal) => {
    return {"Away Team Goals": WebGLUniformLocation["Away Team Goals"]}
});

console.log(finalAwayGoals);

/*
(e) Winner of 2014 world cup final */

const finalWinCondition = Final2014.map((win) => {
    return {"Win conditions": win["Win conditions"]}
});

console.log(finalWinCondition);


/* Task 2: Create a function called  getFinals that takes `data` as an argument 
and returns an array of objects with only finals data */

function getFinals(/* code here */) {

    /* code here */

};

/* Task 3: Implement a higher-order function called `getYears` that accepts 
the callback function `getFinals`, and returns an array called `years` containing 
all of the years in the dataset */

function getYears(/* code here */) {

    /* code here */

};

getYears();

/* Task 5: Implement a higher-order function called `getWinners`, that accepts 
the callback function `getFinals()` and determine the winner (home or away) of 
each `finals` game. 
Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that 
accepts the following parameters and returns a set of strings 
"In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
