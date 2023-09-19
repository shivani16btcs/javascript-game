function radioclick(x) {
  //alert('0');
  if (x == 1) {
    //alert('1');
    turn1();
    document.getElementById("radio2").disabled = true;
  } else if (x == 2) {
    //alert('2');
    turn2();
    document.getElementById("radio1").disabled = true;
  }
  disableradio();
  //radiovalue();
}

function disableradio() {
  //alert('dis');
  //document.getElementById("radio1").disabled=true;
  //document.getElementById("radio2").disabled=true;
}

/*
function radiovalue(){
alert('check');
if(select[0].checked==true){
select[0].checked==false;
select[1].checked==true;
}

else if(select[1].checked==true){
select[0].checked==true;
select[1].checked==false;
}

*/

function turn1() {
  //hit1 enable, hit2 disable

  document.getElementById("hit1").disabled = false;

  document.getElementById("hit2").disabled = true;

  //document.getElementById("radio1").disabled=true;

  //document.getElementById("radio2").disabled=true;
}

function turn2() {
  //hit1disable and hit2 enable

  document.getElementById("hit2").disabled = false;

  document.getElementById("hit1").disabled = true;

  //document.getElementById("radio1").disabled=true;

  //document.getElementById("radio2").disabled=true value="2";
}

function random1() {
  if (chanceleft1.value > 0) {
    var a = (document.getElementById("randm1").innerHTML =
      Math.floor(Math.random() * 100) + 1);
    //alert(chanceleft1.value);
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
    alert(" Team Red ! ur trun gets over");
  }

  turn2();
}

function blastturn() {
  if (chanceleft2.value == "0" && chanceleft1.value == "1") {
    //Team Red last turn
  } else if (chanceleft2.value == "0" && chanceleft1.value > "0") {
    alert(" Team Blue ! ur turn gets over");
  }

  turn1();
}

function winner() {
  if (totalpoint1.value > totalpoint2.value) {
    alert("GAME OVER! congratulation Team Red (ˆ-ˆ)  won the game");
  } else if (totalpoint1.value < totalpoint2.value) {
    alert("GAME OVER! congratulation Team Blue (ˆ-ˆ)  won the game");
  }
}
