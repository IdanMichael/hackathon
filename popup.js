
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

      addStats(data)
    });

    
function addStats (data){
  const likeNode = document.createElement("p")
  const dislikeNode = document.createElement("p")

  likeNode.innerText = "likes: " + data.items[0].statistics.likeCount
  dislikeNode.innerText = "dislikes: " + data.items[0].statistics.dislikeCount

  document.body.appendChild(likeNode)
  document.body.appendChild(dislikeNode)

}

