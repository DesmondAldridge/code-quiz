// GLOBAL VARIABLES //

// TIMER & START BUTTON
var theTimer = document.getElementById("timer");
var theTime = document.getElementById("time");
var theStart = document.getElementById("startDiv");
var startButton = document.getElementById("startBtn");

var secondsLeft = 60;

// QUIZ AREA
var quizBox = document.getElementById("quizDiv");
var questions = document.getElementById("questionLine");
var firstChoice = document.getElementById("choice1");
var secondChoice = document.getElementById("choice2");
var thirdChoice = document.getElementById("choice3");
var fourthChoice = document.getElementById("choice4");

//TIMER
function startTimer () {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = "Seconds left: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert('Times Up');
      toEndPage();
    }
  }, 1000);
}


// KEEPING SCORE
var counter = document.querySelector("#counter");
var count = localStorage.getItem("count");

// counter.textContent = count;

function addPt() {
  count++;
  counter.textContent = count;

  localStorage.setItem("count", count);
};

// ENDING THE GAME

function toEndPage() {
  window.location.replace("endPage.html");
}

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
    thirdChoice.addEventListener('click', function(){alert('Correct!'), function contQuiz () {
      //Second question...
      questions.textcontent = "Which ___ are ___?";
      firstChoice.textcontent = "a__";
      secondChoice.textcontent = "b__";
      thirdChoice.textcontent = "c__";
      fourthChoice.textcontent = "d__";
      //Make them choosable
        firstChoice.addEventListener('click', function(){alert('Incorrect')});
        secondChoice.addEventListener('click', function(){alert('Correct!'), addPt(), function contQuiz2 () {
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
            fourthChoice.addEventListener('click', function(){alert('Correct!'), addPt(), function contQuiz3 () {
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
                fourthChoice.addEventListener('click', function(){alert('Correct!'), addPt(), toEndPage()});
            }
        thirdChoice.addEventListener('click', function(){alert('Incorrect')});
        fourthChoice.addEventListener('click', function(){alert('Incorrect')});
    }
    fourthChoice.addEventListener('click', function(){alert('Incorrect')});
}






// LAUNCHING THE QUIZ...

var pressStart = function(){
  startBtn.addEventListener("click", beginQuiz(), startTimer());
}

