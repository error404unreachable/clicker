var score = 0; //localStorage.getItem("savedScore");
var first = "locked";
var second = "locked";
var display = document.getElementById("score");

function welcomeUser() {
   alert("Welcome to Earth Clicker!");
   alert("Start by tapping the Earth. \n Acheivements can be found in the log. \n Upgrades are automatic. \n \n Good Luck!");
}

function addScore() {
   score += 1;
   display.innerText = score;
}

function checkUpgrades() {
   if (first = "locked") {
      if (score >= 50) {
         first = "unlocked";
      } 
   } else {
        if (second = "locked") {
           if (score >= 500) {
              second = "unlocked";
           } else {
                console.error("Error");
             }
        }
     }
}

function saveScore() {
   localStorage.setItem("savedScore", score);
}
