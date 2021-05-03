var formEl = document.querySelector("#task-form");

// variable reference to the task list
var tasksToDoEl = document.querySelector("#tasks-to-do");

//createTaskHandler function in place of the code block that was in the anonymous funciton (in addEventListener)
var createTaskHandler = function(event) {
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);
