document.getElementById("roll-button").addEventListener("click", function () {
  const rollDice = Math.trunc(Math.random() * 6 + 1);

  let diceFace;
  switch (rollDice) {
    case 1: diceFace = "&#9856;"; break;
    case 2: diceFace = "&#9857;"; break;
    case 3: diceFace = "&#9858;"; break;
    case 4: diceFace = "&#9859;"; break;
    case 5: diceFace = "&#9860;"; break;
    case 6: diceFace = "&#9861;"; break;
    default: diceFace = "";
  }

  const rollHistory = `The rolled Dice is ${rollDice}`;

  document.getElementById("dice").innerHTML = diceFace;
  document.getElementById("roll-history").textContent = rollHistory;
});
