document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.querySelector('#create-task-form');
  const newTaskDescription = document.querySelector("#new-task-description");

  const newTaskUl = document.querySelector("#tasks");

  newTaskForm.addEventListener("submit", createNewTask)
});

const createNewTask = event => {
  event.preventDefault();
  const newTaskDescription = document.querySelector("#new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();

};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};