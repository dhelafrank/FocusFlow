let historyNavIcon = document.querySelectorAll(".fa-clipboard")
let userAvatar = document.querySelectorAll(".userAvatar")
let homeIcon = document.querySelectorAll(".fa-house")
let backBtn = document.querySelectorAll(".back-btn")
let newTaskButton = document.querySelectorAll(".fa-plus")


historyNavIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        window.location.href = "/history.html"
    })
})

homeIcon.forEach(icon => {
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
        window.location.href = "/profile.html"
    })
})

backBtn.forEach(icon => {
    icon.addEventListener("click", () => {
        history.back()
    })
})

let newTaskForm = `
<div class="newTaskDivContainer">
    <div class="component-grey-card newTaskDiv">
        <h1>Create New Task</h1>
        <input type="text" class="taskTitle component-grey-input" placeholder="What would you love to do?">
        <select name="" id="taskCategory">
            <option value="">-- Select Category --</option>
            <option value="books">Books</option>
            <option value="assignments">Assignments</option>
            <option value="project">Projects</option>
            <option value="extra">Extras</option>
        </select>
        <input type="date" class="newTaskDate">
        <textarea name="" id="" cols="30" rows="10" maxlength="256"> Additional text goes here...</textarea>
        <button class="btn create-task btn-positive"> Create Task</button>
    </div>
</div>`


newTaskButton.forEach(icon => {
    icon.addEventListener("click", () => {
        document.body.insertAdjacentHTML("afterbegin", newTaskForm);
        document.querySelector(".btn-positive").addEventListener("click", (e) => {
            // alert(e.target.parentElement.querySelector(".newTaskDate").value)
        })
        let newTaskContainer = document.querySelector(".newTaskDivContainer")
        setTimeout(() => {
            newTaskContainer.style.opacity = "1";
        }, 1)

        window.addEventListener("scroll", () => {
            if (document.contains(newTaskContainer)) {
                newTaskContainer.style.opacity = "0";
                setTimeout(() => {
                    newTaskContainer.remove()
                }, 600)
            } else {
                return;
            }

        })
    })
})


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

import{colors}from "/js/theme.js"
colors()





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