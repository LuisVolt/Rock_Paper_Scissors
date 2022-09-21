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

/* This will play one round of the game 
1 = computer won
2 = player won
3 = tie */

function playRound(computerChoice, playerOption){

    switch (computerChoice){
        case "rock":
            if (playerOption.value.toLowerCase() === "rock"){
                return 3;
            }else if(playerOption.value.toLowerCase() === "paper"){
                return 2;
            }else{
                return 1;
            };
            break;
        case "paper":
            if (playerOption.value.toLowerCase() === "rock"){
                return 1;
            }else if (playerOption.value.toLowerCase() === "paper"){
                return 3;
            }else{
                return 2;
            };
            break;
        case "scissors":
            if (playerOption.value.toLowerCase() === "rock"){
                return 2;
            }else if (playerOption.value.toLowerCase() === "paper"){
                return 1;
            }else{
                return "tie"
            };
            break;
    } 
};  

