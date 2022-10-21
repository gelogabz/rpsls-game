const gameStart = () => {
    pScore = 0;
    cScore = 0;

    const play_a_game = () => {
        const allHandChoices = document.querySelectorAll(".playerChoices button");
        const player_HandChoices = document.querySelector(".playerHand");
        const computer_HandChoices = document.querySelector(".computerHand");
        const specificHandsChoices = document.querySelectorAll(".hands img");

        const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];

        allHandChoices.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    player_HandChoices.src = `./assets/${this.textContent}.png`;
                    computer_HandChoices.src = `./assets/${computerChoice}.png`;
                }, 1000);
            });
        });
    };
    const updateScore = () => {
        const playerScore = document.querySelector("#playerScore p");
        const computerScore = document.querySelector("#computerScore p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie! Try again.";
            return;
        };
        //checking for rock W

        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "🫵 Win";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "lizard") {
                winner.textContent = "🫵 Win";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "🤖 Wins";
                cScore++;
                updateScore();
                return;
            }
        };

        //checking for paper W

        if (playerChoice === "paper") {

            if (computerChoice === "rock") {
                winner.textContent = "🫵 Win";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "spock") {
                winner.textContent = "🫵 Win";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "🤖 Wins";
                cScore++;
                updateScore();
                return;
            }
        };

        //checking for paper W

        if (playerChoice === "scissors") {

            if (computerChoice === "paper") {
                winner.textContent = "🫵 Win";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "lizard") {
                winner.textContent = "🫵 Win";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "🤖 Wins";
                cScore++;
                updateScore();
                return;
            }
        };

        //checking for lizard w

        if (playerChoice === "lizard") {
            if (computerChoice === "spock") {
                winner.textContent = "🫵 Win";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "paper") {
                winner.textContent = "🫵 Win";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "🤖 Wins";
                cScore++;
                updateScore();
                return;
            }
        };

        //checking for spock W

        if (playerChoice === "spock") {
            if (computerChoice === "scissors") {
                winner.textContent = "🫵 Win";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "rock") {
                winner.textContent = "🫵 Win";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "🤖 Wins";
                cScore++;
                updateScore();
                return;
            }
        };

    };

    play_a_game();
};

gameStart();