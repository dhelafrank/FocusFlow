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
                document.querySelector(".loader-message").innerHTML = "Your account was not set up properly, contact admin"
                document.querySelector(".loaderbtn").style.display = "none"
                document.querySelector(".reset").style.display = "block"
            }, 7000);
        }


        function error() {
            setTimeout(() => {
                document.querySelector(".loader-message").innerHTML = "Please check your internet connnection"
                document.querySelector(".loaderbtn").style.display = "none"
                document.querySelector(".reset").style.display = "block"
            }, 8000);
        }

    } else {
        setTimeout(() => {
            document.querySelector(".circleLoaderContainer").remove()
        }, 1000);
    }

    document.querySelector(".reset").addEventListener("click", () => {
        localStorage.clear()
        window.location.href = "/auth.html"
    })
}

export function customLoader(loaderMessage, state) {
    let loaderContainer = `<div class="circleLoaderContainer">
    <img src="/Asset/loaders/loader2.svg" alt="">
    <h2 class="loader-message" style="text-align:center">${loaderMessage}</h2>
</div>`

    if (state == true) {
        document.body.insertAdjacentHTML("afterbegin", loaderContainer)
        setTimeout(() => {
            document.querySelector(".loader-message").innerHTML = "Please check your internet connnection"
        }, 8000);

    } else {
        setTimeout(() => {
            document.querySelector(".circleLoaderContainer").remove()
        }, 1000);
    }
}