// to access to overlay and backdrop step - 1
const overlay = document.getElementById('overlay');
const backDrop = document.getElementById('backdrop');

//to access to both edit bottons step - 2
const editPlayerFirstButton = document.getElementById('button-1');
const editPlayerSecondButton = document.getElementById('button-2');

//to add event listener to edit bottons step - 3
editPlayerFirstButton.addEventListener('click', openPlayerConfig);
editPlayerSecondButton.addEventListener('click', openPlayerConfig);

// to access to cancel button step-4
const cancelBtnElement = document.querySelector('.btn');

// to add event listener to cancel button step - 5
cancelBtnElement.addEventListener('click', cancelation);
backDrop.addEventListener('click', cancelation);


// to access to the form step - 6
const formElement = document.querySelector('form');

//add event listener to the form step -7 
formElement.addEventListener('submit', savePlayerConfig);

// to access to the confirm error p step -8 
const confirmError = document.getElementById('config-error');

// to add the name of plaerys and appear instead player name step -10 before this step we must put data- in html
let editedPlayerName = 0;

// this step to add the player name after pressing start game button step - 12
const players = [
{
    name: '',
    Symbol: 'X'
},

{
    name: '',
    Symbol: 'O'
}
];

// start game button butting it in game.js 
//step -A
const startNewGameBtnElement = document.getElementById('startbtn');
startNewGameBtnElement.addEventListener('click', startNewGame);

const startingGame = document.getElementById('startNewGame');

//game field section

// const gameFieldElements = document.querySelectorAll('#game-board li');
//  for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', selectGameFiled)
//  }

const gameField = document.getElementById('game-board');
gameField.addEventListener('click', selectGameFiled);

let activePlayer = 0;

//to add the player name when say it's your turn

const playerTurn = document.getElementById('active-player-name');


// to handle the game board

const gameData = [
    [0,0,0,],
    [0,0,0],
    [0,0,0]
];


let currentRound = 1;


const gameOverElement = document.getElementById('game-over');

let gameIsOver = false;