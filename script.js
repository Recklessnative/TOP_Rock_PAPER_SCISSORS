let playerScoreTxt = document.querySelector("#playerscore");
let computerScoreTxt = document.querySelector("#computerscore");
let result = document.querySelector("#result");
let buttons = document.querySelectorAll("button");
let playerScore=0;
let computerScore=0;
   
    buttons.forEach((button) => {

       
        button.addEventListener('click', (e) => {
            playRound(button.id)
        });
      });



function inputValidation(inputGesture){
    let selectGesture = inputGesture;
    let outputGesture = selectGesture.charAt(0).toUpperCase()+ selectGesture.slice(1).toLowerCase();
    if(outputGesture == "Rock"||outputGesture == "Paper"||outputGesture == "Scissors"){
        return outputGesture;
        
    }
    else alert("Please select a valid choice!");
   
}
function computerPlay(){
    let computerChoice = Math.floor((Math.random() * 3) + 1);

    if(computerChoice == 1){
        return "Rock";
    }

    else if(computerChoice == 2){
        return "Paper";

    }

    else return "Scissors";

}
function playRound(input){
    let computerSelection = computerPlay();
    let playerSelection = input;
    console.log(playerScore);
    console.log(computerScore)
    
    if((playerSelection=="Rock"&& computerSelection=="Paper")||(playerSelection=="Scissors"&& computerSelection=="Rock")||(playerSelection=="Paper"&& computerSelection=="Scissors")){
        //Player loses
        computerScore++
        result.textContent=`The computer chose ${computerSelection}, and you chose ${playerSelection}, you lose!`;
    }

    else if(computerSelection==playerSelection) {
        //computer and player tie
        result.textContent=`The computer chose ${computerSelection}, and you chose ${playerSelection}, it's a tie!`;
    }

    else {playerScore++;
        //player wins
        result.textContent=`The computer chose ${computerSelection}, and you chose ${playerSelection}, you win!`;}
    

playerScoreTxt.textContent= `Player: ${playerScore}`;
computerScoreTxt.textContent= `Computer: ${computerScore}`;
}
function playGame(){
   


    let playerScore = 0;
    let computerScore = 0;
    let playerChoice=inputValidation(prompt("ROCK, PAPER OR SCISSORS?"));
    console.log(playerChoice);
    let index = 0;
    /* for (index = 0; index < 6; index++) {
        result=playRound(playerChoice);
        if(result==0){
            computerScore++;
            console.log("The computer won!");
        }
        else if(result==2){
            playerScore++;
            console.log("The Player has won!");
        }

        else if(result==1){
            console.log("It's a tie!");
        } 
    }
 */
    if(playerScore>computerScore){
        console.log(`You won! The Final score is Player: ${playerScore}, Computer: ${computerScore} `)

    }

    else if(playerScore<computerScore) {
        console.log(`You lost! The Final score is Player: ${playerScore}, Computer: ${computerScore} `)

    }

    else console.log(`It's a tie! The Final score is Player: ${playerScore}, Computer: ${computerScore} `)



}

