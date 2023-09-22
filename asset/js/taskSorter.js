let allTasks = ["Foo", "bar"]

export function findNumberOfTaskPerCategory(categoryName, allTasks){
    let count = 0;
    allTasks.forEach(task => {
        if (task.taskCategory === categoryName) {
            count++;
        }
    });
    return count;
}

export function findNumberOfCompletedTaskPerCategory(categoryName, allTasks) {
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

export function findTotalNumberOfTaskCompleted() {
    let count = 0;
    allTasks.forEach(task => {
        if (task.status === "completed") {
            count++
        }
    });
    return count
}

export function findPercentageOfTotalNumberOfTaskCompleted(allTasks) {
    let count = 0;
    let finalCount = 0;

    allTasks.forEach(task => {
        // console.log(allTasks.length);
        if (task.status === "completed") {
            count++
        }
    });
    // console.log(count);
    finalCount = count / allTasks.length * 100
    let roundedCount = Math.round(finalCount)
    // console.log(roundedCount);
    return roundedCount
}

export function getAllTasksInACategory(categoryName, allTasks) {
    let categoryTasks = []
    allTasks.forEach(task => {
        if (task.taskCategory == categoryName) {
            categoryTasks.push(task)
        }
    })
    return categoryTasks
}