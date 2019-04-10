// Variables to store current score of players
var userScore = 0;
var computerScore = 0;

// Caching the DOM
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function matchResult(outcome, userChoice) {

  switch (outcome) {
    case -1:
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      result_p.innerHTML = "Computer Wins!"
      const selection_div1 =   document.getElementById(userChoice);
      selection_div1.classList.add('red-glow');
     setTimeout(function() {selection_div1.classList.remove('red-glow')}, 1000);
      break;
      case 0:
        userScore += 0.5;
        computerScore += 0.5;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = "It's a draw!"
        const selection_div2 =   document.getElementById(userChoice);
        selection_div2.classList.add('grey-glow');
        setTimeout(function() {selection_div2.classList.remove('grey-glow')}, 1000);
        break;
    case 1:
      userScore++;
      userScore_span.innerHTML = userScore;
      result_p.innerHTML = "You Win!"
      const selection_div =   document.getElementById(userChoice);
      selection_div.classList.add('green-glow');
      setTimeout(function() {selection_div.classList.remove('green-glow')}, 1000);
      break;

  }

}

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  return choices[Math.floor(Math.random() * 3)];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  console.log(userChoice + computerChoice);

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      matchResult(1, userChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      matchResult(0, userChoice);
      break;

    default:
      matchResult(-1, userChoice);

  }

}

function main() {

  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissor_div.addEventListener('click', function() {
    game("s");
  })

}

main();
