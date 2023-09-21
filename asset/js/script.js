let historyNavIcon = document.querySelectorAll(".fa-clipboard")
let userAvatar = document.querySelectorAll(".userAvatar")
let homeIcon = document.querySelectorAll(".fa-house")
let backBtn = document.querySelectorAll(".back-btn")
let newTaskButton = document.querySelectorAll(".fa-plus")

import {
    colors
} from "/js/theme.js"
colors()


import {
    setIcon,
    setMiniIcon
} from "/js/icons.js"

import {
    userStat
} from "/js/securityFunctions.js"

import {
    insertTask
} from "/js/insertNewTask.js"

newTaskButton.forEach(icon => {
    setIcon(icon, "home")
});
document.querySelectorAll(".fa-book").forEach(icon => {
    setMiniIcon(icon, "books")
})
document.querySelectorAll(".fa-assignment").forEach(icon => {
    setMiniIcon(icon, "assignment")
})
document.querySelectorAll(".fa-square-check").forEach(icon => {
    setMiniIcon(icon, "check")
})
document.querySelectorAll(".fa-bell").forEach(icon => {
    setMiniIcon(icon, "notification")
})


historyNavIcon.forEach(icon => {
    setIcon(icon, "log")
    icon.addEventListener("click", () => {
        window.location.href = "/history"
    })
})

homeIcon.forEach(icon => {
    setIcon(icon, "home")
    icon.addEventListener("click", () => {
        if (document.title.toLowerCase().includes("home")) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            window.location.href = "/"
        }
    })
})

userAvatar.forEach(icon => {
    icon.addEventListener("click", () => {
        window.location.href = "/profile"
    })
})

backBtn.forEach(icon => {
    setIcon(icon, "back")
    icon.addEventListener("click", () => {
        history.back()
    })
})

let currentDate = ""
let currentTime = ""
function getCurrentDateTime() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');

    const nowCurrentDate = `${year}-${month}-${day}`
    const nowCurrentTime = `${hours}:${minutes}`;
    currentDate = nowCurrentDate
    currentTime = nowCurrentTime
}
getCurrentDateTime()

let newTaskForm = `
<div class="newTaskDivContainer">
    <div class="component-grey-card newTaskDiv">
        <h3>Create New Task</h3>
        <input type="text" class="newTaskTitle component-grey-input" placeholder="What would you love to do?">
        <select name="" id="newTaskCategory" class="newTaskCategory">
            <option value="">-- Select Category --</option>
            <option value="books">Books</option>
            <option value="assignments">Assignments</option>
            <option value="project">Projects</option>
            <option value="extras">Extras</option>
        </select>
        <label class="newTaskDateContainer">Task Completion Date and Time<br><input type="date" class="newTaskDate" value="${currentDate}"><br><input type="time" class="newTaskTime" value="${currentTime}"></label>
        <textarea name="" id="" cols="30" rows="5" maxlength="256" class="newTaskNote" placeholder=" Additional text goes here..."></textarea>
        <button class="btn create-task-btn btn-positive"> Create Task</button>
    </div>
</div>`



newTaskButton.forEach(icon => {
    setIcon(icon, "plus")
    icon.addEventListener("click", () => {
        let newTaskContainer = document.querySelector(".newTaskDivContainer")
        if (document.contains(newTaskContainer)) {
            removeTaskForm(newTaskContainer, icon)
        } else {
            addTaskForm(newTaskContainer, icon)
        }
    })
})

function removeTaskForm(newTaskContainer, icon) {
    icon.style = `transform: rotate(0deg);`
    if (document.contains(newTaskContainer)) {
        newTaskContainer.style.opacity = "0";
        setTimeout(() => {
            newTaskContainer.remove()
            document.body.style.overflow = "auto"
        }, 600)
    } else {
        return;
    }
}


export function addTaskForm(newTaskContainer, icon) {
    icon.style = `transform: rotate(45deg);`
    document.body.insertAdjacentHTML("afterbegin", newTaskForm);
    newTaskContainer = document.querySelector(".newTaskDivContainer")
    document.body.style.overflow = "hidden"
    setTimeout(() => {
        newTaskContainer.style.opacity = "1";
    }, 1)
    document.querySelector(".create-task-btn").addEventListener("click", (e) => {
        createNewTask(e)
    })
    // document.getElementById("create-task-btn").addEventListener("click", createNewTask)
}




export function progressAnimation(elementSelector, widthInPercentage) {
    elementSelector.style.width = `0%`;
    elementSelector.style.transition = `2s ease-in-out all`;
    setTimeout(() => {
        elementSelector.style.width = `${widthInPercentage}%`;
    }, 200);
}



let theme = document.createElement("meta")
theme.name = "theme-color"
theme.content = "#1e90ff"
document.getElementsByTagName('head')[0].appendChild(theme)



setInterval(() => {
    if (document.title.toLowerCase().includes("auth")) {
        userStat(true)
    } else {
        userStat()
    }
}, 500)

function createNewTask(e) {
    e.target.innerHTML = "Creating..."
    let newTaskTitle = document.querySelector(".newTaskTitle").value
    let newTaskCategory = document.querySelector(".newTaskCategory").value
    let newTaskDate = document.querySelector(".newTaskDate").value
    let newTaskTime = document.querySelector(".newTaskTime").value
    let newTaskNote = document.querySelector(".newTaskNote").value
    const newTaskID = new Date().getTime();

    let NewTask = {
        "taskTitle": `${newTaskTitle}`,
        "taskCategory": `${newTaskCategory}`,
        "taskDate": `${newTaskDate}`,
        "taskTime": `${newTaskTime}`,
        "taskID": `${newTaskID}`,
        "taskText": `${newTaskNote || ""}`
    }
    // console.log(NewTask);
    // console.log(taskSeconds);
    insertTask(NewTask)
}

















































// let allPositiveButtons = document.querySelectorAll(".btn-positive")
// allPositiveButtons.forEach(buttons => {
// buttons.addEventListener("click", () => {
// alert("a positive button has been clicked")
// document.querySelector(".btn-upcoming").classList.remove("btn-positive")
// document.querySelector(".btn-upcoming").classList.add("btn-notActive")
// document.querySelector(".btn-overview").classList.remove("btn-notActive")
// document.querySelector(".btn-overview").classList.add("btn-positive")
// })
// })

// document.body.style = `--main-color:${mainColor};`
// if(window.colors()){
//     window.colors()
// }
// else{
//     console.error("Error Loading Themes");
// }
// // Firebase
// // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyBCWgdm6PVUzPiwYxuy9dBypdaD7JztYzE",
//     authDomain: "focusflow-16a59.firebaseapp.com",
//     projectId: "focusflow-16a59",
//     storageBucket: "focusflow-16a59.appspot.com",
//     messagingSenderId: "641123456436",
//     appId: "1:641123456436:web:ef17961616129518c08ee1"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);