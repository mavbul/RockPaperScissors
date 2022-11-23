

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






/*for (let i = 0; i < 10; i++) {
    computerChoise = getComputerChoise(); 
    console.log(computerChoise);
    console.log(playRound(playerChoise, computerChoise));
}*/

const buttonsList = document.getElementById('buttonsList');
//console.log(buttonsList);

buttonsList.addEventListener('click', buttonClickHandler);

function buttonClickHandler(event) {
    //console.log(event.target.dataset.value);
    const playerChoise = event.target.dataset.value; 
    const computerChoise = getComputerChoise(); 
    const result = playRound(playerChoise, computerChoise);

    function resultOut(innerText) {
        const divResult = document.createElement('div'); 
        divResult.className = 'result';
        divResult.innerHTML = innerText;
        document.body.append(divResult);
    }

    if (result === 'computer win') computerWinArray.push(1);
    if (result === 'player win') playerWinArray.push(1);

    console.log(result);

    if (computerWinArray.length == roundsToWin) {
        computerWinArray = [];
        playerWinArray = [];

        resultOut('computer win');
    }

    if (playerWinArray.length == roundsToWin) {
        computerWinArray = [];
        playerWinArray = [];

        resultOut('player win');
    }

}

let roundsToWin = 5; 
let playerWinArray = [];
let computerWinArray = []; 



