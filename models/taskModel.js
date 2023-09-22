const express = require("express")
const fs = require("fs")
const path = require("path")
const allTasksDirectory = path.join(__dirname, "../data/tasks.json")

let tasks;

const parseTasks = (callback) => {
    fs.readFile(allTasksDirectory, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return callback(err, null);
        }
        try {
            tasks = JSON.parse(data);
            callback(null, tasks);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            callback(parseError, null);
        }
    })
}

const getTaskWithId = id => {
    let tasksFound =[];
    parseTasks((err, tasks) => {
        if (err) {
            console.error('Error parsing tasks:', err);
            return;
        }
        tasks.forEach(task => {
            if (task.userID = id){
                console.log(task);
                tasksFound.push(task)
            }
        });

    });
}

getTaskWithId(13419);
