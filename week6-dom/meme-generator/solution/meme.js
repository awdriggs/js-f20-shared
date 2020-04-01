// Write a function called memeMe!
// get the text that is inside of the text box with a class of 'setup-input' and store in a var
// get the text that is inside of the text box with a class of 'setup-input' and store in a var
// target the paragraph with a class of 'start'
// change the text to what the user inputed for a setup line
// target the paragraph with a class of 'punch'
// change the text to what the user inputed for punch line
var memeMe = function() {
  var setup = document.querySelector('.setup-input').value
  var punch = document.querySelector('.punch-input').value

  document.querySelector('.start').innerHTML = setup;
  document.querySelector('.punch').innerHTML = punch;
}

// Write a function called addLike
// target the text with a class of 'likes'
// store the text in a var
// hint: this will be a string, but we want it to be a number!
// add one to the likes
// reset the value of likes on the screen to the new value;
var addLike = function() {
  // select the likes text, ++ type casts to a number
  var likes = document.querySelector('.likes');
  // add one to that value, 
  likes.innerHTML++;
}


//document ready?
// use js to append a h1 with a title to the wrapper
// create an event listener to watch for on a click on the generate button 
// hint: it has a class name!
// if the button is pressed, run the function memeMe

// create an event listener ot watch for a clikc on the 'like' button
// if the button is pressed, run the addLike function
window.onload = function() {
    document.querySelector('.generate').addEventListener('click', memeMe)
    document.querySelector('.like').addEventListener('click', addLike)
    document.querySelector('.new').addEventListener('click', newMeme)
  }
  // BONUS!
  // Create a new button in the html
  // If this button is pressed
  // clear the text
  // change the image to a new meme image
  // hint: the image is a background image to the .image class
  // Use the .style function to change it.
function newMeme() {

  document.querySelector('.start').innerHTML = "";
  document.querySelector('.punch').innerHTML = "";

  document.querySelector('.likes').innerHTML = "";
  var image = document.querySelector('.image');

  image.style.backgroundImage = 'url("badluckbrian.jpg")';
}

// SUPER BONUS!
// Create an an array of meme urls!
// When the new button is pressed, randomly select a meme image from the array!

// need help finding meme worthy images? 
// there are a ton of examples at https://memegenerator.net
