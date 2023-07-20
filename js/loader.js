export function load(state) {
    let loaderContainer = `<div class="circleLoaderContainer">
    <img src="/Asset/loaders/loader2.svg" alt="">
    <h2 class="loader-message" style="text-align:center">Getting your tasks...</h2>
    <button class="btn-positive btn loaderbtn" onclick="location.reload()">Get Started</button>
</div>`

    if (state == true) {
        document.body.insertAdjacentHTML("afterbegin", loaderContainer)
        setTimeout(() => {
            document.querySelector(".loaderbtn").style.display = "block"
        }, 3000);
        setTimeout(() => {
            document.querySelector(".loader-message").innerHTML = "Please check your internet connnection"
            document.querySelector(".loaderbtn").style.display = "none"
        }, 8000);

    } else {
        setTimeout(() => {
            document.querySelector(".circleLoaderContainer").remove()
        }, 1000);
    }
}

export function customLoader(loaderMessage, state){
    let loaderContainer = `<div class="circleLoaderContainer">
    <img src="/Asset/loaders/loader2.svg" alt="">
    <h2 class="loader-message" style="text-align:center">${loaderMessage}</h2>
    <button class="btn-positive btn loaderbtn" onclick="location.reload()">Get Started</button>
</div>`

    if (state == true) {
        document.body.insertAdjacentHTML("afterbegin", loaderContainer)
        setTimeout(() => {
            document.querySelector(".loader-message").innerHTML = "Please check your internet connnection"
            document.querySelector(".loaderbtn").style.display = "none"
        }, 8000);

    } else {
        setTimeout(() => {
            document.querySelector(".circleLoaderContainer").remove()
        }, 1000);
    }
}