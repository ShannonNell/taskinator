//Used the DOM to target the button object
var buttonEl = document.querySelector("#save-task");
//console.log(buttonEl);
// variable reference to the task list
var tasksToDoEl = document.querySelector("#tasks-to-do");

//createTaskHandler function in place of the code block that was in the anonymous funciton (in addEventListener)
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// attach event listener to capture user's click
buttonEl.addEventListener("click", createTaskHandler);

