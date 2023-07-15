export function timeOfDay() {
    let greetingText = "Greetings";
    let time = new Date()
    let moment = (time.getHours());
    if (moment < 10) {
        greetingText = "Good Morning";
    } else if (moment < 12) {
        greetingText = "Good Day"
    } else if (moment < 16) {
        greetingText = "Good Afternoon";
    } else if (moment < 20) {
        greetingText = "Good Evening"
    } else if (moment < 23) {
        greetingText = "Good Night"
    } else {
        greetingText = "Hello There"
    }
    return greetingText
}

setInterval(timeOfDay, 100)