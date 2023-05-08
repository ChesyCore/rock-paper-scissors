// PROJECT: Rock, Paper, Scissors

var getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return (userInput)
    } else {
      console.log('Error!')
    }
  }
// console.log(getUserChoice('pie')); // check if works. works!

var getComputerChoice = function () {
let pie = Math.floor(Math.random() * 3);
console.log(pie)
if (pie === 0) {
  return ('rock')
} else if (pie === 1) {
  return ('paper')
} else if (pie === 2) {
  return ('scissors')
} else {
  console.log('Error!')
}
}
// console.log(getComputerChoice()); // works! would switch work here?

var determineWinner = function (userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return ('Player won!')
  }
  if (userChoice === computerChoice) {
    return ('Tie!')
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return ('Computer won!')
    } else {
      return ('Player won!')
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice ===  'rock')
      return ('Player won!')
  } 
    if (computerChoice === 'scissors') {
      return ('Computer won!') // don't need to write another if statement. can use 'else' for variations
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return ('Computer won!')
  } else {
      return ('Player won!') 
  }
  }
}
// console.log(determineWinner('paper', 'rock')) // works!

var playGame = function () {
  var userChoice = getUserChoice('rock');
  console.log(userChoice);
  var computerChoice = getComputerChoice();
  console.log(computerChoice);

  console.log(determineWinner(userChoice,computerChoice))
}
console.log(playGame()); // game works! suppose to return undefined tho?
