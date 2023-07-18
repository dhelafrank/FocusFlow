import {
    emailSigninAnimation
} from "/js/authAnimation.js";
console.log("food");
document.querySelector(".emailSignin").addEventListener("click", ()=>{
    
    emailSigninAnimation()

})

document.getElementsByClassName("emailSigninForm").addEventListener("submit", ()=>{
    alert("You are in")
})
function userIn(){
    alert("you are in...")
}
// function emailSignin(){
    
// }