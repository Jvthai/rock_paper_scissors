window.onload=function(){
  //scores
  let playerScore = 0; 
  let computerScore = 0; 
  
  
  //display results
  const results = document.querySelector('#results'); 
  
  //button selectors and click event listeners
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');
  
  
  rock.addEventListener('click', () => {
    playRound("rock", computerPlay());
    updateScore();
    winnerCheck()
  });
  
  scissors.addEventListener('click', () => {
    playRound("scissors", computerPlay());
    updateScore();
    winnerCheck()
  });
  
  paper.addEventListener('click', () => {
    playRound("paper", computerPlay());
    updateScore();
    winnerCheck()
  });
  
  
  //display score
  function updateScore(){
    const score = document.querySelector('#score'); 
    score.textContent = 'Player Score: ' + playerScore + ' Computer Score: ' + computerScore;
  }
  
  //Computer's rps guess
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
  
  
  
  //round playing logic
  function playRound(playerSelection, computerSelection){
  
    //long if else statements to dictate winner lol
    if (playerSelection == "rock" && computerSelection == "Scissors"){
      return "Rock beats Scissors, player win", playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "Rock"){
      return "Paper beats Rock, player win", playerScore++;
    }
    else if (playerSelection == "scissor" && computerSelection == "Paper"){
      return "Scissors beats Paper, player win", playerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock"){
      return "Scissors beats Rock, computer win", computerScore++; 
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors"){
      return "Paper beats Scissors, computer win", computerScore++; 
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
      return "Rock beats paper, computer win", computerScore++; 
    }
    else {
      return "Draw", computerScore++, playerScore++; 
    }
  }
  
  function winnerCheck(){
    if (playerScore == 5){
      return results.textContent = "Player wins!"; 
    }
    else if (computerScore == 5){
      return results.textContent = "Computer wins!"; 
    }
    else if (computerScore == 5 && playerScore == 5 ){
      return results.textContent = "It's a draw!"; 
    }
  }
  }
  