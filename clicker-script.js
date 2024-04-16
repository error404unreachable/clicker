var score = 0; //localStorage.getItem("savedScore");
var first = "locked";
var second = "locked";
var display = document.getElementById("score");
var log = document.getElementById("log-input");
var myInterval;
var mySecondInterval;
var storage = 0;

function storageCheck() {
 if (typeof(Storage) !== "undefined") {
  storage == "on";
  alert("Local Storage Functioning...");
 } else {
  storage == "off";
  alert("Local Storage function error... \n Unable to store session data...");
 }
}

function welcomeUser() {
   alert("Welcome to Earth Clicker!");
   alert("Start by tapping the Earth. \n Acheivements can be found in the log. \n Upgrades are automatic. \n \n Good Luck!");
   storageCheck();
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
