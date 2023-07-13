export function emailSigninAnimation() {
    document.querySelector(".splashContainer").style.display = "none"
    document.querySelector(".emailSigninContainer").style.display = "flex"
    // document.querySelector(".emailSigninContainer").style = `opacity:1`
    document.querySelector(".isometricImage").style = `
    position: absolute;
    top:1vh;`
    document.querySelector(".container").style.overflow = "hidden"
    setTimeout(()=>{
        document.querySelector(".isometricImage").style = `
        position: absolute;
        top:25vh;
        transform: scale(1.4);
        opacity: 0.3;`

        // document.body.style.overflow = "hidden"

        document.querySelector(".emailSigninContainer").style.opacity = "1";
        document.querySelector(".emailSigninContainer").style.bottom = "0vw";
        document.querySelector(".container").style.overflow = "hidden"
        // document.querySelector(".emailSigninContainer").style = "transform: scale(1)"
    },5)
}