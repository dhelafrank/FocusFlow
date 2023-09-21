function logger(processName) {
    let dataSent = `${JSON.stringify(processName)} executed at ${new Date().getTime()}`
    return dataSent
}

export async function processDatabaseCreation(newDB) {
    async function auth() {
        const response = await fetch("/docs/auth.json")
        const data = await response.json()
        // console.log(logger(data))
        return data
    }
    // console.log(logger(authFunction))
    let authFunction = await auth()
    getAllTasks(authFunction.taskDatabase, newDB, authFunction.apiKey)
}

function getAllTasks(binID, newDB, apiKey) {
    fetch(`https://api.jsonbin.io/v3/b/${binID}`, {
            method: "GET",
            headers: {
                "X-Master-Key": `${apiKey}`
            }
        })
        .then(response => response.json())
        .then(data => {
            // sessionStorage.setItem("tasksDatabase", JSON.stringify(data.record))
            // console.log(data);
            let updatedTaskDatabase = parseNewDatabse(newDB, data.record)
            // console.log(updatedTaskDatabase);
            updateTotalDatabase(updatedTaskDatabase, binID, apiKey)
        })
        .catch(error => console.log(error));
}


function updateTotalDatabase(updatedTaskDatabase, binID, apiKey) {
    fetch(`https://api.jsonbin.io/v3/b/${binID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": `${apiKey}`
            },
            body: JSON.stringify(updatedTaskDatabase)
        })
        .then(response => response.json())
        .then(data => {
            console.log("That went well...");
        })
        .catch(error => {
            console.log(error);
        });
}

function parseNewDatabse(newDB, allDB) {
    // let stringTaskDatabase = sessionStorage.getItem("tasksDatabase")

    // console.log(stringTaskDatabase);
    // let taskDatabase = JSON.parse(stringTaskDatabase)
    // console.log(taskDatabase);
    // console.log(allDB);
    allDB.push(newDB)
    return allDB
}