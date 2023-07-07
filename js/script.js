let historyNavIcon = document.querySelectorAll(".fa-clipboard")
let userAvatar = document.querySelectorAll(".userAvatar")
let homeIcon = document.querySelectorAll(".fa-house")

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
