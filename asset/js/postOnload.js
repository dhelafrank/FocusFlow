// console.log("post script has loaded");

// Declaration of Variables

let post = JSON.parse(localStorage.getItem("postObject"))
// console.log(post)

let postTitle = document.querySelector(".blogTitle")
// let postDate = document.querySelector(".postDate")
// let postAuthor = document.querySelector(".postAuthor")
let postContent = document.querySelector(".blogContent")


//Execution of main function
// to display the data from local storage in HTML elements
document.title = (` Focus Flow - ${post.topic.replaceAll("\"", "")}`)
postTitle.innerHTML = post.topic
// postDate.innerHTML = post.date
// postAuthor.innerHTML = post.author
postContent.innerHTML = post.content