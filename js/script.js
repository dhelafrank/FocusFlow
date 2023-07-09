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
        document.querySelector(".btn-positive").addEventListener("click", (e)=>{
            // alert(e.target.parentElement.querySelector(".newTaskDate").value)
        })
        let newTaskContainer =  document.querySelector(".newTaskDivContainer")
        setTimeout(() => {
            newTaskContainer.style.opacity = "1";
        }, 1)

        window.addEventListener("scroll", () => {
            if (document.contains(newTaskContainer)) {
                newTaskContainer.style.opacity = "0";
                setTimeout(() => {
                    newTaskContainer.remove()
                }, 600)
            }
            else{
                return;
            }

        })
    })
})

function themeColor(){
    var meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = "#157ce2"
    document.getElementsByTagName('head')[0].appendChild(meta)
}
themeColor()