// Array to hold all guessable strings
var guessUs = ["Covenant", "Prometheus", "Aliens"];
// Variable will hold current word user is guessing.
// guessMe takes guessUs['position'], and uses Math.random to generate a random number between 0 and 1.
// That number is then multiplied against the length of the string, and rounded down to the nearest integer. 
// Because the length of the string is a factor, the result will be a position within the array
var guessMe = guessUs[Math.floor(Math.random() * guessUs.length)]
// guessLine variable will hold all info displayed on the guess line
var guessLine

//guessLine will create the correct amount of underscores to denote the length of guessMe
var guessLine = [];
for (var i = 0; i < guessMe.length; i++) {
   guessLine[i] = "_";
}


console.log(guessMe)
console.log(guessLine)