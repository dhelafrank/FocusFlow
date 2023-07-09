fetch("/docs/tasks.json", {
        method: "GET",
    }).then(response => response.json())
    .then(
        data => {
            allTasks = data
            // findNumberOfTaskPerCategory()
            // let completedBooks = findNumberOfCompletedTaskPerCategory("books")
            // console.log(completedBooks)
            // let p = findPercentageOfTotalNumberOfTaskCompleted()
            // console.log(p);
            sortTask()
        }
    )



function findNumberOfTaskPerCategory(categoryName) {
    let count = 0;
    allTasks.forEach(task => {
        if (task.taskCategory === categoryName) {
            count++;
        }
    });

    return count;
}

function findNumberOfCompletedTaskPerCategory(categoryName) {
    let count = 0;
    allTasks.forEach(task => {
        if (task.taskCategory === categoryName) {
            let precurringTask = task
            if (precurringTask.status == "completed") {
                count++
            }
        }
    });
    return count
}

function findTotalNumberOfTaskCompleted() {
    let count = 0;
    allTasks.forEach(task => {
        if (task.status === "completed") {
            count++
        }
    });
    return count
}

function findPercentageOfTotalNumberOfTaskCompleted() {
    let count = 0;
    finalCount = 0;

    allTasks.forEach(task => {
        // console.log(allTasks.length);
        if (task.status === "completed") {
            count++
        }
    });
    // console.log(count);
    finalCount = count / allTasks.length * 100
    roundedCount = Math.round(finalCount)
    // console.log(roundedCount);
    return roundedCount
}

function sortTask() {
    books = findNumberOfCompletedTaskPerCategory("books")
    assignments = findNumberOfCompletedTaskPerCategory("assignments")
    projects = findNumberOfCompletedTaskPerCategory("projects")
    extras = findNumberOfCompletedTaskPerCategory("extras")

    totalBooks = findNumberOfTaskPerCategory("books")
    totalAssignments = findNumberOfTaskPerCategory("assignments")
    totalProjects = findNumberOfTaskPerCategory("projects")
    totalExtras = findNumberOfTaskPerCategory("extras")

    totalNumberOfTaskCompleted = findTotalNumberOfTaskCompleted()
    allTasksTotal = allTasks.length
    totalNumberOfTaskCompletedPercentage = findPercentageOfTotalNumberOfTaskCompleted()

    createTaskObject()
}

function createTaskObject() {
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
    loadTaskInfo(taskInfo)
    allLoad(taskInfo)
}