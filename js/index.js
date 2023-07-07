function switchToOverview(){
    // alert("switching to overview")
    document.querySelector(".main").style = "transform: translateX(0);"
    document.querySelector(".btn-upcoming").classList.remove("btn-positive")
    document.querySelector(".btn-upcoming").classList.add("btn-notActive")
    document.querySelector(".btn-overview").classList.remove("btn-notActive")
    document.querySelector(".btn-overview").classList.add("btn-positive")
}

function switchToUpcoming(){
    // alert("switching to upcoming")
    // document.querySelector(".main").scrollTo({right:0, behavior:'smooth'})
    document.querySelector(".main").style = "transform: translateX(-95vw);"
    document.querySelector(".btn-upcoming").classList.add("btn-positive")
    document.querySelector(".btn-upcoming").classList.remove("btn-notActive")
    document.querySelector(".btn-overview").classList.add("btn-notActive")
    document.querySelector(".btn-overview").classList.remove("btn-positive")
    console.log("done");
}