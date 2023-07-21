import {
    customLoader
} from "/js/loader.js";
//String to hex converter
export const stringToHex = (str) => {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        const hexValue = charCode.toString(16);

        //Padding with zeros
        hex += hexValue.padStart(2, '0');
    }
    return hex;
}

export function userStat(halt) {
    if (halt == true) {
        return;
    } else {
        check()
    }

    function check() {
        if (localStorage.getItem("userAuth") !== "true") {
            console.error("You Must Login First")
            window.location.href = "/auth.html"
        } else {
            return;
        }
    }
}


export function currentUserDetails() {
    let userInfo = localStorage.getItem("currentUser")
    let currentUser = JSON.parse(userInfo)
    return currentUser
}

export async function currentUserTasks(suppliedID) {
    let currentUserTasks = ["T", "E", "S", "T"]
    const response = await fetch("/docs/tasksDatabase.json", {
        method: "GET",
    })
    const data = await response.json();
    currentUserTasks = getTasks(data, suppliedID)
    return currentUserTasks
    // localStorage.setItem("currentUserTasks", JSON.stringify(currentUserTasks))
}

function getTasks(data, suppliedID) {

    data.forEach(task => {
        if (task.id == suppliedID) {
            // if (task.tasks == null || undefined || suppliedID) {
            // currentUserTasks = [{
            //     "taskTitle": "Fixing Some Bugs in Project Code",
            //     "taskCategory": "projects",
            //     "taskDate": "2023-06-15",
            //     "taskText": "in proress"
            // }, {
            //     "taskTitle": "Fixing Some Bugs in Project Code",
            //     "taskCategory": "projects",
            //     "taskDate": "2023-06-15",
            //     "taskText": "in proress"
            // }]
            // } else {
            currentUserTasks = task.tasks
            // }
        } else {
            currentUserTasks = false
        }

    });
    return currentUserTasks;
}