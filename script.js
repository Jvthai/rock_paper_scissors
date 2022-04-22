function computerPlay(){
    //establish a way to randomize a result using Math.random
    let num = Math.random() * 100; 
      
    // logic for using the number created with Math.random and assign it to rock, paper or scissors
    if (num > 0 && num <= 33){
      return "Rock"
    } 
    else if (num >= 34 && num <= 66) {
      return "Paper"
    } 
    else {
      return "Scissors"
    }
      
  }
  
  function playRound(playerSelection, computerSelection){
  
    //long if else statements to dictate winner lol
    if (playerSelection == "rock" && computerSelection == "Scissors"){
      return "Congratulations, Rock beats Scissors"
    }
    else if (playerSelection == "paper" && computerSelection == "Rock"){
      return "Congratulations, Paper beats Rock"
    }
    else if (playerSelection == "scissor" && computerSelection == "Paper"){
      return "Congratulations, Scissor beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock"){
      return "You lose, Rock beats Scissors"
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors"){
      return "You lose, Scissors beats Paper"
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
      return "You lose, Paper beats Rock"
    }
    else {
      return "It's a tie!"
    }
  }
  
  function game(){
    //loop the game play 5 times
    let i = 0; 
    while (i < 5){
      console.log(playRound(getInput(),computerPlay()));
      i++; 
    }
  }
  
  function getInput(){
    let playerGuess = window.prompt("Rock, paper, scissors, shoot!");
  
    if (playerGuess.toLowerCase() == "rock" || playerGuess.toLowerCase() == "paper" || playerGuess.toLowerCase() == "scissors" ){
      return playerGuess.toLowerCase();
    }
  }
  
  game();