// Global variables

var theTimer = document.getElementById("timer");
var theTime = document.getElementById("time");
var theStart = document.getElementById("startDiv");
var startButton = document.getElementById("startBtn");

//
//

var quizBox = document.getElementById("quizDiv").style.visibility = "hidden";

//

var questions = document.getElementById("questionLine");
var firstChoice = document.getElementById("choice1");
var secondChoice = document.getElementById("choice2");
var thirdChoice = document.getElementById("choice3");
var fourthChoice = document.getElementById("choice4");

//
//

// ONTO THE QUIZ...

//
//

var secondsLeft = 60;

function beginQuiz() {
  
}

var pressStart = function(){
  startButton.addEventListener("click", function() {
    quizBox.style.visibility = "visible";
    function startTimer () {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          alert('Times Up');
        }
    
      }, 1000);
    }
    theStart.style.visibility = "hidden";
    beginQuiz();
  })