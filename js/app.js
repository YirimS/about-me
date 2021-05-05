'use strict';

// defines variables
let playerScore = 0;
let userName = prompt('What is your name?');
let myNumber = 4;
let attempts = 4;
let playerGuess = '';

alert('Welcome ' + userName + '! Please answer the following five questions yes or no');

let doYouDoMusic = prompt('Do I do Music?').toLowerCase();
if (doYouDoMusic === 'yes' || doYouDoMusic === 'y'){
  console.log('That is Correct, good job!');
  alert('That is Correct, good job!');
  playerScore++;
}

let writeMusic = prompt('Do I do Hip-Hop Music?').toLowerCase();
if (writeMusic === 'yes' || writeMusic === 'y'){
  console.log('You got it, Hip-Hop is my life');
  alert('That is Correct, well done');
  playerScore++;
}



let whereDoILive = prompt('Do I live in Seattle?').toLowerCase();
if (whereDoILive === 'yes' || whereDoILive === 'y'){
  console.log('right on! I do live in Seattle');
  alert('right on! I do live in Seattle');
  playerScore++;
}


let whatDistrict = prompt('Do I live in the Central District?').toLowerCase();
if (whatDistrict === 'yes' || whatDistrict === 'y'){
  console.log('you are pretty good at this');
  alert('you are pretty good at this');
  playerScore++;
}

let live = prompt('Have I lived there my whole life?').toLowerCase();
if (live === 'yes' || live === 'y'){
  console.log('I have and I am proud of it');
  alert('I have and I am proud of it');
  playerScore++;
}

// Question Six
let startGame = prompt(`${userName}, Would you like to play a game Yes/No?`).toLowerCase();
if (startGame === 'yes' || startGame === 'y') {
  alert('let\'s begin!!');
  for (let i = 0; i < attempts; i++) {
    //console.log(`attempts: ${i+1}`);
    playerGuess = prompt(`Attempt #:${i+1} out of ${attempts}. Pick a number between 1 - 10`);
    if (playerGuess < myNumber) {
      alert('You are too low');
    } else if (playerGuess > myNumber) {
      alert('You are too high');
    } else {
      alert('You guessed the correct number');
      playerScore++;
      break;
    }
    if (attempts === i) {
      alert(`Too many guesses as you only had ${attempts} attempts avaliable. My number was ${myNumber}! Try again later.`);
    }
  }
} else {
  alert(`${userName} Maybe next time my friend.`);
}

// Question Seven

let q7attempts = 6;
let answeredCorrectly = false;

let answerArray = ['nike', 'addidas', 'pumas', 'converse'];
// it's important that I commit line 83 to memory
while(q7attempts && !answeredCorrectly){
  let shoes = prompt(`can you guess one of my favorite type of shoes?`).toLowerCase();
  for(let i = 0; i < answerArray.length; i++){
    if (shoes === answerArray[i]){
      alert('you are correct');
      answeredCorrectly = true;
      playerScore++;

    

    }
  }
  //on last attempt tell user they are done and give them all the answers
  q7attempts--;
}
console.log(`the answer is ${answerArray}`);



alert(`${userName} your score is: ${playerScore}`);


// give 6 guesses to get it right - use either for or while loop

// 2 loops while and for loop

// while need 2 eject methods - attemp - variable called answered correctly






