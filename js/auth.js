import {
    emailSigninAnimation
} from "/js/authAnimation.js";
import {
    stringToHex
} from "/js/securityFunctions.js"

document.querySelector(".emailSignin").addEventListener("click", () => {
    emailSigninAnimation()
})


document.querySelector(".loginEmailButton").addEventListener("click", () => {
    let siginEmailAddress = document.querySelector(".signinEmailField").value
    let signinPassword = document.querySelector(".signinPasswordField").value
    emailSignin(siginEmailAddress, signinPassword)
})

function emailSignin(siginEmailAddress, signinPassword) {
    let apiKey = ""
    alert("Signing In...")
    fetch("/docs/auth.json", {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            apiKey = data.apiKey
            alert(apiKey)
            proceedToLogin(siginEmailAddress, signinPassword, apiKey)
        })
        .catch(error => console.error(error));


    function proceedToLogin(siginEmailAddress, signinPassword, apiKey) {
        fetch("/docs/usersInfo.json", {
                method: "GET",
            })
            .then(response => response.json())
            .then(data => {
                let usersInfo = data

                function validateUser() {
                    usersInfo.forEach(user => {
                        if (user.email == siginEmailAddress && user.password == stringToHex(signinPassword)) {
                            alert("That Was a Success")
                            succesfullLogin(user)
                        }
                    });
                    alert("Login Failed")
                }
                validateUser()
            })
            .catch(error => console.error(error));
    }
}

function succesfullLogin(user) {
    localStorage.setItem("currentUser", user)
    localStorage.setItem("userAuth", true)
}