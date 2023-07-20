import {
    stringToHex
} from "/js/securityFunctions.js"  
import{
    customLoader
}from"/js/loader.js"


let step = 0
let headerText = document.querySelector(".header")
document.querySelector(".proceed").addEventListener("click", () => {
    step++
    // console.log(step)

    switch (step) {
        case 1:
            enterEmail();
            break;
        case 2:
            enterPassword();
            break;
        case 3:
            complete();
            break;
        case 4:
            proceedToLogin()
            break;
    }
})

function enterEmail() {
    document.getElementById("signUpName").style.display = "none"
    headerText.innerHTML = `Hello ${document.getElementById("signUpName").value} <br><br>`
    document.getElementById("signUpEmail").style.display = "block"
    document.querySelector(".btn-alternate").style.display = "block"
}

function enterPassword() {
    document.getElementById("signUpName").style.display = "none"
    document.getElementById("signUpEmail").style.display = "none"
    document.querySelector(".btn-alternate").style.display = "none"

    document.querySelectorAll(".passwords").forEach(passwordField => {
        passwordField.style.display = "block"
    })
}



function complete() {
    customLoader("Creating your account, please standby", true)
    attemptingAccountCreation()
}

function attemptingAccountCreation() {
    const nameInputValue = document.getElementById('signUpName').value
    const emailInputValue = document.getElementById("signUpEmail").value
    const passwordInputValue = document.getElementById("signUpPasswordConfirm").value

    let apiKey = ""
    let binID = ""

    fetch("/docs/auth.json", {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            apiKey = data.apiKey
            binID = data.userCreationBin
            proceedToSignup(nameInputValue, emailInputValue, passwordInputValue, apiKey, binID)
        })
        .catch(error => console.error(error));

    
    
    
    
        function proceedToSignup(name, email, password, apiKey, binID) {
            getUsers()
         function getUsers() {
            fetch(`https://api.jsonbin.io/v3/b/${binID}`, {
                    method: "GET",
                    headers: {
                        "X-Master-Key": `${binID}`
                    }
                })
                .then(response => response.json())
                .then(data => {
                    sessionStorage.setItem("otherInfo", JSON.stringify(data))
                    parseUserData()
                })
                .catch(error => console.log(error));
        }


        function registerUser(allUsers, registeredUser) {
            fetch(`https://api.jsonbin.io/v3/b/${binID}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Master-Key": `${apiKey}`
                    },
                    body: JSON.stringify(allUsers.record)
                })
                .then(response => response.json())
                .then(data => {
                    proceedToLogin()
                })
                .catch(error => {
                    console.log(error);
                });
        }

        function parseUserData() {
            let stringAllUsers = sessionStorage.getItem("otherInfo")
            let allUsers = JSON.parse(stringAllUsers)

            let registeredUser = {
                "name": `${name}`,
                "email": `${email}`,
                "id": "",
                "taskID": "",
                "avatar": "",
                "password": `${stringToHex(password)}`
            }
            allUsers.record.push(registeredUser)
            registerUser(allUsers, registeredUser)
        }
    }

}

function proceedToLogin(){
    customLoader()
    document.querySelector(".form").style.display = "none"
    headerText.innerHTML = `Welcome ${document.getElementById("signUpName").value} <br><br>`
    document.querySelector(".header").style = `top:0vh;
    z-index:3;
    `
    document.querySelector(".accountCreationText").style = "transform:scale(0.5)"
    setTimeout(() => {
        document.querySelector(".header").style = `top:20vh; `
        document.querySelector(".accountCreationText").style = "transform:scale(1)"
    }, 200);
    document.querySelector(".accountCreationText").innerHTML = `Your account with ${document.getElementById("signUpEmail").value} has been successfully created <br>please proceed to Sign In <br><br><br>
    <span class="emphasy">Let's get you FOCUSED</span>
    `
    document.querySelector(".reSigninButton").addEventListener("click", () => {
        window.location.href = "/auth.html"
    })
    document.querySelector(".reSigninButton").style.display = "block"
}
// API Demo