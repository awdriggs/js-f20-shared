console.log('working');
var likes = 0; //global variable to hold onto likes

//window is loaded?
window.onload = function() {
  // use js to append a h1 with a title to the wrapper
  var title = document.createElement('h1');
  title.innerHTML = "Meme Maker!";
  document.getElementsByClassName('wrapper')[0].prepend(title);

  // create an event listener to watch for on a click on the generate button 
  // hint: it has a id!
  // if the button is pressed, run the function memeMe
  var button = document.getElementById('generate');

  button.addEventListener('click', memeMe);

  // create an event listener to watch for a click on the 'like' button
  // if the button is pressed, run the addLike function
  var like = document.getElementById('like');

  like.addEventListener('click', addLike);
  
  //one line!
  document.getElementById('clear').addEventListener('click', newMeme);
  document.getElementById('rando').addEventListener('click', random);
}

// Write a function called memeMe!
// get the text that is inside of the text box with a class of 'setup-input' and store in a var
// get the text that is inside of the text box with a class of 'setup-input' and store in a var
// target the paragraph with a class of 'start'
// change the text to what the user inputed for a setup line
// target the paragraph with a class of 'punch'
// change the text to what the user inputed for punch line

var memeMe = function() {
  var setup = document.querySelector('.setup-input').value;
  var punch = document.querySelector('.punch-input').value;
  
  //look ma! all in one line
  document.querySelector('.start').innerHTML = setup;
  document.querySelector('.punch').innerHTML = punch;

}

// Write a function called addLike
// create a global variable to hold likes outside of the function
// add one to the likes
// reset the value of likes on the screen to the new value;

var addLike = function() {
  likes++;
  document.querySelector('.likes').innerHTML = likes;
}

// BONUS!
// Create a new button in the html file
// If this button is pressed
// clear the text
// change the image to a new meme image
// hint: the image is a background image to the .image class
// Use the .css function to change it.
function newMeme() {
  document.querySelector('.start').innerHTML = "";
  document.querySelector('.punch').innerHTML = "";
  document.querySelector('.image').style.backgroundImage = 'url(badluckbrian.jpg)';
  
}

// SUPER BONUS!
// Create an an array of meme urls!
var memes = ["https://imgflip.com/s/meme/Futurama-Fry.jpg", "https://imgflip.com/s/meme/Creepy-Condescending-Wonka.jpg", "https://imgflip.com/s/meme/Trump-Bill-Signing.jpg"];
// When the new button is pressed, randomly select a meme image from the array!
// need help finding meme worthy images? 
// there are a ton of examples at search for imgflip 
function random(){
  //generate a random number
  var num = Math.floor(Math.random()*memes.length)

  var newBg = memes[num];

  document.querySelector('.image').style.backgroundImage = 'url('+newBg+')';

}
