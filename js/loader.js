export function load(state) {
    let loaderContainer = `<div class="circleLoaderContainer">
    <img src="/Asset/loaders/loader2.svg" alt="">
    <h2>Getting your tasks...</h2>
    <button class="btn-positive btn loaderbtn" onclick="location.reload()">Get Started</button>
</div>`

    if (state == true) {
        document.body.insertAdjacentHTML("afterbegin", loaderContainer)
        setTimeout(() => {
            document.querySelector(".loaderbtn").style.display = "block"
        }, 3000);

    } else {
        setTimeout(() => {
            document.querySelector(".circleLoaderContainer").remove()
        }, 300);
    }
}