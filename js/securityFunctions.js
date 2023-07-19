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
    if (halt === true) {
        return;
    } else {
        if (localStorage.getItem("userAuth") === true) {
            return;
        } else {
            alert("You Must Login First")
            window.location.href = "/auth.html"
        }
    }
}