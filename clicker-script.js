let score = 0;
let first = "locked";
let second = "locked";

function welcomeUser() {
   alert("Welcome to Earth Clicker!");
   alert("Start by tapping the Earth. \n Acheivements can be found in the log. \n Upgrades are automatic. \n \n Good Luck!");
}

function addScore() {
   score = score + 1;
   saveScore();
}

function checkUpgrades() {
   if first = "locked" {
      if score >= 50 {
         unlockFirst();
      } 
   } else {
        if second = "locked" {
           if score >= 500 {
              unlockSecond();
           }
        }
     }
}

function unlockFirst() {
   first = "unlocked";
}

function unlockSecond() {
   second = "unlocked";
}
