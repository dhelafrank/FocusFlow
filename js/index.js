import {
    findNumberOfTaskPerCategory,
    findNumberOfCompletedTaskPerCategory,
    findTotalNumberOfTaskCompleted,
    findPercentageOfTotalNumberOfTaskCompleted
} from "/js/taskSorter.js"
import {
    loadTaskInfo,
    allLoad
} from "/js/onloadTaskInfo.js"

let allTasks = ""
fetch("/docs/tasks.json", {
        method: "GET",
    }).then(response => response.json())
    .then(
        data => {
            allTasks = data
            sortTask(allTasks)
        }
    )

    document.querySelector(".btn-overview").addEventListener("click", ()=>{
        document.querySelector(".main").style = "transform: translateX(0);"
        document.querySelector(".btn-upcoming").classList.remove("btn-positive")
        document.querySelector(".btn-upcoming").classList.add("btn-notActive")
        document.querySelector(".btn-overview").classList.remove("btn-notActive")
        document.querySelector(".btn-overview").classList.add("btn-positive")
    })
    
    document.querySelector(".btn-upcoming").addEventListener("click", ()=>{
        document.querySelector(".main").style = "transform: translateX(-95vw);"
        document.querySelector(".btn-upcoming").classList.add("btn-positive")
        document.querySelector(".btn-upcoming").classList.remove("btn-notActive")
        document.querySelector(".btn-overview").classList.add("btn-notActive")
        document.querySelector(".btn-overview").classList.remove("btn-positive")
    })

let greeting = document.querySelector(".greeting")
let progressCards = document.querySelectorAll(".progressCard")
let upcomingSection = document.querySelector(".upcoming")

import {
    timeOfDay
} from "/js/greeting.js";
greeting.innerHTML = timeOfDay()

progressCards.forEach(card => {
    card.addEventListener("click", (e) => {
        let categoryName = card.querySelector(".CardCategoryName").innerHTML.toLowerCase()
        sessionStorage.setItem("categoryName", categoryName)
        window.location.href = "/taskCategory.html"
    })
})

function sortTask(allTasks) {
    var books = findNumberOfCompletedTaskPerCategory("books", allTasks)
    var assignments = findNumberOfCompletedTaskPerCategory("assignments", allTasks)
    var projects = findNumberOfCompletedTaskPerCategory("projects", allTasks)
    var extras = findNumberOfCompletedTaskPerCategory("extras", allTasks)

    var totalBooks = findNumberOfTaskPerCategory("books", allTasks)
    var totalAssignments = findNumberOfTaskPerCategory("assignments", allTasks)
    var totalProjects = findNumberOfTaskPerCategory("projects", allTasks)
    var totalExtras = findNumberOfTaskPerCategory("extras", allTasks)

    var totalNumberOfTaskCompleted = findTotalNumberOfTaskCompleted()
    var allTasksTotal = allTasks.length
    // console.log(findPercentageOfTotalNumberOfTaskCompleted(allTasks));
    let totalNumberOfTaskCompletedPercentage = findPercentageOfTotalNumberOfTaskCompleted(allTasks) || 30

    let taskInfo = {
        "dailyProgress": `${totalNumberOfTaskCompletedPercentage}`,
        "books": `${books}`,
        "assignments": `${assignments}`,
        "projects": `${projects}`,
        "extras": `${extras}`,

        "totalBooks": `${totalBooks}`,
        "totalAssignments": `${totalAssignments}`,
        "totalProjects": `${totalProjects}`,
        "totalExtras": `${totalExtras}`,

        "totalTask": `${allTasksTotal || 7}`,
        "totalCompletedTask": `${totalNumberOfTaskCompleted}`
    }

    runScreenFunctions(taskInfo)
}


function runScreenFunctions(taskInfo) {
    if (currentScreenValidation("home") == true) {
        loadTaskInfo(taskInfo)
        allLoad(taskInfo)
    }

    if (currentScreenValidation("history") == true) {
        taskHistory(allTasks)
    }
}

function currentScreenValidation(screen) {
    if (document.title.toLowerCase().includes(screen)) {
        return true
    }
}