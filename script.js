
var counterE1 = document.getElementById("counter");

var secondsLeft = 10;

function countdown() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    counterE1.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert('done');
    }

  }, 1000);
}

countdown();

// var countdown = document.getElementById("countdown");
// var main = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     countdown.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function sendMessage() {
//   countdown.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   main.appendChild(imgEl);

// }

// setTime();