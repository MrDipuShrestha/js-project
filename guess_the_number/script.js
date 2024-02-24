let randnum;
let usernum;
let guess = 0;
let success;
let remain;
let message = document.querySelector("#message");
let user = document.querySelector("#user-num");
function startGame() {
  message.innerHTML = "Guess the number between 1 and 100";
  remain = 10;
  document.querySelector("#remain").innerHTML = `Remaining Guesses: ${remain}`;
  user.value = "";
  randnum = Math.floor(Math.random() * 100 + 1);
}
function guessNumber() {
  usernum = user.value;
  usernum = Number.parseInt(usernum);
  if (isNaN(usernum) || usernum < 1 || usernum > 100 || usernum === "") {
    alert("Invalid Input! Please enter a number from 1 to 100.");
  } else {
    if (remain != 0) {
      while (guess < 10) {
        if (usernum == randnum) {
          success = "Congratulation! you guess the right number.";
          guess++;
          remain -= 1;
          document.querySelector("#score").innerHTML = guess;
          break;
        } else if (usernum > randnum) {
          success = "Your number is greater!. Please enter lower number";
          guess++;
          remain -= 1;
          user.value = "";
          break;
        } else if (usernum < randnum) {
          success = "Your number is smaller!.PLease enter higher number";
          guess++;
          remain -= 1;
          user.value = "";
          break;
        }
      }
      message.innerHTML = success;
      document.querySelector("#remain").innerHTML = remain;
    } else {
      message.innerHTML = `You lose the game.`;
      reset();
    }
  }
}
