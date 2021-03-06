// create variables for all elements

var wins = 0;
var losses = 0;
var totalScore = 0;
var targetNumber = 0;
var crystalBlue = 0;
var crystalGreen = 0;
var crystalRed = 0;
var crystalYellow = 0;

// Putting HTML elements into variables
var targetNumberText = $("#targetnumber-text");
var winsText = $("#wins-text");
var lossesText = $("#losses-text");
var totalScoreText = $("#totalscore-text");
var actionText = $("#action-text");
var startBtn = $("#start-button");
var startDiv = $("#start-div");
var playDiv = $("#play-div");

// the computer picks a random number between 19 - 120 and 
function start() {
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    console.log("Target Number: " + targetNumber);
    targetNumberText.text(`Target Number: ${targetNumber}`);

    // each crystal is set to a random hidden value between 1 - 12
    crystalBlue = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Blue: " + crystalBlue);
    crystalGreen = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Green: " + crystalGreen);
    crystalRed = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Red: " + crystalRed);
    crystalYellow = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Yellow: " + crystalYellow);
}

start()

// when the start button is clicked, display the game view
startBtn.click(function () {
    startDiv.css({ "display": "none" });
    playDiv.css({ "display": "initial" });
});

// when crystal is clicked, add the hidden value to the player's total score
$("#crystal-blue").click(function () {
    totalScore += crystalBlue;
    totalScoreText.text(`Your total score is: ${totalScore}`);
    actionText.text("You clicked the Blue Crystal!");
    // player wins if total score = random number
    if (totalScore === targetNumber) {
        wins++;
        actionText.text("You win!");
        winsText.text(`Wins: ${wins}`);
        // restart game
        start();
    }
    // player loses if total score > random number
    else if (totalScore > targetNumber) {
        losses++;
        actionText.text("You lost!");
        lossesText.text(`Losses: ${losses}`);
        // restart game
        start();
    };
});

$("#crystal-green").click(function () {
    console.log("You clicked the Green Crystal");
    totalScore += crystalGreen;
    totalScoreText.text(`Your total score is: ${totalScore}`);
    actionText.text("You clicked the Green Crystal!");
    // player wins if total score = random number
    if (totalScore === targetNumber) {
        wins++;
        actionText.text("You win!");
        winsText.text(`Wins: ${wins}`);
        // restart game
        start();
    }
    // player loses if total score > random number
    else if (totalScore > targetNumber) {
        losses++;
        actionText.text("You lost!");
        lossesText.text(`Losses: ${losses}`);
        // restart game
        start();
    };
});

$("#crystal-red").click(function () {
    console.log("You clicked the Red Crystal");
    totalScore += crystalRed;
    totalScoreText.text(`Your total score is: ${totalScore}`);
    actionText.text("You clicked the Red Crystal!");
    // player wins if total score = random number
    if (totalScore === targetNumber) {
        wins++;
        actionText.text("You win!");
        winsText.text(`Wins: ${wins}`);
        // restart game
        start();
    }
    // player loses if total score > random number
    else if (totalScore > targetNumber) {
        losses++;
        actionText.text("You lost!");
        lossesText.text(`Losses: ${losses}`);
        // restart game
        start();
    };
});

$("#crystal-yellow").click(function () {
    console.log("You clicked the Yellow Crystal");
    totalScore += crystalYellow;
    totalScoreText.text(`Your total score is: ${totalScore}`);
    actionText.text("You clicked the Yellow Crystal!");
    // player wins if total score = random number
    if (totalScore === targetNumber) {
        wins++;
        actionText.text("You win!");
        winsText.text(`Wins: ${wins}`);
        // restart game
        start();
    }
    // player loses if total score > random number
    else if (totalScore > targetNumber) {
        losses++;
        actionText.text("You lost!");
        lossesText.text(`Losses: ${losses}`);
        // restart game
        start();
    };
});