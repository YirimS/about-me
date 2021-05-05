'use strict';

// defines variables
let playerScore = 0;
let username = prompt('What is your name?');

alert('Welcome ' + username + '! Please answer the following five questions yes or no');

// Question One
function q1(){
  let doYouDoMusic = prompt('Do I do Music?').toLowerCase();
  if (doYouDoMusic === 'yes' || doYouDoMusic === 'y'){
    console.log('That is Correct, good job!');
    alert('That is Correct, good job!');

  }
}

q1();

function q2(){
  let writeMusic = prompt('Do I do Hip-Hop Music?').toLowerCase();
  if (writeMusic === 'yes' || writeMusic === 'y'){
    console.log('You got it, Hip-Hop is my life');
    alert('That is Correct, well done');
  }
}

q2();


// Question Three
function q3(){
  let whereDoILive = prompt('Do I live in Seattle').toLowerCase();
  if (whereDoILive === 'yes' || whereDoILive === 'y'){
    console.log('right on! I do live in Seattle');
    alert('right on! I do live in Seattle');
  }
}
// console.log(`the answer is ${answerArray}`);



alert(`${username} your score is: ${playerScore}`);


// give 6 guesses to get it right - use either for or while loop

q3();

function q4(){
  let whatDistrict = prompt('Do I live in the Central District?').toLowerCase();
  if (whatDistrict === 'yes' || whatDistrict === 'y'){
    console.log('you are pretty good at this');
    alert('you are pretty good at this');
  }
}

q4();

function q5(){
  let live = prompt('Have I lived there my whole life?').toLowerCase();
  if (live === 'yes' || live === 'y'){
    console.log('I have and I am proud of it');
    alert('I have and I am proud of it');
  }
}

q5();
