let counter = 0;
let onex = 1;
let onexactive = 0;
newInterval = setInterval(checkOther, 500)

  function addValue() {
    counter = counter + 1;
    document.getElementById('score').innerText = counter;
    checkUpgrades();
    checkAlerts();
    checkMore();
    checkOther();
  }
  
function welcomeUser() {
  alert("Welcome to Save the Earth... \n Start by tapping the Earth \n Upgrades will be automatic. \n Good luck!");
}
  function checkUpgrades() {
    if (counter == 10 && onexactive == 0) {
      myInterval = setInterval(autoClicker, 2000);
      onexactive += 1;
    }
    else {
      checkMore();
      console.log("Waiting for upgrades...");
    }
  }
  
function checkMore() {
  if (counter == 50 && onexactive == 1) {
    clearInterval(myInterval);
    onex += 1;
    onexactive += 1;
    myInterval = setInterval(autoClicker, 1000);
  }
  else {
    console.log("Waiting for upgrades...");
  }
}

  function checkAlerts() {
    if (counter == 10 && onexactive == 0) {
      alert("You've unlocked something...");
      document.getElementById("log-input").innerText = "Rank increased to Rank 2 \n Achievement Unlocked! \n Energy Earner, Rank 1 (Earn 10 energy) \n \n";
      alert("You used your energy to restore an old power plant, and now it is producing you 1 energy per 2 seconds.");
      counter -= 10;
    }
    else {
      checkOther();
      console.log("Waiting for upgrade...");
    }
  }
  
function checkOther() {
    if (counter == 50 && onexactive == 1) {
        alert("You've unlocked something...");
        document.getElementById("log-input").innerText = "Achievement Unlocked! \n Energy Earner, Rank 2 (Earn 50 energy) \n \n Achievement Unlocked! \n Upgrader, Rank 1 (Upgrade a power plant) \n \n";
        alert("You used your energy to upgrade the power plant. It now produces 2 energy per second.");
        alert("Your friends and family support you in helping the planet, and fund you with 100 energy...");
        counter += 50;
      }
  else {
    console.log("Waiting for alerts...");
  }
}

  function autoClicker() {
    counter += onex;
    document.getElementById('score').innerText = counter;
  }
