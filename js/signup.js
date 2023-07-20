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
            // proceedToLogin()
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



function complete(){
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
    document.querySelector(".reSigninButton").addEventListener("click", ()=>{
        window.location.href="/auth.html"
    })
    document.querySelector(".reSigninButton").style.display = "block"
}