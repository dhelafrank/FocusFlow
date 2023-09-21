fetch("/docs/posts.json", {
    method: "GET",
  })
  .then(response => response.json())
  .then(data => {
    // console.log(JSON.stringify(data))
    allPosts = data
    // console.log(data)
    fillPosts(allPosts)
  })
  .catch(error => console.error(error));

  
function fillPosts(allPosts) {
  allPosts.forEach(post => {
    postCard = `
    <div class="blogContainer">
    <div class="blogImgContainer">
        <img src="/Asset/imgPlaceholder.webp" alt="" srcset="">
    </div>
    <p class="blogHeading">${post.topic}</p>
    <p class="blogSummary">
    ${post.content.substring(0, 60)}...
    </p>
</div>
`
    document.querySelector(".feedsContainer").insertAdjacentHTML("beforeend", postCard)
  });
  eventListener(allPosts)
}
// console.log("script loaded");



function eventListener(allPosts) {
  let blogContainer = document.querySelectorAll(".blogContainer");
  blogContainer.forEach(element => {
    element.addEventListener("click", (e) => {
      let targetTopic = ""
      try {
         targetTopic = (e.target.parentElement.querySelector(".blogHeading").innerText)
      } catch (error) {
         targetTopic = (e.target.parentElement.parentElement.querySelector(".blogHeading").innerText)
      }
      finally{
        // alert(`${e.target} ${targetTopic}`)
        loadBlog(targetTopic)
      }
    });
    
  });
}


function loadBlog(targetTopic){
  for (let i = 0; i < allPosts.length; i++) {
    if (allPosts[i].topic == targetTopic){
      localStorage.setItem("postObject", JSON.stringify(allPosts[i]))
    }
  }
  window.location.href = "/post"
}

// function loadFromImage(e){
  
  
//   for (let i = 0; i < allPosts.length; i++) {
//     if (allPosts[i].topic == targetObject){
//       localStorage.setItem("postObject", JSON.stringify(allPosts[i]))
//     }
//   }
//   console.log((e.target.querySelector(".blogHeading").innerText))
//   window.location.href = "/post"
// }