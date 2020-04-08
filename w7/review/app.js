var likes;

//add onload
//get fired when the browser is ready
window.onload = function(){
  console.log('working');

  //target elements
  var button = document.querySelector(".like");

  //add event listener
  //button.addEventListener("click", addLike);

  button.addEventListener("click", function(){
    likes++;
    document.querySelector(".num-likes").innerText = likes;
  })
//initializing likes to be the number of likes
  likes = document.querySelector(".num-likes").innerText;
}

// function addLike(){
//   likes++;
//   //target the num-likes
//   //update the text to match likes
//   document.querySelector(".num-likes").innerText = likes;
//
// }
