
//TIMER
var time = document.getElementById("time");
// var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    //   exit();
    }

  }, 6000);
}

// function exit() {

//     window.location.href="exit.html";

//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

}

setTime();