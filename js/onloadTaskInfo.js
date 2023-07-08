fetch("/docs/taskInfo.json", {
        method: "GET",
    })
    .then(response => response.json())
    .then(data => {
        // console.log(JSON.stringify(data))
        taskInfo = data
        // console.log(data)
        loadTaskInfo()
        allLoad(taskInfo)
    })
    .catch(error => console.error(error));

function loadTaskInfo() {
    document.querySelector(".progressPercentage").setAttribute("data-counter-max", `${taskInfo.dailyProgress}`);
    const counter3 = new Counter(".progressPercentage");
    // console.log(taskInfo.dailyProgress)
}

function allLoad(taskInfo) {
    let dailyProgressBar = document.querySelector(".dailyProgressBar");
    //  console.log(taskInfo.dailyProgress)
    progressAnimation(dailyProgressBar, taskInfo.dailyProgress);
}

function progressAnimation(elementSelector, widthInPercentage) {
    elementSelector.style.width = `0%`;
    elementSelector.style.transition = `2s ease-in-out all`;
    setTimeout(() => {
        elementSelector.style.width = `${widthInPercentage}%`;
    }, 200);
}