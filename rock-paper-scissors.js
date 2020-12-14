const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[randomMove(0, 2)];
}

function randomMove(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerPlay() {
    let playerMove = window.prompt('Rock, paper, or scissors?');

    if (choices.includes(playerMove.toLowerCase())) {
        return playerMove.toLowerCase();
    } else {
        alert ('Please enter a valid selection.');
        playerPlay();
    }
}

function playRound(computerSelection, playerSelection) {
    let winLoss = 0;

    if (computerSelection == playerSelection) {
        console.log(`It's a tie! You both picked ${computerSelection}! Please pick again.`);
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        winLoss = 1;
        console.log('Paper covers rock! You win!');
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        winLoss = 2;
        console.log('Rock crushes scissors! You lose!');
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        winLoss = 2;
        console.log('Paper covers rock! You lose!');
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        winLoss = 1;
        console.log('Scissors cut paper! You win!');
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        winLoss = 1;
        console.log('Rock crushes scissors! You win!');
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        winLoss = 2;
        console.log('Scissors cut paper! You lose!');
    }

    return winLoss;
}

function game() {
    let wins = 0;
    let losses = 0;

    while ((wins + losses) < 5) {
        let result = playRound(computerPlay(), playerPlay());
        
        if (result == 1) {
            ++wins;
        } else if (result == 2) {
            ++losses;
        }
    }

    if (wins > losses) {
        console.log(`Congrats! You win, ${wins} to ${losses}!`);
    } else if (losses > wins) {
        console.log(`Sorry! You lose, ${wins} games to ${losses}.`);
    }
}

//game();