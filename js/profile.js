import {
    currentUserDetails
} from "/js/securityFunctions.js";
document.querySelector(".userName").innerHTML = currentUserDetails().name
document.querySelector(".userEmail").innerHTML = currentUserDetails().email



document.querySelector(".logout").addEventListener("click", ()=>{
    localStorage.clear()
    window.location.href = "/auth.html"
})


