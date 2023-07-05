let historyNavIcon = document.querySelectorAll(".fa-clipboard")

historyNavIcon.forEach(icon => {
    icon.addEventListener("click", ()=>{
        window.location.href("/history.html")
    })
})

let homeIcon = document.querySelectorAll(".fa-house")

homeIcon.forEach(icon => {
    icon.addEventListener("click", ()=>{
        window.location.href("/")
    })
})