var enter = document.getElementById("enter");
var userInput = document.getElementById("userInput");
var todolist = document.querySelector(".todo-list");
var donebtn = `<button type="button" name="Done">Done</button>`
var delbtn = `<button type="button" name="Delete">Delete</button>`





function createlistitem(){
  //ddiv in ul//
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

   //li in div//
  const newtodo = document.createElement("li");
  newtodo.innerText = userInput.value;
  newtodo.classList.add("todo-item");
  todoDiv.appendChild(newtodo);

  //done btn//
  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.classList.add("done-btn");
  todoDiv.appendChild(doneButton);
  todolist.appendChild(todoDiv);

  //del btn//
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  userInput.value = "";

}
todolist.addEventListener("click", deletecheck);

enter.addEventListener("click", function(){
  if(userInput.value.length>0){
    createlistitem();

}})

userInput.addEventListener("keypress", function(event){
  if(userInput.value.length>0 && Event.code === 13){
    createlistitem();
}})


function deletecheck(e){
  item = e.target;
  if(item.classList[0] === "delete-btn"){
    todo = item.parentElement;
    todo.remove();
  }
  if(item.classList[0] === "done-btn"){
    todo = item.parentElement;
    todo.classList.toggle("done");
  }
}
