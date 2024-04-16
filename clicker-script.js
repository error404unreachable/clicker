var score = 0; //localStorage.getItem("savedScore");
var first = "locked";
var second = "locked";
var display = document.getElementById("score");
var log = document.getElementById("log-input");
var myInterval;
var mySecondInterval;

if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
} else {
  // Sorry! No Web Storage support..
}

function welcomeUser() {
   alert("Welcome to Earth Clicker!");
   alert("Start by tapping the Earth. \n Acheivements can be found in the log. \n Upgrades are automatic. \n \n Good Luck!");
}

function addScore() {
   score += 1;
   display.innerText = score;
   checkUpgrades();
}

function checkUpgrades() {
   if (first == "locked") {
      if (score >= 50) {
         first = "unlocked";
         firstInterval();
         log.innerText = "Unlocked Miniature Solar Panel; +1 Energy / 2 Seconds";
      } 
   } else {
        if (second == "locked") {
           if (score >= 500) {
              second = "unlocked";
              secondInterval();
           } else {
               console.log("Less than 500");
             }
        }
     }
}

/*function saveScore() {
   localStorage.setItem("savedScore", score);
}*/

function firstInterval() {
    clearInterval(myInterval);
    myInterval = setInterval(autoClicker, 2000);
}

function secondInterval() {
    clearInterval(mySecondInterval);
    mySecondInterval = setInterval(secondAutoClicker, 1000);
}

function autoClicker() {
   score += 1;
   display.innerText = score;
}

function secondAutoClicker() {
   score += 1;
   display.innerText = score;
}
