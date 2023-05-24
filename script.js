let counter = 0;
  let onex = 5;
  document.getElementById('button').onclick = () => {
    counter = + counter + 1;
    document.getElementById('score').innerText = counter;
    checkUpgrades();
    checkAlerts();
  };
  
  function checkUpgrades() {
    if (counter == 10) {
      myInterval = setInterval(autoClicker, 1000);
    }
  }
  
  function checkAlerts() {
    if (counter == 10) {
      alert("You've been upgraded...");
      document.getElementById("log-input").innerText = "Rank increased to Rank 2 \n \n Achievement Unlocked! Energy Earner, Rank 1 (Earn 10 energy)";
    }
    else {
      console.log("Waiting for upgrade...");
    }
  }
  
  function autoClicker() {
    counter += onex;
    document.getElementById('score').innerText = counter;
  }
