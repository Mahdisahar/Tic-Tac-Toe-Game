function startNewGame() {
    //step -B to add the name of players before press start buttons
    if (players[0].name === '' || players[1].name === '') {
        alert('please enter players name ');
        return;
    }
    startingGame.style.display = 'block'; //to show the board game
    playerTurn.textContent = players[activePlayer].name;

    resetGameStatus();
}


//game field
function selectGameFiled(event) {

    if (event.target.tagName !== 'LI' || gameIsOver) {
        return;
    }

const selectedCulumn = event.target.dataset.col - 1;
const selectedRow = event.target.dataset.row -1;

if (gameData[selectedRow][selectedCulumn] > 0) {
    alert ('Please choose an empty field');
    return;
}

event.target.textContent = players[activePlayer].Symbol;
event.target.classList.add('disabled');

// to handle the game board

gameData[selectedRow][selectedCulumn] = activePlayer + 1;

const winnerId = checkForGameOver();//for function endGame

if (winnerId !== 0) {
    endGame(winnerId);
}

currentRound++;
switchPlayer();

//to add the player name when say it's your turn
playerTurn.textContent = players[activePlayer].name;
}

//to switch from x and o

function switchPlayer() {
 if (activePlayer === 0) {
    activePlayer = 1;
 } else {
    activePlayer = 0;
 }
}

// checking for winner or draw

function checkForGameOver() {
    //checking the rows
    for (let i= 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1]=== gameData[i][2] 
        ) {
            return gameData[i][0];
        }
    }
// checking for columns
    for (let i= 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i]=== gameData[2][i] 
        ) {
            return gameData[0][i];
        }
    }
 //Diagonal top left to bottom right
    if (gameData[0][0] > 0 && 
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
        ) {
            return gameData[0][0];
        }
 // Diagonal bottom left to top right
        if (gameData[2][0] > 0 && 
            gameData[2][0] === gameData[1][1] &&
            gameData[1][1] === gameData[0][2]
            ) {
                return gameData[2][0];
            }

            if (currentRound === 9) {
                return -1;
            }
            
return 0;
}

function endGame(winnerId) {
    gameOverElement.style.display = 'block';
    gameIsOver = true;

    if (winnerId > 0) {
        const winnerName = players[winnerId -1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = 
        winnerName;
    } else {
        gameOverElement.firstElementChild.textContent = 'It\'s a draw ';
    }
}

//to reset the start new game button

function resetGameStatus() {
    activePlayer =0;
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = 
    'You Won, <span id="winner-name"></span> !';
    gameOverElement.style.display = 'none';


    let gameBoardIndex = 0;
    for (let i = 0; i<3; i++) {
        for (let j = 0; j <3; j++) {
            gameData[i][j] = 0;
            gameField.children[gameBoardIndex].textContent = '';
            gameField.children[gameBoardIndex].classList.remove('disabled');
            gameBoardIndex++;
            gameIsOver = false;
        }
    }
}