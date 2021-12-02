
let word = chrome.extension.getBackgroundPage()
let url = word.link.url


let likes = 0;
let dislikes = 0;

const youtubeKey = "AIzaSyApjzcm86yI6joRyWIDy4QhKAxV9ghJJKQ" 
const videoID = url.split("v=")[1]
const link = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + videoID + '&key=' + youtubeKey
 fetch(link)
    .then((data) => data.json())
    .then((data) => {

      likes = data.items[0].statistics.likeCount
      dislikes = data.items[0].statistics.dislikeCount
      
      console.log(likes)
      console.log(dislikes)
    });
function addStats (){
  const likeNode = document.createElement("p")
const dislikeNode = document.createElement("p")

likeNode.innerText = "likes: " + likes
dislikeNode.innerText = "dislikes: " + dislikes 

document.body.appendChild(likeNode)
document.body.appendChild(dislikeNode)

}

setTimeout(() =>{
  addStats()
},150)