//String to hex converter
export const stringToHex = (str) => {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        const hexValue = charCode.toString(16);

        //Padding with zeros
        hex += hexValue.padStart(2, '0');
    }
    return hex;
}

export function userStat(halt) {
    if (halt == true) {
        return;
    } else {
        check()
    }
    function check(){
        if (localStorage.getItem("userAuth") !== "true") {
            console.error("You Must Login First")
            window.location.href = "/auth.html"
       } else {
          return;
       }
    }
}


export function currentUserDetails(){
    let userInfo = localStorage.getItem("currentUser")
    let currentUser = JSON.parse(userInfo)
    return currentUser
}