
const game = ()=>{
    let pscore = 0;
    let cscore = 0;

    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const gameScreen = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fade-out");
            gameScreen.classList.add("fade-in")
        });

    }

    //start play
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend",function(){
                this.style.animation = "";
            })
        })

        const computerOptions = ["paper","scissors","rock"];
        
        
        options.forEach(option =>{
            option.addEventListener("click", function(){
                //computer choice
                const computerNum = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNum];
                const playerChoice = this.textContent;

                setTimeout(() =>{
                    compareHnads(playerChoice,computerChoice);
                    updateScore();
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                },1500);

                playerHand.style.animation = "shakePlayer 1.5s ease";
                computerHand.style.animation = "shakeComputer 1.5s ease"; 

            });
        });

        const updateScore = ()=>{
            const playerScore = document.querySelector(".player-score p");
            const computerScore = document.querySelector(".computer-score p");
            playerScore.textContent = pscore;
            computerScore.textContent = cscore;
        }

        const compareHnads = (playerChoice, computerChoice)=>{
            const winner = document.querySelector(".winner");
            //check tie
            if(playerChoice === computerChoice){
                winner.textContent = "It's a Tie!";
                return;
            }
            //check rock
            if(playerChoice === "rock"){
                if(computerChoice === "scissors"){
                    winner.textContent = "Player wins!";
                    pscore++;
                    return;
                }
                else{ 
                    winner.textContent = "Computer wins!";
                    cscore++;
                    return;
                }               
            }

            //check scissors
            if(playerChoice === "scissors"){
                if(computerChoice === "paper"){
                    winner.textContent = "Player wins!";
                    pscore++;
                    return;
                }
                else{ 
                    winner.textContent = "Computer wins!";
                    cscore++;
                    return;
                }  
            }

            //check paper
            if(playerChoice === "paper"){
                if(computerChoice === "rock"){
                    winner.textContent = "Player wins!";
                    pscore++;
                    return;
                }
                else{ 
                    winner.textContent = "Computer wins!";
                    cscore++;
                    return;
                }   
            }

        }


    }

    startGame();
    playMatch();
}

game();