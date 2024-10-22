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

import {
    timeOfDay
} from "/js/greeting.js";

import {
    currentUserDetails,
    currentUserTasks
} from "/js/securityFunctions.js";

import {
    load,
    customLoader
} from "/js/loader.js";

import {
    colors
} from "/js/theme.js"

import {
    addTaskForm
} from "/js/script.js";

import {
    processDatabaseCreation
} from "/js/createNewTaskDatabase.js";

colors()

async function taskFetching() {
    let taskID = JSON.parse(localStorage.getItem("currentUser")).taskID.toLowerCase()
    // console.log(JSON.parse(localStorage.getItem("currentUser")).taskID.toLowerCase());
    let allTasks = await currentUserTasks(taskID)

    if (allTasks != false) {
        sortTask(await allTasks)
        load(true)
        localStorage.setItem("currentUserTask", JSON.stringify(allTasks))
    } else {
        customLoader("You have not created any tasks yet", true, 0, newTask, "Create your first task")
        console.log('No tasks found for this user')
    }
}
taskFetching()

document.querySelector(".btn-overview").addEventListener("click", () => {
    document.querySelector(".main").style = "transform: translateX(0);"
    document.querySelector(".btn-upcoming").classList.remove("btn-positive")
    document.querySelector(".btn-upcoming").classList.add("btn-notActive")
    document.querySelector(".btn-overview").classList.remove("btn-notActive")
    document.querySelector(".btn-overview").classList.add("btn-positive")
})

document.querySelector(".btn-upcoming").addEventListener("click", () => {
    document.querySelector(".main").style = "transform: translateX(-95vw);"
    document.querySelector(".btn-upcoming").classList.add("btn-positive")
    document.querySelector(".btn-upcoming").classList.remove("btn-notActive")
    document.querySelector(".btn-overview").classList.add("btn-notActive")
    document.querySelector(".btn-overview").classList.remove("btn-positive")
})

let greeting = document.querySelector(".greeting")
let progressCards = document.querySelectorAll(".progressCard")


progressCards.forEach(card => {
    card.addEventListener("click", (e) => {
        let categoryName = card.querySelector(".CardCategoryName").innerHTML.toLowerCase()
        sessionStorage.setItem("categoryName", categoryName)
        window.location.href = "/taskCategory"
    })
})



// console.log(currentUser);
document.querySelector(".user-name").innerHTML = currentUserDetails().name
greeting.innerHTML = timeOfDay()

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
    let totalNumberOfTaskCompletedPercentage = findPercentageOfTotalNumberOfTaskCompleted(allTasks) || 1

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
    load()
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

function quote() {
    let quoteText = ""
    let quoteAuthor = ""
    fetch("https://type.fit/api/quotes", {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            // let quoteItself = data[Math.random()*(data.length - 2)+2]
            let quoteItself = data[Math.floor(Math.random() * data.length)];
            quoteText = quoteItself.text
            quoteAuthor = quoteItself.author

            function fillQoute() {
                document.querySelector(".quote-text").innerHTML = quoteText
                document.querySelector(".quote-author").innerHTML = quoteAuthor
            }
            fillQoute()
        })
}
quote()

function newTask() {
    let taskID = JSON.parse(localStorage.getItem("currentUser")).taskID.toLowerCase()
    console.log("Creating...");
    let newDB = {
        "id": `${taskID}`,
        "tasks": [{}]
    }
    processDatabaseCreation(newDB)
    customLoader()
    addTaskForm(document.querySelector(".newTaskDivContainer"), document.querySelector(".loaderbtn"))
}