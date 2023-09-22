import {
    emailSigninAnimation
} from "/js/authAnimation.js";
import {
    stringToHex
} from "/js/securityFunctions.js"

import {
    load,
    customLoader
} from "/js/loader.js";
document.querySelector(".emailSignin").addEventListener("click", () => {
    emailSigninAnimation()
})


document.querySelector(".loginEmailButton").addEventListener("click", (e) => {
    let siginEmailAddress = document.querySelector(".signinEmailField").value
    let signinPassword = document.querySelector(".signinPasswordField").value
    emailSignin(siginEmailAddress, signinPassword, e)
    e.target.innerHTML = "Signing in..."
})

function emailSignin(siginEmailAddress, signinPassword, e) {
    let apiKey = ""
    let binID = ""
    fetch("/docs/auth.json", {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            apiKey = data.apiKey
            binID = data.userCreationBin
            proceedToLogin(siginEmailAddress, signinPassword, apiKey, e)
        })
        .catch(error => console.error(error));


    function proceedToLogin(siginEmailAddress, signinPassword, apiKey) {
        //Production
        fetch(`https://api.jsonbin.io/v3/b/${binID}`, {

            // Local Development Only
            // fetch(`/docs/usersInfo.json`, {
                method: "GET",
                headers: {
                    "X-Master-Key": `${binID}`
                }
            })
            .then(response => response.json())
            .then(data => {
                //Production
                let usersInfo = data.record

                //Local Development Only
                // let usersInfo = data
                function validateUser() {
                    usersInfo.forEach(user => {
                        if (user.email == siginEmailAddress && user.password == stringToHex(signinPassword)) {
                            customLoader("Standby...", true)
                            localStorage.setItem("currentUser", JSON.stringify(user))
                            localStorage.setItem("userAuth", true)
                            window.location.href = "/"
                        }
                        failedLogin(e)
                    });
                }
                validateUser(usersInfo)
            })
            .catch((error)=>{
                e.target.innerHTML = "Connection Failed"
                console.error(error);
            });
    }
}

function failedLogin(e) {
    e.target.innerHTML = "Sign in"
    document.querySelector(".signinPasswordField").value = ""
    document.querySelectorAll(".component-form-input").forEach(input => {
        input.style.border = ".5px solid red"
        setTimeout(() => {
            input.style.border = "none"
        }, 3000)
    })
}

document.querySelector(".noAccountLink").addEventListener("click", (e) => {
    e.target.style.color = "#45c930"
    setTimeout(() => {
        window.location.href = "/signup"
    }, 500);
})