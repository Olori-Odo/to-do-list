"use strict";
let taskForm = document.getElementById("form");
let userInput = document.getElementById("input");
let submitBtn = document.getElementById("submit-btn");
let todoList = document.getElementById("display-task");
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
const createTask = (task) => {
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
    console.log(taskList);
    console.log(task);
    console.log(todoList);
};
