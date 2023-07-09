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
    
    document.querySelector(".project-card").innerHTML = `<span 
    class="progressPercentage"
    data-counter-min="0" 
    data-counter-max="1" 
    data-counter-speed="1000" 
    data-counter-increment="1" 
    data-counter-delay="0">${taskInfo.projects}</span>/${taskInfo.totalProjects}`
    document.querySelector(".assignment-card").innerHTML = `<span 
    class="progressPercentage"
    data-counter-min="0" 
    data-counter-max="1" 
    data-counter-speed="1000" 
    data-counter-increment="1" 
    data-counter-delay="0">${taskInfo.assignments}</span>/${taskInfo.totalAssignments}`
    document.querySelector(".book-card").innerHTML = `<span 
    class="progressPercentage"
    data-counter-min="0" 
    data-counter-max="1" 
    data-counter-speed="1000" 
    data-counter-increment="1" 
    data-counter-delay="0">${taskInfo.books}</span>/${taskInfo.totalBooks}`
    document.querySelector(".extra-card").innerHTML = `<span 
    class="progressPercentage"
    data-counter-min="0" 
    data-counter-max="1" 
    data-counter-speed="1000" 
    data-counter-increment="1" 
    data-counter-delay="0">${taskInfo.extras}</span>/${taskInfo.totalExtras}`
    const counter3 = new Counter(".progressPercentage");
}


function progressAnimation(elementSelector, widthInPercentage) {
    elementSelector.style.width = `0%`;
    elementSelector.style.transition = `2s ease-in-out all`;
    setTimeout(() => {
        elementSelector.style.width = `${widthInPercentage}%`;
    }, 200);
}

function allLoad(taskInfo) {
    let dailyProgressBar = document.querySelector(".dailyProgressBar");
    progressAnimation(dailyProgressBar, taskInfo.dailyProgress);
    progressAnimation(document.querySelector(".book-card").parentElement.querySelector(".inbar"), 100/taskInfo.totalBooks * taskInfo.books)
    progressAnimation(document.querySelector(".assignment-card").parentElement.querySelector(".inbar"), 100/taskInfo.totalAssignments * taskInfo.assignments)
    progressAnimation(document.querySelector(".project-card").parentElement.querySelector(".inbar"), 100/taskInfo.totalProjects * taskInfo.projects)
    progressAnimation(document.querySelector(".extra-card").parentElement.querySelector(".inbar"), 100/taskInfo.totalExtras * taskInfo.extras)

    document.querySelector(".book-card").parentElement.parentElement.querySelector(".caption").innerHTML = `${taskInfo.totalBooks - taskInfo.books} New`
    document.querySelector(".assignment-card").parentElement.parentElement.querySelector(".caption").innerHTML = `${taskInfo.totalAssignments - taskInfo.assignments} New`
    document.querySelector(".project-card").parentElement.parentElement.querySelector(".caption").innerHTML = `${taskInfo.totalProjects - taskInfo.projects} New`
    document.querySelector(".extra-card").parentElement.parentElement.querySelector(".caption").innerHTML = `${taskInfo.totalExtras - taskInfo.extras} New`
}
