function startGame() {
  var rules = document.getElementById("rules");
  rules.style.display = "none";
  game.style.display = "block";
}

function showRule(){
    var rules = document.getElementById("rules");
    rules.style.display = "block";
    game.style.display = "none";
}

function radioclick(x) {
  if (x == 1) {
    turn1();
    document.getElementById("radio2").disabled = true;
    displayMessage("Team Red, it's your turn. Please Hit");
  } else if (x == 2) {
    turn2();
    document.getElementById("radio1").disabled = true;
    displayMessage("Team Blue, it's your turn. Please Hit");
  }
}

function turn1() {
  document.getElementById("hit1").disabled = false;

  document.getElementById("hit2").disabled = true;
}

function turn2() {
  document.getElementById("hit2").disabled = false;

  document.getElementById("hit1").disabled = true;
}

function random1() {
  if (chanceleft1.value > 0) {
    var a = (document.getElementById("randm1").innerHTML =
      Math.floor(Math.random() * 100) + 1);
    chanceleft1.value = chanceleft1.value - 1;
    totalpoint1.value = totalpoint1.value + "+";
    totalpoint1.value = totalpoint1.value + a;
  }

  totalpoint1.value = eval(totalpoint1.value);
  updateTeamRed(totalpoint1.value);

  displayMessage("Team Blue, it's your turn. Please Hit");
  alastturn();
  check();
  document.getElementById("radio1").disabled = true;
  document.getElementById("radio2").disabled = false;

  document.getElementById("radio2").checked = true;
  document.getElementById("radio1").checked = false;
}

function random2() {
  if (chanceleft2.value > 0) {
    var b = (document.getElementById("randm2").innerHTML =
      Math.floor(Math.random() * 100) + 1);
    chanceleft2.value = chanceleft2.value - 1;
    totalpoint2.value = totalpoint2.value + "+";
    totalpoint2.value = totalpoint2.value + b;
  }
  totalpoint2.value = eval(totalpoint2.value);
  updateTeamBlue(totalpoint2.value);

  displayMessage("Team Red, it's your turn. Please Hit");
  blastturn();
  check();
  document.getElementById("radio2").disabled = true;
  document.getElementById("radio1").disabled = false;
  document.getElementById("radio1").checked = true;
  document.getElementById("radio2").checked = false;
}

function check() {
  if (chanceleft1.value == "0" && chanceleft2.value == "0") {
    winner();
  }
}

function alastturn() {
  if (chanceleft1.value == "0" && chanceleft2.value == "1") {
    displayMessage(
      "Team Red! ur turn gets over.  Team Blue, it's your  Last turn. Please Hit"
    );
  }
  turn2();
}

function blastturn() {
  if (chanceleft2.value == "0" && chanceleft1.value == "1") {
    displayMessage(
      "Team Blue! ur turn gets over.  Team Red, it's your Last turn. Please Hit"
    );
  }
  turn1();
}

function winner() {
  var restartButton = document.createElement("input");
  restartButton.type = "button";
  restartButton.value = "RESTART";
  restartButton.onclick = restartGame;

  const redTotal = parseInt(totalpoint1.value);
  const blueTotal = parseInt(totalpoint2.value);
  const difference = Math.abs(redTotal - blueTotal);

  if (redTotal > blueTotal) {
    displayMessage(
      `GAME OVER! Congratulations, Team Red (ˆ-ˆ) has won by ${difference} points          `
    );
    messageContainer.classList.add("red-win");
    messageContainer.classList.remove("blue-win");
  } else if (redTotal < blueTotal) {
    displayMessage(
      `GAME OVER! Congratulations, Team Blue (ˆ-ˆ) has won by ${difference} points          `
    );
    messageContainer.classList.add("blue-win");
    messageContainer.classList.remove("red-win");
  } else {
    displayMessage(
      `GAME OVER! It's a tie with a difference of ${difference} points`
    );
    messageContainer.classList.remove("red-win");
    messageContainer.classList.remove("blue-win");
  }
  document.getElementById("hit1").disabled = true;
  document.getElementById("hit2").disabled = true;
  messageContainer.appendChild(restartButton);
}

// Function to display a message in the message container
function displayMessage(message, className = "") {
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML = message;
  messageContainer.className = `message-container ${className}`;
}

// Function to display the starting message
function startMessage() {
  updateHRSize(1, 0);
  updateHRSize(2, 0);
  displayMessage("Who wants to start first? Please choose the radio button.");
}

// Call the startMessage function when the page loads
window.addEventListener("load", startMessage);

function restartGame() {
  // Reset scores and enable "Hit" buttons
  teamRedScore = 0;
  teamBlueScore = 0;
  document.getElementById("totalpoint1").value = "0";
  document.getElementById("totalpoint2").value = "0";
  document.getElementById("chanceleft1").value = "6";
  document.getElementById("chanceleft2").value = "6";
  document.getElementById("randm1").innerHTML = null;
  document.getElementById("randm2").innerHTML = null;
  document.getElementById("hit1").disabled = true;
  document.getElementById("hit2").disabled = true;
  document.getElementById("radio1").checked = false;
  document.getElementById("radio2").checked = false;
  document.getElementById("radio1").disabled = false;
  document.getElementById("radio2").disabled = false;

  // Clear victory message
  var messageContainer = document.getElementById("messageContainer");
  messageContainer.innerText = "";
  messageContainer.classList.remove("red-win", "blue-win");
  startMessage();
}

function updateHRSize(teamNumber, totalPoints) {
  const hrElement = document.getElementById(`hr${teamNumber}`);
  hrElement.style.width = totalPoints / 6 + "px";
}

// Function to update total points and HR size for Team Red
function updateTeamRed(totalPoints) {
  document.getElementById("totalpoint1").value = totalPoints;
  updateHRSize(1, totalPoints);
}

// Function to update total points and HR size for Team Blue
function updateTeamBlue(totalPoints) {
  document.getElementById("totalpoint2").value = totalPoints;
  updateHRSize(2, totalPoints);
}
