let taskForm = document.getElementById("form") as HTMLFormElement;
let userInput = document.getElementById("input") as HTMLInputElement;
let submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

let todoList = document.getElementById("display-task") as HTMLUListElement;

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTask = userInput.value;

  if (newTask === "") {
    alert("Task cannot be empty");
    return;
  }

  createTask(newTask);
  newTask = "";
});

const createTask = (task: string): void => {
  let taskList = document.createElement("li");

  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  taskList.appendChild(checkBox);

  taskList.innerHTML = task;

  let editBtn = document.createElement("button");
  editBtn.innerText = "edit";
  taskList.appendChild(editBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  taskList.appendChild(deleteBtn);

  todoList.appendChild(taskList);
  if (checkBox.checked) {
    taskList.style.textDecoration = "line-through";
  } else {
    taskList.style.textDecoration = "none";
  }
};
