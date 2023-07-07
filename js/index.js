function switchToOverview(){
    // alert("switching to overview")
    document.querySelector(".main").style = "transform: translateX(0);"
}

function switchToUpcoming(){
    // alert("switching to upcoming")
    // document.querySelector(".main").scrollTo({right:0, behavior:'smooth'})
    document.querySelector(".main").style = "transform: translateX(-95vw);"
    console.log("done");
}