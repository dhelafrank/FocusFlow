import {
    currentUserDetails,
    currentUserTasks
} from "/js/securityFunctions.js";
import {
    customLoader
} from "/js//loader.js";

customLoader("Gathering your tasks", true)
function taskFetching() {
    currentUserTasks(`${currentUserDetails().taskID.toLowerCase()}`)
    let allTasks = localStorage.getItem("currentUserTasks")
    setTimeout(() => {
        taskHistory(JSON.parse((allTasks)))
    }, 500)
}
taskFetching()

function taskHistory(allTasks) {
    appendTaskCards(allTasks)
}

function appendTaskCards(allTasks) {
    let taskCount = 0
    let taskCard = ""
    allTasks.forEach(task => {
        if (task.status == "completed") {
            taskCard = `
            <div class="component-grey-card taskCard completedTaskCard">
            <h4>${task.taskTitle}</h4>
            <p class="caption">${task.taskCategory}</p>
            </div>
            `
        } else {
            taskCard = `
            <div class="component-grey-card taskCard notCompletedTaskCard">
            <h4>${task.taskTitle}</h4>
            <p class="caption">${task.taskCategory}</p>
            </div>
            `
        }
        document.querySelector(".historyCardContainer").insertAdjacentHTML("beforeend", taskCard)
    });
    customLoader()
}

function sortForAll() {
    let notCompletedTaskCard = document.querySelectorAll(".notCompletedTaskCard")
    document.querySelector(".btn-completed-task").classList.remove("btn-positive")
    document.querySelector(".btn-completed-task").classList.add("btn-notActive")
    document.querySelector(".btn-all-task").classList.remove("btn-notActive")
    document.querySelector(".btn-all-task").classList.add("btn-positive")
    notCompletedTaskCard.forEach(taskCard => {
        taskCard.style.display = "flex"
    })
}

function sortForCompleted() {
    let notCompletedTaskCard = document.querySelectorAll(".notCompletedTaskCard")
    document.querySelector(".btn-completed-task").classList.add("btn-positive")
    document.querySelector(".btn-completed-task").classList.remove("btn-notActive")
    document.querySelector(".btn-all-task").classList.add("btn-notActive")
    document.querySelector(".btn-all-task").classList.remove("btn-positive")
    notCompletedTaskCard.forEach(taskCard => {
        taskCard.style.display = "none"
    })
}

document.querySelector(".btn-completed-task").addEventListener("click", sortForCompleted)
document.querySelector(".btn-all-task").addEventListener("click", sortForAll)