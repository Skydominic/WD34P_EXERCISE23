let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let containerUlHistory = document.querySelector(".ulSample");

let resetBtn = document.querySelector("#btnReset");
let statuss = document.getElementById("status");
let scoreHuman = document.getElementById("humanScore");
let scoreComputer = document.getElementById("computerScore");

let reset = () => {
  containerUlHistory.innerHTML = "";
  humanScore = 0;
  computerScore = 0;
  scoreHuman.innerHTML = humanScore;
  scoreComputer.innerHTML = computerScore;
  statuss.innerHTML = "<p>The Game has been Reset 🙂</p>";
};

resetBtn.addEventListener("click", reset);
rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);

function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(humanPlay) {
  computerPlay = getComputerPlay();

  document.getElementById("status").innerHTML =
    "<p>You played <strong>" +
    humanPlay +
    " <br></strong> The AI played <strong>" +
    computerPlay +
    "</strong></p>";

  if (humanPlay == "rock") {
    if (computerPlay == "rock") {
      statuss.innerHTML += "<p>You tied 🤝 </p>";
      eventHistory(`<p>You tied 🤝 </p>`);
    } else if (computerPlay == "paper") {
      statuss.innerHTML += "<p>You lose 👎</p>";
      computerScore++;
      eventHistory(`<p>You lose 👎</p>`);
    } else if (computerPlay == "scissors") {
      statuss.innerHTML += "<p>You win! 👏</p>";
      humanScore++;
      eventHistory(`<p>You win! 👏</p>`);
    }
  } else if (humanPlay == "paper") {
    if (computerPlay == "rock") {
      statuss.innerHTML += "<p>You win! 👏</p>";
      humanScore++;
      eventHistory(`<p>You win! 👏</p>`);
    } else if (computerPlay == "paper") {
      statuss.innerHTML += "<p>You tied 🤝</p>";
      eventHistory(`<p>You tied 🤝 </p>`);
    } else if (computerPlay == "scissors") {
      statuss.innerHTML += "<p>You lose 👎</p>";
      computerScore++;
      eventHistory(`<p>You lose 👎</p>`);
    }
  } else if (humanPlay == "scissors") {
    if (computerPlay == "rock") {
      statuss.innerHTML += "<p>You lose 👎</p>";
      computerScore++;
      eventHistory(`<p>You lose 👎</p>`);
    } else if (computerPlay == "paper") {
      statuss.innerHTML += "<p>You win! 👏</p>";
      humanScore++;
      eventHistory(`<p>You win! 👏</p>`);
    } else if (computerPlay == "scissors") {
      statuss.innerHTML += "<p>You tied 🤝</p>";
      eventHistory(`<p>You tied 🤝 </p>`);
    }
  }

  document.getElementById("humanScore").innerHTML = humanScore;
  document.getElementById("computerScore").innerHTML = computerScore;
}

function getComputerPlay() {
  let plays = ["rock", "paper", "scissors"];
  let play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

function eventHistory(winner) {
  containerUlHistory.innerHTML += `<li class="liEvent">
  ${winner}
  <p>${new Date()}</p>
</li>`;
}
