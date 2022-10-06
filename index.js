

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoise() {
    let choise = ['rock', 'paper', 'scissors'];
    let index = getRandomInt(3);
    return choise[index];
}

function playRound(playerChoise, computerChoise) {

    playerChoise = playerChoise.toLowerCase();

    if (playerChoise == computerChoise) return 'repeat game';

    if (playerChoise == 'rock' && computerChoise == 'paper') return 'computer win';
    if (playerChoise == 'rock' && computerChoise == 'scissors') return 'player win';

    if (playerChoise == 'paper' && computerChoise == 'scissors') return 'computer win';
    if (playerChoise == 'paper' && computerChoise == 'rock') return 'player win';

    if (playerChoise == 'scissors' && computerChoise == 'rock') return 'computer win';
    if (playerChoise == 'scissors' && computerChoise == 'paper') return 'player win';

    return 'invalid enter';
    

}



let computerChoise = getComputerChoise(); 
let playerChoise = 'rock'; 

for (let i = 0; i < 5; i++) {
    computerChoise = getComputerChoise(); 
    console.log(computerChoise);
    console.log(playRound(playerChoise, computerChoise));
}

