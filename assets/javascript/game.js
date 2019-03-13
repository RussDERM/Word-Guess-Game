//playerGuess will hold all player inputs.
var playerGuess = "";
//badGuesses will hold exactly those
var badGuesses = "";
//var to contain number of lives
var livesLeft = 15;
// Array to hold all guessable strings
var guessUs = ["Covenant", "Prometheus", "Aliens"];
// Variable will hold current word user is guessing.
// guessMe takes guessUs['position'], and uses Math.random to generate a random number between 0 and 1.
// That number is then multiplied against the length of the string, and rounded down to the nearest integer. 
// Because the length of the string is a factor, the result will be a position within the array
var guessMe = guessUs[Math.floor(Math.random() * guessUs.length)]
//the guessLine array will create the correct amount of underscores to denote the length of guessMe
var guessLine = [];
//remaining Letters will keep track of how many letters are left for the player to guess, when it reaches zero the player will have won
var remainingLetters = guessMe.length;

// Creates array of underscores equal to length of guessMe, stores it in var guessLine
for (var i = 0; i < guessMe.length; i++) {
   guessLine[i] = "_";
}
//Displays guessLine
//document.getElementById("guess-me-test").innerHTML = guessMe;
document.getElementById("underscores").innerHTML = guessLine.join(" ");

//Handles player input
//keypress used instead of keydown/up, as it is better for this application
window.addEventListener("keypress", processInput); 
//function called in line above, stores individiual inputs
function processInput(event) {
    playerGuess = String.fromCharCode(event.charCode);
    console.log(playerGuess);
}
//Loop to check if guess is good or bad
for (var j = 0; j < guessMe.length; j++) {
    if (guessMe[j] === playerGuess) {
        guessLine[j] === playerGuess;
    }
    else {
        badGuesses += playerGuess;
        livesLeft--;
    }
}

//Game Loop
//while (remainingLetters > 0) {}


console.log(guessMe)
console.log(guessLine)
console.log(remainingLetters)
console.log(playerGuess)
console.log(livesLeft)
