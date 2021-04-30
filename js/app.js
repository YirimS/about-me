'use strict';

let username = prompt('What is your name?');

alert('Welcome' + username + '! Please answer the following five questions yes or no');

let doYouDoMusic = prompt('Do I do Music?').toLowerCase();
if (doYouDoMusic === 'yes' || doYouDoMusic === 'y'){
  console.log('That is Correct, good job!');
  alert('That is Correct, good job!');

}

let writeMusic = prompt('Do I do Hip-Hop Music?').toLowerCase();
if (writeMusic === 'yes' || writeMusic === 'y'){
  console.log('You got it, Hip-Hop is my life');
  alert('That is Correct, well done');
}



let whereDoILive = prompt('Do I live in Seattle').toLowerCase();
if (whereDoILive === 'yes' || whereDoILive === 'y'){
  console.log('right on! I do live in Seattle');
  alert('right on! I do live in Seattle');
}


let whatDistrict = prompt('Do I live in the Central District?').toLowerCase();
if (whatDistrict === 'yes' || whatDistrict === 'y'){
  console.log('you are pretty good at this');
  alert('you are pretty good at this');
}

let live = prompt('Have I lived there my whole life?').toLowerCase();
if (live === 'yes' || live === 'y'){
  console.log('I have and I am proud of it');
  alert('I have and I am proud of it');
}








