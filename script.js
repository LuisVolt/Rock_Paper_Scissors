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


/* This will tell us the user choice an  run the game  */
play.addEventListener("click", () =>{
    /* This will let us update the  computer selection */
    let computerChoice =  getRandom(arr);
    computerOption.innerHTML = `<p>Computer picked up: ${computerChoice} </p>`;
    playerChoice.textContent =`${playerOption.value.toLowerCase()}`;
    console.log(playRound(computerChoice, playerOption));
});

/* This will play one round of the game  */

function playRound(computerChoice, playerOption){

    let winner = "";

    switch (computerChoice){
        case "rock":
            if (playerOption.value.toLowerCase() === "rock"){
                return "tie";
            }else if(playerOption.value.toLowerCase() === "paper"){
                return "player won";
            }else{
                return "computer won";
            };
            break;
        case "paper":
            if (playerOption.value.toLowerCase() === "rock"){
                return "computer won";
            }else if (playerOption.value.toLowerCase() === "paper"){
                return "tie";
            }else{
                return "player won"
            };
            break;
        case "scissors":
            if (playerOption.value.toLowerCase() === "rock"){
                return "player won";
            }else if (playerOption.value.toLowerCase() === "paper"){
                return "computer won";
            }else{
                return "tie"
            };
            break;
    } 
};  