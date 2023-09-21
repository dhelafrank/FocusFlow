

export function loadTaskInfo(taskInfo) {
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
import { progressAnimation } from "/js/script.js";

export function allLoad(taskInfo) {
    let dailyProgressBar = document.querySelector(".dailyProgressBar");
    progressAnimation(dailyProgressBar, taskInfo.dailyProgress);
    progressAnimation(document.querySelector(".book-card").parentElement.querySelector(".inbar"), 100/taskInfo.totalBooks * taskInfo.books)
    progressAnimation(document.querySelector(".assignment-card").parentElement.querySelector(".inbar"), 100/taskInfo.totalAssignments * taskInfo.assignments)
    progressAnimation(document.querySelector(".project-card").parentElement.querySelector(".inbar"), 100/taskInfo.totalProjects * taskInfo.projects)
    progressAnimation(document.querySelector(".extra-card").parentElement.querySelector(".inbar"), 100/taskInfo.totalExtras * taskInfo.extras)

    document.querySelector(".book-card").parentElement.parentElement.querySelector(".caption").innerHTML = `${taskInfo.totalBooks - taskInfo.books} Pending`
    document.querySelector(".assignment-card").parentElement.parentElement.querySelector(".caption").innerHTML = `${taskInfo.totalAssignments - taskInfo.assignments} Pending`
    document.querySelector(".project-card").parentElement.parentElement.querySelector(".caption").innerHTML = `${taskInfo.totalProjects - taskInfo.projects} Pending`
    document.querySelector(".extra-card").parentElement.parentElement.querySelector(".caption").innerHTML = `${taskInfo.totalExtras - taskInfo.extras} Pending`
}
