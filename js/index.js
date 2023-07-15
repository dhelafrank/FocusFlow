function switchToOverview() {
    document.querySelector(".main").style = "transform: translateX(0);"
    document.querySelector(".btn-upcoming").classList.remove("btn-positive")
    document.querySelector(".btn-upcoming").classList.add("btn-notActive")
    document.querySelector(".btn-overview").classList.remove("btn-notActive")
    document.querySelector(".btn-overview").classList.add("btn-positive")
}

function switchToUpcoming() {
    document.querySelector(".main").style = "transform: translateX(-95vw);"
    document.querySelector(".btn-upcoming").classList.add("btn-positive")
    document.querySelector(".btn-upcoming").classList.remove("btn-notActive")
    document.querySelector(".btn-overview").classList.add("btn-notActive")
    document.querySelector(".btn-overview").classList.remove("btn-positive")
}


let greeting = document.querySelector(".greeting")
let upcomingSection = document.querySelector(".upcoming")

function refresh(){
    let time = new Date()
    let moment = (time.getHours());
    if (moment < 10) {
        greeting.innerHTML = "Good Morning 🌄";
    } else if (moment < 12) {
        greeting.innerHTML = "Good Day 🌅"
    } else if (moment < 16) {
        greeting.innerHTML = "Good Afternoon 🏜️";
    } else if (moment < 20) {
        greeting.innerHTML = "Good Evening 🌆"
    } else if (moment < 23) {
        greeting.innerHTML = "Good Night 🌃"
    } else {
        greeting.innerHTML = "Hello There"
    }
}
setInterval(refresh, 100)