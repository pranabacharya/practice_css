"use strict"




const taskInput = document.querySelector("#task");
const addBtn = document.querySelector(".add-btn");
const ULcontainer = document.querySelector(".ul-container");
const removeALLbtn = document.querySelector("#remove-all");
const filter = document.querySelector("#filter");

loadEventListener()

function loadEventListener() {
    document.addEventListener("DOMContentLoaded", getTask);
    addBtn.addEventListener("click", addTask);
    ULcontainer.addEventListener("click", removeTask);
    removeALLbtn.addEventListener("click", removeAll);
    filter.addEventListener("keyup", filterTask);
}
function getTask() {

}

function addTask() {
    if (taskInput.value == "") {
        alert("Add a tsk");
    } else {
        const li = document.createElement("li");
        li.className = "collection-item";
        li.innerHTML = taskInput.value;
        const link = document.createElement("a");
        link.className = "delete-item float";
        link.innerHTML = "DEL";
        li.append(link);
        ULcontainer.append(li);

        
        //Store Task
        // storeTaskInLocalStorage(taskInput.value);
        taskInput.value = "";
        
    }
}

// function storeTaskInLocalStorage(task){
//     let tasks;
//     if(localStorage.getItem('tasks') === null) {
//         tasks = [];
//     }else{
//         tasks = JSON.stringify("task",tasks);
//     }
//     localStorage.setItem(tasks)

// }

function removeTask(event) {
    if (event.target.classList.contains("delete-item")) {
        if (confirm("Are you sure ?")) {
            event.target.parentElement.remove();
        }
    }
}

function removeAll() {
    if (ULcontainer.innerHTML == "") {
        alert("Nothing to remove");
    } else {
        if (confirm("Do you want to remove all tasks?")) {
            while (ULcontainer.firstChild) {
                ULcontainer.removeChild(ULcontainer.firstChild);
            }
        }
    }
}

function filterTask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}
