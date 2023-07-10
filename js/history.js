function taskHistory(allTasks) {
    // console.log(allTasks)
    appendTaskCards(allTasks)
}

function appendTaskCards(allTasks) {
    taskCount = 0
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
        notCompletedTaskCard = document.querySelectorAll(".notCompletedTaskCard")
    });
}

function sortForAll(){
    document.querySelector(".btn-completed-task").classList.remove("btn-positive")
    document.querySelector(".btn-completed-task").classList.add("btn-notActive")
    document.querySelector(".btn-all-task").classList.remove("btn-notActive")
    document.querySelector(".btn-all-task").classList.add("btn-positive")
    notCompletedTaskCard.forEach(taskCard =>{
        taskCard.style.display = "flex"
    })
}

function sortForCompleted(){
    document.querySelector(".btn-completed-task").classList.add("btn-positive")
    document.querySelector(".btn-completed-task").classList.remove("btn-notActive")
    document.querySelector(".btn-all-task").classList.add("btn-notActive")
    document.querySelector(".btn-all-task").classList.remove("btn-positive")
    notCompletedTaskCard.forEach(taskCard =>{
        taskCard.style.display = "none"
    })
}