function switchToOverview(){
    document.querySelector(".main").style = "transform: translateX(0);"
    document.querySelector(".btn-upcoming").classList.remove("btn-positive")
    document.querySelector(".btn-upcoming").classList.add("btn-notActive")
    document.querySelector(".btn-overview").classList.remove("btn-notActive")
    document.querySelector(".btn-overview").classList.add("btn-positive")
}

function switchToUpcoming(){
    document.querySelector(".main").style = "transform: translateX(-95vw);"
    document.querySelector(".btn-upcoming").classList.add("btn-positive")
    document.querySelector(".btn-upcoming").classList.remove("btn-notActive")
    document.querySelector(".btn-overview").classList.add("btn-notActive")
    document.querySelector(".btn-overview").classList.remove("btn-positive")
}