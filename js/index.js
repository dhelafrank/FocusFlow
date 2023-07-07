function switchToOverview(){
    alert("switching to overview")
}

function switchToUpcoming(){
    alert("switching to upcoming")
    document.querySelector(".upcoming").classList.add("show")
    document.querySelector(".categories").style.display = "none"
}