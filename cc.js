function radioclick(x) {
  if (x == 1) {
    turn1();
    document.getElementById("radio2").disabled = true;
  } else if (x == 2) {
    turn2();
    document.getElementById("radio1").disabled = true;
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
  } else if (chanceleft1.value == "0" && chanceleft2.value > "0") {
    displayMessage("Team Red! ur turn gets over");
  }

  turn2();
}

function blastturn() {
  if (chanceleft2.value == "0" && chanceleft1.value == "1") {
    //Team Red last turn
  } else if (chanceleft2.value == "0" && chanceleft1.value > "0") {
    displayMessage("Team Blue! ur turn gets over");
  }

  turn1();
}

function winner() {
  if (totalpoint1.value > totalpoint2.value) {
    displayMessage("GAME OVER! congratulation Team Red (ˆ-ˆ)  won the game");
    messageContainer.classList.add("red-win"); // Add the "red-win" class
  } else if (totalpoint1.value < totalpoint2.value) {
    displayMessage("GAME OVER! congratulation Team Blue (ˆ-ˆ)  won the game");
    messageContainer.classList.add("blue-win"); // Add the "blue-win" class
  }
  document.getElementById("hit1").disabled = true;
  document.getElementById("hit2").disabled = true;
  document.getElementById("radio1").disabled = true;
  document.getElementById("radio2").disabled = true;
}

// Function to display a message in the message container
function displayMessage(message) {
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML = message;
}
