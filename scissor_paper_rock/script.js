function playGame(playerChoice) {
  const choices = ["scissor", "paper", "rock"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result;
  if (playerChoice === computerChoice) {
    result = "It's a Draw.";
  } else if (
    (playerChoice == "scissor" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "scissor")
  ) {
    result = "You win.";
  } else {
    result = "You lose.";
  }
  document.getElementById("result").innerHTML = result;
  document.getElementById("user").innerHTML = playerChoice;
  document.getElementById("computer").innerHTML = computerChoice;
}
