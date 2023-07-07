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
        if(document.title.toLowerCase().includes("home")){
            window.scrollTo({top:0, behavior:'smooth'})
        }
        else{
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
        <input type="time">
        <textarea name="" id="" cols="30" rows="10" maxlength="256"> Additional text goes here...</textarea>
        <button class="btn btn-positive"> Create Task</button>
    </div>
</div>`

newTaskButton.forEach(icon => {
    icon.addEventListener("click", () => {
        
    })
})
