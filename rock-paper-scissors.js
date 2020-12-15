const choices = ['rock', 'paper', 'scissors'];
const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissors = document.querySelector('#btn-scissors')
const round = document.querySelector('#round')
const yourScore = document.querySelector('#your-score')
const theirScore = document.querySelector('#their-score')
const scoreContainer = document.querySelector('#score-container')

btnRock.addEventListener('click', () => {
    playRound(computerPlay(), choices[0])
})
btnPaper.addEventListener('click', () => {
    playRound(computerPlay(), choices[1])
})
btnScissors.addEventListener('click', () => {
    playRound(computerPlay(), choices[2])
})

function computerPlay() {
    return choices[randomMove(0, 2)];
}

function randomMove(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(computerSelection, playerSelection) {
    let winLoss = 0;

    if (computerSelection == playerSelection) {
        round.textContent = `It's a tie! You both picked ${computerSelection}! Please pick again.`;
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        winLoss = 1;
        round.textContent = 'Paper covers rock! You win!';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        winLoss = 2;
        round.textContent = 'Rock crushes scissors! You lose!';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        winLoss = 2;
        round.textContent = 'Paper covers rock! You lose!';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        winLoss = 1;
        round.textContent = 'Scissors cut paper! You win!';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        winLoss = 1;
        round.textContent = 'Rock crushes scissors! You win!';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        winLoss = 2;
        round.textContent = 'Scissors cut paper! You lose!';
    }
    
    scoreKeeper(winLoss);
}


let wins = 0
let losses = 0


function scoreKeeper(outcome) {
    if (outcome === 1){
        ++wins;
        yourScore.textContent = `You: ${wins}`;
    } else if (outcome === 2) {
        ++losses;
        theirScore.textContent = `Them: ${losses}`;
    }
    
    console.log (`${wins} - ${losses}`)
    finalScoreCheck();
} 

function finalScoreCheck() {
    
    if (wins === 5 || losses ===5) {
        if (wins === 5) {
            round.textContent =`You win! The final score is ${wins} to ${losses}`
        } else if (losses === 5) {
            round.textContent = `You lose. The final score is ${wins} to ${losses}`
        }
        gameOver()
    }

function gameOver() {
    btnRock.disabled = true
    btnPaper.disabled = true
    btnScissors.disabled = true
    resetBtn()
}

function resetBtn(){
    const newGame = document.createElement('button')
    newGame.classList.add('scores')
    newGame.id = 'new-game'
    newGame.textContent = 'Play again'
    scoreContainer.appendChild(newGame)

    newGame.addEventListener('click', () => {
        window.location.reload()
    })

}

}
