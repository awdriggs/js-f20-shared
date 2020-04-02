//this function fires once the document is loaded and ready
//i'm going to put all the code I want to run in here
//why is this needed??
window.onload = function() {
  // selecting using the tag name
  // document.querySelector("h1").innerHTML = "Adam's Todo List"

  document.querySelector("#title").innerHTML = "Adam's Todo List"



  //creates new list item
  var todo = document.createElement('li');
  //adds content to the new list item
  todo.innerHTML = "Cook Dinner";


  //select using the clas name
  var list = document.querySelector(".todoList");
  //add to the parent
  list.append(todo);

  var todo2 = document.createElement('li');
  todo2.innerHTML = "Clean Kitchen";
  list.append(todo2);

  //adds inline style
  //todo2.style.color ="orange";
  todo2.classList.add("current");

  //create an event listener
  var add = document.querySelector('#add');
  add.addEventListener("click", addItem);
}

var addItem = function() {
  //store the text in the text box
  var textInput = document.querySelector('#newItem')
  var newListItem = textInput.value
  //creates new list item
  var todo = document.createElement('li');
  //adds content to the new list item
  todo.innerHTML = newListItem;


  //select using the clas name
  var list = document.querySelector(".todoList");
  //add to the parent
  list.append(todo);

  textInput.value = "";
  // document.querySelector('#newItem').value = " "


}
