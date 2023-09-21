export async function insertTask(NewTask) {
    const response = await fetch("/docs/auth.json")
    const data = await response.json()
    const binID = data.taskDatabase
    const apiKey = data.apiKey

    // console.log(`${binID}  ${apiKey}`);

    let currentTaskID = JSON.parse(localStorage.getItem("currentUser")).taskID.toLowerCase()

    let currentUserTasks = JSON.parse(localStorage.getItem("currentUserTask"))
    currentUserTasks.push(NewTask)
    // console.log(currentUserTasks);
    updateTaskDatabase(currentTaskID, binID, apiKey, currentUserTasks, NewTask)
}


async function updateTaskDatabase(currentTaskID, binID, apiKey, currentUserTasks, NewTask) {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binID}`, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "X-Master-Key": `${apiKey}`
        }
    })
    const data = await response.json()
    const allTasks = data.record
    // console.log(allTasks);
    // console.log(currentTaskID);
    allTasks.forEach(task => {
        if(task.id == currentTaskID){
            task.tasks.push(NewTask)
        }
    });
    // console.log(allTasks);
    updateTotalTaskDatabase(binID, apiKey, allTasks)

}

function updateTotalTaskDatabase(binID, apiKey, allTasks) {
    fetch(`https://api.jsonbin.io/v3/b/${binID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": `${apiKey}`
            },
            body: JSON.stringify(allTasks)
        })
        .then(response => response.json())
        .then(data => {
            console.log("That went well...");
            location.reload()
        })
        .catch(error => {
            console.log(error);
        });
}













// function updatedTaskDatabase(taskID, binID, apiKey) {
//     fetch(`https://api.jsonbin.io/v3/b/${binID}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//                 "X-Master-Key": `${apiKey}`
//             },
//             body: JSON.stringify(updatedTaskDatabase)
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log("That went well...");
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

// function updatedTaskDatabase(binID, newDB, apiKey) {
//     fetch(`https://api.jsonbin.io/v3/b/${binID}`, {
//             method: "GET",
//             headers: {
//                 "X-Master-Key": `${apiKey}`
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             // sessionStorage.setItem("tasksDatabase", JSON.stringify(data.record))
//             // console.log(data);
//             let updatedTaskDatabase = parseNewDatabse(newDB, data.record)
//             // console.log(updatedTaskDatabase);
//             updateTotalDatabase(updatedTaskDatabase, binID, apiKey)
//         })
//         .catch(error => console.log(error));
// }