//my array of songs
var songs = ["Red Eyes - War On Drugs", "The Barrell - Aldous Harding", "Creep - Radiohead"]

window.onload = function() {
  console.log('ready');
  //PART1
  // Use js to change the change your name in the title
  document.querySelector("#title").innerHTML = "Doug's Playlist"
  // Use js to add three songs to the ul with a class of `playlist`
  var song1 = document.createElement('li')
  song1.innerHTML = '4am - Grimes'
  // document.querySelector('.playlist').append(song1);

  var song2 = document.createElement('li')
  song2.innerHTML = 'song2'
  document.querySelector('.playlist').append(song1, song2);

  // Add the class 'now-playing' to the first song you added
  document.querySelector("li").classList.add("now-playing");

  //PART2
  // Return the the playlist exercise.
  // Use “for...of” to make the songs you added previously have a class of 'played'.
  for(var one of document.querySelector('.playlist').children){
    one.classList.add('played');
  }
  // Use a for loop to add 5 more songs. You can make the names generic, like “new song 1”
  for(var title of songs){
    var song = document.createElement('li');
    song.innerHTML =  title;
      document.querySelector('.playlist').append(song);
  }

  //PART 3
  //add a click listener to the add button
  //addItems 
  document.querySelector('.add').addEventListener('click', addItem);
}

//additem function
function addItem(){
  //grab the text value in the text input
  var title = document.querySelector(".newItem").value;

  //only if the text is NOT empty
  if(title){
    var song = document.createElement('li');
    song.innerHTML =  title;
    document.querySelector('.playlist').append(song);
  }

  //clear the text box afterwards
  document.querySelector(".newItem").value = "";

}
