let counter = 0;
let onex = 1;
let onexactive = 0;

  function addValue() {
    counter = counter + 1;
    document.getElementById('score').innerText = counter;
    checkUpgrades();
    checkAlerts();
  }
  
function welcomeUser() {
  alert("Welcome to Save the Earth... \n Start by tapping the Earth \n Upgrades will be automatic. \n Good luck!");
}

function tenEnergy() {
  if (onexactive == 0) {
    clearInterval(myInterval);
    setInterval(autoClicker, 2000);
    onexactive += 1;
  }
  else {
    console.log("Already recieved!");
  }
}

function fiftyEnergy() {
  if (onexactive == 1) {
    clearInterval(myInterval);
    onex += 1;
    myInterval = setInterval(autoClicker, 1000);
  }
  else {
    console.log("You already have that!");
  }
}

  function checkUpgrades() {
    switch (counter) {
      case 10:
        tenEnergy();
      case 50:
        fiftyEnergy();
      case 150:
        clearInterval(myInterval);
        onex += 2;
        myInterval = setInterval(autoClicker, 1000);
      default:
        console.log("Waiting for upgrade...");
    }
  }

  function checkAlerts() {
    switch (counter) {
      case 10:
        alert("You've unlocked something...");
        document.getElementById("log-input").innerText = "Rank increased to Rank 2 \n Achievement Unlocked! \n Energy Earner, Rank 1 (Earn 10 energy) \n \n";
        alert("You used your energy to restore an old power plant, and now it is producing you 1 energy per 2 seconds.");
        break;
      default:
      console.log("Waiting for upgrade...");
        break;
    }
  }
 
  function autoClicker() {
    counter += onex;
    document.getElementById('score').innerText = counter;
  }
