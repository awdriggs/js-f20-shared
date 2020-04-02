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

  // Use a for loop to add 5 more songs. You can make the names generic, like “new song 1”

}
