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
        window.location.href = "/"
    })
})

userAvatar.forEach(icon => {
    icon.addEventListener("click", () => {
        window.location.href = "/profile.html"
    })
})