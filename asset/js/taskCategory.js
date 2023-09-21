import {
    progressAnimation
} from "/js/script.js";
import {
    findNumberOfTaskPerCategory,
    findNumberOfCompletedTaskPerCategory,
    getAllTasksInACategory
} from "/js/taskSorter.js"


let categoryTasks = []
let allTasks = ""
fetch("/docs/tasks.json", {
        method: "GET",
    }).then(response => response.json())
    .then(
        data => {
            allTasks = data
            getNecessities(allTasks)
            categoryTasks = getAllTasksInACategory(categoryNameGotten, allTasks)
            populateTaskCardContainer(categoryTasks)
        }
    )


let categoryName = document.querySelectorAll(".categoryName")
let categoryNameGotten = sessionStorage.getItem("categoryName")
let progressBar = document.querySelector(".inbar")
let progressPercentage = document.querySelector(".progressPercentage")


categoryName.forEach(element => {
    let categoryNameModified = categoryNameGotten.charAt(0).toUpperCase() + categoryNameGotten.slice(1)
    element.innerHTML = categoryNameModified
})

function getNecessities() {
    // console.log(categoryNameGotten);
    var taskTotal = findNumberOfTaskPerCategory(categoryNameGotten, allTasks)
    var taskCompleted = findNumberOfCompletedTaskPerCategory(categoryNameGotten, allTasks)
    var taskPercentage = (taskCompleted / taskTotal) * 100
    // console.log(taskPercentage);
    insertNeccesities(taskPercentage)
}



function insertNeccesities(taskPercentage) {
    progressAnimation(progressBar, taskPercentage)


    let counterValue = 10
    if (Math.round(taskPercentage) < 10) {
        return;
    } else {
        counterValue = Math.round(taskPercentage)
    }
    progressPercentage.setAttribute("data-counter-max", `${counterValue}`)
    progressPercentage.innerText = Math.round(taskPercentage)


    const counter = new Counter(".progressPercentage");
}

document.querySelector(".btn-all-task").addEventListener("click", () => {
let notCompletedTaskCard = document.querySelectorAll(".notCompletedTaskCard")
    document.querySelector(".btn-completed-task").classList.remove("btn-positive")
    document.querySelector(".btn-completed-task").classList.add("btn-notActive")
    document.querySelector(".btn-all-task").classList.remove("btn-notActive")
    document.querySelector(".btn-all-task").classList.add("btn-positive")

    notCompletedTaskCard.forEach(taskCard => {
        taskCard.style.display = "block"
    })

})
document.querySelector(".btn-completed-task").addEventListener("click", () => {
let notCompletedTaskCard = document.querySelectorAll(".notCompletedTaskCard")
    document.querySelector(".btn-completed-task").classList.add("btn-positive")
    document.querySelector(".btn-completed-task").classList.remove("btn-notActive")
    document.querySelector(".btn-all-task").classList.add("btn-notActive")
    document.querySelector(".btn-all-task").classList.remove("btn-positive")

    notCompletedTaskCard.forEach(taskCard => {
        taskCard.style.display = "none"
    })

})

function populateTaskCardContainer(categoryTasks) {
    categoryTasks.forEach(task => {

        let taskCard = ""
        if (task.status == "completed") {
           taskCard = `   <div class="component-grey-card taskCard completedTaskCard">
                            <h4>${task.taskTitle}</h4>
                            <p class="caption"> Created on: ${task.taskDate}</p>
                            </div>`
        } else {
           taskCard = `   <div class="component-grey-card taskCard notCompletedTaskCard">
                            <h4>${task.taskTitle}</h4>
                            <p class="caption"> Created on: ${task.taskDate}</p>
                            </div>`
        }
        document.querySelector(".taskCardContainer").insertAdjacentHTML("beforeend",taskCard)
    })
}