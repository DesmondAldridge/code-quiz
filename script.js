// GLOBAL VARIABLES

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

// QUESTIONS

function beginQuiz() {
  //First question...
  questions.textcontent = "How many ___ are in ___?";
  firstChoice.textcontent = "a__";
  secondChoice.textcontent = "b__";
  thirdChoice.textcontent = "c__";
  fourthChoice.textcontent = "d__";
  //Make them choosable
    firstChoice.addEventListener('click', function(){alert('Incorrect')});
    secondChoice.addEventListener('click', function(){alert('Incorrect')});
    thirdChoice.addEventListener('click', function(){alert('Correct!'), contQuiz()});
    fourthChoice.addEventListener('click', function(){alert('Incorrect')});
}

function contQuiz () {
  //Second question...
  questions.textcontent = "which ___ are ___?";
  firstChoice.textcontent = "a__";
  secondChoice.textcontent = "b__";
  thirdChoice.textcontent = "c__";
  fourthChoice.textcontent = "d__";
  //Make them choosable
    firstChoice.addEventListener('click', function(){alert('Incorrect')});
    secondChoice.addEventListener('click', function(){alert('Correct!'), contQuiz2()});
    thirdChoice.addEventListener('click', function(){alert('Incorrect')});
    fourthChoice.addEventListener('click', function(){alert('Incorrect')});
}

function contQuiz2 () {
  //Second question...
  questions.textcontent = "How is ___?";
  firstChoice.textcontent = "a__";
  secondChoice.textcontent = "b__";
  thirdChoice.textcontent = "c__";
  fourthChoice.textcontent = "d__";
  //Make them choosable
    firstChoice.addEventListener('click', function(){alert('Incorrect')});
    secondChoice.addEventListener('click', function(){alert('Incorrect')});
    thirdChoice.addEventListener('click', function(){alert('Incorrect')});
    fourthChoice.addEventListener('click', function(){alert('Correct!'), contQuiz3()});
}

function contQuiz3 () {
  //Second question...
  questions.textcontent = "____?";
  firstChoice.textcontent = "a__";
  secondChoice.textcontent = "b__";
  thirdChoice.textcontent = "c__";
  fourthChoice.textcontent = "d__";
  //Make them choosable
    firstChoice.addEventListener('click', function(){alert('Incorrect')});
    secondChoice.addEventListener('click', function(){alert('Incorrect')});
    thirdChoice.addEventListener('click', function(){alert('Incorrect')});
    fourthChoice.addEventListener('click', function(){alert('Correct!'), endPage()});
}




// ONTO THE QUIZ...

//
//

var secondsLeft = 60;

function beginQuiz() {
  //First question...
  questions.textcontent = "How many ___ are in ___?";
  firstChoice.textcontent = "a__";
  secondChoice.textcontent = "b__";
  thirdChoice.textcontent = "c__";
  fourthChoice.textcontent = "d__";
  //Make them choosable
    firstChoice.addEventListener('click', function(){alert('Incorrect')});
    secondChoice.addEventListener('click', function(){alert('Incorrect')});
    thirdChoice.addEventListener('click', function(){alert('Correct!'), contQuiz()});
    fourthChoice.addEventListener('click', function(){alert('Incorrect')});
}

var pressStart = function(){
  startBtn.addEventListener("click", function() {
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