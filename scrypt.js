let computerOption =  document.getElementById('computerChoice');
let playerChoice = document.getElementById('playerChoice');
let playerOption = document.getElementById('playerOption');
let play =  document.getElementById('play');
let winner;
let arr = [
    "rock",
    "paper",
    "scissors",
];
/* This will return a random choie from any given array*/
const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
/* This will let us update the  computer selection */
let computerChoice =  getRandom(arr);
computerOption.textContent =  `${computerChoice}`;


/* This will tell us the user choice */
play.addEventListener("click", () =>{
    console.log(`We are playing`);
    console.log(`the user choice is ${playerOption.value.toLowerCase()}`);
    playerChoice.textContent =`${playerOption.value.toLowerCase()}`;
    playRound(computerChoice, playerChoice);
});

/* This will play one round of the game  */

function playRound(computerChoice, playerOption){
    console.log(`Computer chose ${computerChoice}`);
    console.log(` User chose ${playerChoice.value.toLowerCase()}`);




 
};  