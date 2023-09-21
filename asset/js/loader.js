export function load(state) {
    let loaderContainer = `<div class="circleLoaderContainer">
    <img src="/Asset/loaders/loader2.svg" alt="">
    <h2 class="loader-message" style="text-align:center">Getting your tasks...</h2>
    <button class="btn-positive btn loaderbtn" onclick="location.reload()">Get Started</button>
    <button class="btn-positive btn reset" style="background:#DC3545">Try Again</button>
</div>`

    if (state == true) {
        document.body.insertAdjacentHTML("afterbegin", loaderContainer)
        checkValidUser()

        function checkValidUser() {
            let check = localStorage.getItem("currentUser")
            let userValidation = JSON.parse(check)
            // console.log(check);
            if (userValidation.taskID.length > 1) {
                setTimeout(() => {
                    document.querySelector(".loaderbtn").style.display = "block"
                    error()
                }, 3000);
            } else {
                accountError()
            }
        }

        function accountError() {
            setTimeout(() => {
                document.querySelector(".loader-message").innerHTML = "Your account was not set up properly, please contact admin"
                document.querySelector(".loaderbtn").style.display = "none"
                document.querySelector(".reset").style.display = "block"
            }, 7000);
        }


        function error() {
            setTimeout(() => {
                document.querySelector(".loader-message").innerHTML = "Please check your internet connnection"
                document.querySelector(".loaderbtn").style.display = "none"
                document.querySelector(".reset").style.display = "block"

                document.querySelector(".reset").addEventListener("click", () => {
                    localStorage.clear()
                    window.location.href = "/auth"
                })
            }, 8000);
        }

    } else {
        setTimeout(() => {
            document.querySelector(".circleLoaderContainer").remove()
        }, 1000);
    }
}

export function customLoader(loaderMessage, state, duration, functionName, btnMessage) {
    let loaderContainer = `<div class="circleLoaderContainer">
    <img src="/Asset/loaders/loader2.svg" alt="">
    <h2 class="loader-message" style="text-align:center">${loaderMessage}</h2>
    <button class="btn-positive btn loaderbtn">${btnMessage}</button>
</div>`

    if (state == true) {
        document.body.style.overflow = "hidden"
        document.body.insertAdjacentHTML("afterbegin", loaderContainer)
        document.querySelector(".loaderbtn").addEventListener("click", functionName)
        setTimeout(() => {
            if (btnMessage.length < 3) {
                document.querySelector(".loaderbtn").style.display = "none";
                console.log("No Button Message");
            } else {
                document.querySelector(".loaderbtn").style.display = "block"
                console.log("Button Message Given");
            }
        }, 1000);
    } else if (state == false) {
        setTimeout(() => {
            document.querySelector(".circleLoaderContainer").remove()
        }, `${duration}`);
        if (loaderMessage.length > 0) {
            return;
        }
        if (functionType.length > 0) {
            return;
        }
        if (btnMessage.length > 0) {
            return;
        }
    } else {
        setTimeout(() => {
            document.querySelector(".circleLoaderContainer").remove()
        }, 1000);
    }
}