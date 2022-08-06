var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Enter your name: ");
console.log('Welcome ' + userName + " to " + "quiz");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    score = score + 1;
    console.log("Right")
  } else {
    console.log("Wrong")
  }
  console.log("Your score is: " + score);
  console.log("-------------------------");
}

var qA = [{ question: "where do I live ?", answer: "rudrapur" },
{ question: "My favorite outdoor game ? ", answer: "football" },
{ question: "My favorite indoor game ? ", answer: "chess" },
{ question: "My favorite mobile game ? ", answer: "bgmi" },
{ question: "My favorite computer game ? ", answer: "gta" },
{ question: "My favorite color ? ", answer: "blue" },
{ question: "My favorite animal ? ", answer: "dog" },
{ question: "My favorite anime character ? ", answer: "gojo" },
{ question: "My favorite anime ? ", answer: "demon slayer" },
{ question: "My favorite movie ? ", answer: "avengers" }]

for (let i = 0; i < qA.length; i++) {
  var current = qA[i];
  play(current.question, current.answer)
}