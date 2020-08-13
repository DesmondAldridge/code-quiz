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

function contQuiz3 () {
  //Second question...
  questions.textcontent = "What was the focus of this assignment?";
  firstChoice.textcontent = "a.) No singular focus, this assignment stands as a general assessment test";
  secondChoice.textcontent = "b.) jQuery and web APIs";
  thirdChoice.textcontent = "c.) JavaScript and jQuery";
  fourthChoice.textcontent = "d.) JavaScript and web APIs";
  //Make them choosable
    firstChoice.addEventListener('click', function(){alert('Incorrect')});
    secondChoice.addEventListener('click', function(){alert('Incorrect')});
    thirdChoice.addEventListener('click', function(){alert('Incorrect')});
    fourthChoice.addEventListener('click', function(){alert('Correct!'), addPt(), toEndPage()});
}

function contQuiz2 () {
  //Second question...
  questions.textcontent = "What's the difference between localStorage and sessionStorage?";
  firstChoice.textcontent = "a.) Where you generally store you laptop vs where you use it for coding sessions, doesn't apply to desktop computers";
  secondChoice.textcontent = "b.) The former regards variables stores inside of a function, where as the latter regards being stored globally";
  thirdChoice.textcontent = "c.) The former regards variable declaration, where as the latter regards variable initializing a variable";
  fourthChoice.textcontent = "d.) Data in the former does not expire, where as data the latter will expire when the page session ends";
  //Make them choosable
    firstChoice.addEventListener('click', function(){alert('Incorrect')});
    secondChoice.addEventListener('click', function(){alert('Incorrect')});
    thirdChoice.addEventListener('click', function(){alert('Incorrect')});
    fourthChoice.addEventListener('click', function(){alert('Correct!'), addPt(), contQuiz3()});
}

function contQuiz () {
  //Second question...
  questions.textcontent = "What are two ways to add JS to your site?";
  firstChoice.textcontent = "a.) Type it with your fingers or toes";
  secondChoice.textcontent = "b.) Internally or externally";
  thirdChoice.textcontent = "c.) 50:50 or phone a friend";
  fourthChoice.textcontent = "d.) Download JS code, free or premium options";
  //Make them choosable
    firstChoice.addEventListener('click', function(){alert('Incorrect')});
    secondChoice.addEventListener('click', function(){alert('Correct!'), addPt(), contQuiz2()});
    thirdChoice.addEventListener('click', function(){alert('Incorrect')});
    fourthChoice.addEventListener('click', function(){alert('Incorrect')});
}

function beginQuiz() {
  //First question...
  questions.textcontent = "What is a variable?";
  firstChoice.textcontent = "a.) Non-code considerations to make before coding";
  secondChoice.textcontent = "b.) JavaScript term for HTML elements";
  thirdChoice.textcontent = "c.) A container for a piece of data";
  fourthChoice.textcontent = "d.) A set of statements that performs a task or calculates a value";
  //Make them choosable
    firstChoice.addEventListener('click', function(){alert('Incorrect')});
    secondChoice.addEventListener('click', function(){alert('Incorrect')});
    thirdChoice.addEventListener('click', function(){alert('Correct!'), contQuiz()});
    fourthChoice.addEventListener('click', function(){alert('Incorrect')});
}

// LAUNCHING THE QUIZ...

var pressStart = function(){
  startBtn.addEventListener("click", beginQuiz(), startTimer());
}

